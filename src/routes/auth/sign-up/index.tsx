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
import type { SignInResponse, SignUpResponse } from "@/types/response";

export default function SignUpPage() {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [birthdate, setBirthdate] = useState("");
	const [school, setSchool] = useState("");
	const [studentNumber, setStudentNumber] = useState("");
	const [password, setPassword] = useState("");
	const [passwordCheck, setPasswordCheck] = useState("");

	const onClickSignUp = async () => {
		if (
			!username ||
			!email ||
			!name ||
			!birthdate ||
			!school ||
			!studentNumber ||
			!password ||
			!passwordCheck
		) {
			await message("모든 항목을 채워주세요.");
			return;
		}

		if (password !== passwordCheck) {
			await message("비밀번호가 일치하지 않습니다.");
			return;
		}

		try {
			const signupRes = await apiClient.post<SignUpResponse>(
				"/api/users/api/signup/",
				{
					username,
					email,
					real_name: name,
					birthdate,
					school,
					student_number: studentNumber,
					password,
					password2: passwordCheck,
				},
			);
			const loginRes = await apiClient.post<SignInResponse>(
				"/api/users/api/login/",
				{
					username,
					password,
				},
			);

			localStorage.setItem("accessToken", loginRes.access);
			localStorage.setItem("data", JSON.stringify(signupRes));

			await message("회원가입 성공");

			navigate("/", { replace: true });
		} catch (error) {
			console.error("failed to signup", error);
			await message(`회원가입 오류, ${error}`);
		}
	};

	return (
		<Column>
			<Container>
				<Typo.Title weight="strong">회원가입</Typo.Title>
			</Container>
			<Labeled label="아이디">
				<Input value={username} onValue={setUsername} />
			</Labeled>
			<Labeled label="이메일">
				<Input type="email" value={email} onValue={setEmail} />
			</Labeled>
			<Labeled label="이름">
				<Input value={name} onValue={setName} />
			</Labeled>
			<Labeled label="생년월일">
				<Input type="date" value={birthdate} onValue={setBirthdate} />
			</Labeled>
			<Labeled label="학교명">
				<Input value={school} onValue={setSchool} />
			</Labeled>
			<Labeled label="학번">
				<Input value={studentNumber} onValue={setStudentNumber} />
			</Labeled>
			<Labeled label="비밀번호">
				<Input type="password" value={password} onValue={setPassword} />
			</Labeled>
			<Labeled label="비밀번호 확인">
				<Input
					type="password"
					value={passwordCheck}
					onValue={setPasswordCheck}
				/>
			</Labeled>
			<Container>
				<Button onClick={onClickSignUp}>회원가입</Button>
			</Container>
			<Container>
				<Link to="/auth/sign-in">
					<Typo.Body>로그인</Typo.Body>
				</Link>
			</Container>
		</Column>
	);
}
