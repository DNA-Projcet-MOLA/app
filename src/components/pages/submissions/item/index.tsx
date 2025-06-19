import { ChevronRight } from "lucide-react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Column } from "@/components/layout/column";
import { Container } from "@/components/layout/container";
import { Row } from "@/components/layout/row";
import { Typo } from "@/components/ui/typography";
import { halfOpacity } from "@/styles/utils.css";
import { correction, item } from "./styles.css";

export function SubmissionItem() {
	const navigate = useNavigate();

	const onClick = useCallback(() => {
		navigate("/submissions/1234");
	}, [navigate]);

	return (
		<Container vertical="small">
			<Container className={item} onClick={onClick}>
				<Row align="center" justify="space-between">
					<Column gap={4}>
						<Typo.Body weight="medium">수1 / 원의 방정식</Typo.Body>
						<Typo.Caption className={correction}>정답</Typo.Caption>
					</Column>
					<ChevronRight className={halfOpacity} size={18} />
				</Row>
			</Container>
		</Container>
	);
}
