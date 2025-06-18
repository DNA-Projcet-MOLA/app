import { Container } from "@/components/layout/container";
import { Row } from "@/components/layout/row";

interface NavigationBarProps {
	leadingArea?: React.ReactNode;
	trailingArea?: React.ReactNode;
}

export function NavigationBar(props: NavigationBarProps) {
	const { leadingArea, trailingArea } = props;

	return (
		<Container horizontal="large">
			<Row>
				{leadingArea}
				{trailingArea}
			</Row>
		</Container>
	);
}
