import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@/components/layout/container";
import { Row } from "@/components/layout/row";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { Labeled } from "@/components/ui/labeled";
import { TopNavigator } from "@/components/ui/top-navigator";
import { GoBack } from "@/components/ui/top-navigator/go-back";
import { Typo } from "@/components/ui/typography";

export default function ResultPage() {
	const navigate = useNavigate();

	const onClickRetake = useCallback(() => {
		navigate("/camera");
	}, [navigate]);

	const onClickConfirm = useCallback(() => {
		navigate("/");
	}, [navigate]);

	return (
		<>
			<TopNavigator leadingArea={<GoBack label="오늘의 도전" path="/" />} />
			<Header title="수1 / 원의 방정식" />
			<Labeled label="결과">
				<Typo.Lead weight="strong">정답</Typo.Lead>
			</Labeled>
			<Labeled label="이미지">
				<Container vertical="none" horizontal="small">
					<div />
				</Container>
			</Labeled>
			<Container>
				<Row gap={8}>
					<Button variant="secondary" onClick={onClickRetake}>
						다시 촬영
					</Button>
					<Button onClick={onClickConfirm}>확인</Button>
				</Row>
			</Container>
		</>
	);
}
