import { Link } from "react-router-dom";
import { Column } from "@/components/layout/column";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Labeled } from "@/components/ui/labeled";
import { Typo } from "@/components/ui/typography";
import { fullViewportHeight } from "@/styles/utils.css";

export default function SignUpPage() {
	return (
		<Column className={fullViewportHeight}>
			<Container>
				<Typo.Title weight="strong">회원가입</Typo.Title>
			</Container>
			<Labeled label="아이디">
				<Input />
			</Labeled>
			<Labeled label="비밀번호">
				<Input />
			</Labeled>
			<Container>
				<Button>회원가입</Button>
			</Container>
			<Container>
				<Link to="/auth/sign-in">
					<Typo.Body>로그인</Typo.Body>
				</Link>
			</Container>
		</Column>
	);
}
