import { Pencil } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Column } from "@/components/layout/column";
import { Container } from "@/components/layout/container";
import { Row } from "@/components/layout/row";
import { Button } from "@/components/ui/button";
import { ListGroup } from "@/components/ui/list-group";
import { Typo } from "@/components/ui/typography";
import { halfOpacity } from "@/styles/utils.css";
import { HomeEditProfile } from "./edit-profile";
import { profileImage } from "./styles/profile.css";

export function HomeProfilePage() {
	const [isEditOpen, setIsEditOpen] = useState(false);
	const navigate = useNavigate();

	return (
		<>
			<Container horizontal="none">
				<Column gap={16} align="center">
					<img className={profileImage} src="/profile.jpg" alt="Profile" />
					<Typo.Lead weight="strong">빛나는해파리213</Typo.Lead>
					<Row className={halfOpacity} gap={6} align="center">
						<Pencil size={16} />
						<Typo.Caption weight="medium" onClick={() => setIsEditOpen(true)}>
							수정하기
						</Typo.Caption>
					</Row>
				</Column>
			</Container>
			<ListGroup>
				<ListGroup.Item label="생년월일" value="2008. 2. 5" />
				<ListGroup.Item label="학교" value="선린인터넷고등학교" />
				<ListGroup.Item label="학년 · 반 · 번호" value="2학년 4반 11번" />
			</ListGroup>
			<ListGroup>
				<ListGroup.Item label="테마 설정" value="라이트" />
				<ListGroup.Item
					label="제출 내역"
					value="5"
					onClick={() => navigate("/submissions")}
				/>
			</ListGroup>
			<Container>
				<Button variant="secondary">로그아웃</Button>
			</Container>
			{isEditOpen && <HomeEditProfile close={() => setIsEditOpen(false)} />}
		</>
	);
}
