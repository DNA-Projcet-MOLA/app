import { Column } from "@/components/layout/column";
import { Container } from "@/components/layout/container";
import type { BaseProps, HAS_CHILDREN } from "@/types/props";
import { _ListGroupItem } from "./item";
import { group } from "./styles/list-group.css";

interface ListGroupProps extends BaseProps<HAS_CHILDREN> {}

export function ListGroup(props: ListGroupProps) {
	const { children } = props;

	return (
		<Container>
			<Container className={group} vertical="small" horizontal="small">
				<Column gap={4}>{children}</Column>
			</Container>
		</Container>
	);
}

ListGroup.Item = _ListGroupItem;
