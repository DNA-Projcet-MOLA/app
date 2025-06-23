import { message } from "@tauri-apps/plugin-dialog";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Column } from "@/components/layout/column";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { TopNavigator } from "@/components/ui/top-navigator";
import { GoBack } from "@/components/ui/top-navigator/go-back";
import { blobToBase64 } from "@/lib/common";
import { video, wrapper } from "./styles.css";
import "image-capture";

export default function CameraPage() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
	const navigate = useNavigate();

	const isMediaSupported = Boolean(navigator.mediaDevices?.getUserMedia);

	const onClickCapture = useCallback(async () => {
		try {
			if (mediaStream?.active && videoRef.current) {
				const videoEl = videoRef.current;
				const canvas = document.createElement("canvas");
				canvas.width = videoEl.videoWidth;
				canvas.height = videoEl.videoHeight;
				const ctx = canvas.getContext("2d");
				if (!ctx) throw new Error("Canvas context를 가져올 수 없습니다.");
				ctx.drawImage(videoEl, 0, 0);
				const blob = await new Promise<Blob>((resolve, reject) => {
					canvas.toBlob(
						(b) =>
							b ? resolve(b) : reject(new Error("Blob 변환에 실패했습니다.")),
						"image/jpeg",
					);
				});

				localStorage.setItem("photo", await blobToBase64(blob));
				navigate("/result");
			} else {
				await message("사진을 촬영할 수 없습니다.");
			}
		} catch (error) {
			console.error("failed to capture", error);
			await message(`오류가 발생했습니다. ${error}`);
		}
	}, [mediaStream, navigate]);

	const onFileUpload = useCallback(
		async (e: React.ChangeEvent<HTMLInputElement>) => {
			try {
				const file = e.target.files?.[0];
				if (!file) {
					await message("파일을 선택하지 않았습니다.");
					return;
				}
				const base64 = await blobToBase64(file);
				localStorage.setItem("photo", base64);
				navigate("/result");
			} catch (error) {
				console.error("failed to upload", error);
				await message(`파일 업로드 중 오류가 발생했습니다. ${error}`);
			}
		},
		[navigate],
	);

	useEffect(() => {
		if (!isMediaSupported) return;

		navigator.mediaDevices
			.getUserMedia({ video: { facingMode: "environment" }, audio: false })
			.then((stream) => {
				if (!videoRef.current) {
					console.warn("no video ref");
					return;
				}
				videoRef.current.srcObject = stream;
				setMediaStream(stream);
			})
			.catch((err) => {
				console.error("getUserMedia error", err);
			});
	}, [isMediaSupported]);

	return (
		<Column className={wrapper} justify="space-between">
			<TopNavigator leadingArea={<GoBack path="/" />} />

			{isMediaSupported ? (
				<>
					<video
						ref={videoRef}
						className={video}
						autoPlay
						muted
						playsInline
						controls={false}
					/>
					<Container>
						<Button onClick={onClickCapture}>촬영</Button>
					</Container>
				</>
			) : (
				<Container>
					<input
						ref={fileInputRef}
						type="file"
						accept="image/*"
						style={{ display: "none" }}
						onChange={onFileUpload}
					/>
					<Button onClick={() => fileInputRef.current?.click()}>
						파일 업로드
					</Button>
				</Container>
			)}
		</Column>
	);
}
