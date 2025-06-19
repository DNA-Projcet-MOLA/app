import { Container } from "@/components/layout/container";
import { Row } from "@/components/layout/row";

interface TopNavigatorProps {
	leadingArea?: React.ReactNode;
	trailingArea?: React.ReactNode;
}

export function TopNavigator(props: TopNavigatorProps) {
	const { leadingArea, trailingArea } = props;

	return (
		<Container horizontal="large">
			<Row align="center" justify="space-between">
				{leadingArea}
				{trailingArea}
			</Row>
		</Container>
	);
}
