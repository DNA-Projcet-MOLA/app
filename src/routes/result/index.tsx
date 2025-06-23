import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@/components/layout/container";
import { Row } from "@/components/layout/row";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { Labeled } from "@/components/ui/labeled";
import { TopNavigator } from "@/components/ui/top-navigator";
import { GoBack } from "@/components/ui/top-navigator/go-back";
import { base64ToBlob } from "@/lib/common";
import { image } from "./styles.css";

export default function ResultPage() {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(true);
	const [photo, setPhoto] = useState<Blob | null>(null);

	const onClickRetake = useCallback(() => {
		navigate("/camera");
	}, [navigate]);

	const onClickConfirm = useCallback(() => {
		navigate("/");
	}, [navigate]);

	useEffect(() => {
		if (isLoading) {
			return;
		}

		const base64Photo = localStorage.getItem("photo");
		if (!base64Photo) {
			navigate("/camera", { replace: true });
		} else {
			setPhoto(base64ToBlob(base64Photo));
		}
	}, [isLoading, navigate]);

	return (
		<>
			<TopNavigator leadingArea={<GoBack label="오늘의 도전" path="/" />} />
			{isLoading ? "loading..." : <Header title="수1 / 원의 방정식" />}
			<Labeled label="이미지">
				{photo ? (
					<Container vertical="none" horizontal="small">
						<img
							className={image}
							src={URL.createObjectURL(photo)}
							alt="찍은 사진"
						/>
					</Container>
				) : null}
			</Labeled>
			<Container>
				<Row gap={8}>
					<Button variant="secondary" onClick={onClickRetake}>
						다시 촬영
					</Button>
					<Button disabled={isLoading} onClick={onClickConfirm}>
						확인
					</Button>
				</Row>
			</Container>
		</>
	);
}
