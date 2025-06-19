import { ChevronRight } from "lucide-react";
import { Column } from "@/components/layout/column";
import { Container } from "@/components/layout/container";
import { Row } from "@/components/layout/row";
import { halfOpacity } from "@/styles/utils.css";
import { Typo } from "../typography";
import { card, imagePlaceholder, titleBar } from "./styles/challenge.css";

export function ChallengeCard() {
	return (
		<Container vertical="small">
			<Container className={card}>
				<Column>
					<Row className={titleBar} align="center" justify="space-between">
						<Typo.Body weight="strong">title</Typo.Body>
						<ChevronRight className={halfOpacity} size={20} />
					</Row>
					<div className={imagePlaceholder} />
				</Column>
			</Container>
		</Container>
	);
}
