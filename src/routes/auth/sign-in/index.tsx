import { message } from "@tauri-apps/plugin-dialog";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Column } from "@/components/layout/column";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Labeled } from "@/components/ui/labeled";
import { Typo } from "@/components/ui/typography";
import { apiClient } from "@/lib/http";
import { fullViewportHeight } from "@/styles/utils.css";
import type { SignInResponse } from "@/types/response";

export default function SignInPage() {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const onClickSignIn = async () => {
		if (!username || !password) {
			await message("모든 항목을 채워주세요");
			return;
		}

		try {
			const res = await apiClient.post<SignInResponse>(
				"/api/users/api/login/",
				{
					username,
					password,
				},
			);

			localStorage.setItem("accessToken", res.access);
			localStorage.setItem("userData", JSON.stringify(res.user));

			navigate("/", { replace: true });
		} catch (error) {
			console.error("failed to signin", error);
			await message(`로그인 오류, ${error}`);
		}
	};

	return (
		<Column className={fullViewportHeight}>
			<Container>
				<Typo.Title weight="strong">로그인</Typo.Title>
			</Container>
			<Labeled label="아이디">
				<Input value={username} onValue={setUsername} />
			</Labeled>
			<Labeled label="비밀번호">
				<Input type="password" value={password} onValue={setPassword} />
			</Labeled>
			<Container>
				<Button onClick={onClickSignIn}>로그인</Button>
			</Container>
			<Container>
				<Link to="/auth/sign-up">
					<Typo.Body>회원가입</Typo.Body>
				</Link>
			</Container>
		</Column>
	);
}
