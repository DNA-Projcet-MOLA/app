import { Focus, Lightbulb, UserRound } from "lucide-react";
import { useQueryState } from "nuqs";
import { useCallback, useMemo } from "react";
import { Container } from "@/components/layout/container";
import { Row } from "@/components/layout/row";
import { cn } from "@/lib/common";
import { Typo } from "../typography";
import { capture, item, itemActive, wrapper } from "./styles.css";

export function FloatingBar() {
	return (
		<>
			<Container className={wrapper} vertical="small" horizontal="small">
				<Row gap={8} align="center">
					<TabItem icon={<Lightbulb />} label="도전" value="challenge" />
					<div className={capture}>
						<Focus />
					</div>
					<TabItem icon={<UserRound />} label="내 정보" value="profile" />
				</Row>
			</Container>
		</>
	);
}

interface TabItemProps {
	icon: React.ReactNode;
	label: string;
	value: string;
}

function TabItem(props: TabItemProps) {
	const { icon, label, value } = props;

	const [tab, setTab] = useQueryState("tab", { defaultValue: "challenge" });
	const isActive = useMemo(() => tab === value, [tab, value]);

	const onClick = useCallback(() => {
		setTab(value);
	}, [setTab, value]);

	return (
		<Row
			className={cn(item, isActive && itemActive)}
			gap={8}
			align="center"
			onClick={onClick}
		>
			{icon}
			<Typo.Body weight={isActive ? "strong" : "medium"}>{label}</Typo.Body>
		</Row>
	);
}
