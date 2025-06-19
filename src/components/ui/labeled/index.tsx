import { Column } from "@/components/layout/column";
import { Container } from "@/components/layout/container";
import type { BaseProps, HAS_CHILDREN } from "@/types/props";
import { Typo } from "../typography";

interface LabeledProps extends BaseProps<HAS_CHILDREN> {
	label: string;
}

export function Labeled(props: LabeledProps) {
	const { label, children } = props;

	return (
		<Container>
			<Column gap={8}>
				<Typo.Body weight="medium">{label}</Typo.Body>
				{children}
			</Column>
		</Container>
	);
}
