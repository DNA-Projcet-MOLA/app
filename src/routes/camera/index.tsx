import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Column } from "@/components/layout/column";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { TopNavigator } from "@/components/ui/top-navigator";
import { GoBack } from "@/components/ui/top-navigator/go-back";
import { video, wrapper } from "./styles.css";

export default function CameraPage() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const navigate = useNavigate();

	const onClickCapture = useCallback(() => {
		navigate("/result");
	}, [navigate]);

	useEffect(() => {
		navigator.mediaDevices
			.getUserMedia({
				video: { facingMode: "environment" },
				audio: false,
			})
			.then((stream) => {
				if (!videoRef.current) {
					console.warn("no video ref");
					return;
				}

				videoRef.current.srcObject = stream;
			});
	}, []);

	return (
		<Column className={wrapper}>
			<TopNavigator leadingArea={<GoBack path="/" />} />
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
		</Column>
	);
}
