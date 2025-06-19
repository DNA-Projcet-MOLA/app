import { ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Row } from "@/components/layout/row";
import { halfOpacity } from "@/styles/utils.css";
import { Typo } from "../typography";

interface ListGroupItemProps {
	label: string;
	value?: string;
	onClick?: () => unknown;
}

export function _ListGroupItem(props: ListGroupItemProps) {
	const { label, value, onClick } = props;

	return (
		<Container vertical="regular" horizontal="small">
			<Row align="center" justify="space-between">
				<Typo.Body weight="medium">{label}</Typo.Body>
				<Row className={halfOpacity} gap={4} align="center" onClick={onClick}>
					{value && <Typo.Body>{value}</Typo.Body>}
					<ChevronRight size={18} />
				</Row>
			</Row>
		</Container>
	);
}
