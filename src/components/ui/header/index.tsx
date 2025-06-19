import { Column } from "@/components/layout/column";
import { Container } from "@/components/layout/container";
import { Typo } from "../typography";
import { subtitleStyle } from "./styles.css";

interface HeaderProps {
	title: string;
	subtitle?: string;
}

export function Header(props: HeaderProps) {
	const { title, subtitle } = props;

	return (
		<Container>
			<Column gap={8}>
				<Typo.Title weight="strong">{title}</Typo.Title>
				{subtitle && (
					<Typo.Body className={subtitleStyle} weight="medium">
						{subtitle}
					</Typo.Body>
				)}
			</Column>
		</Container>
	);
}
