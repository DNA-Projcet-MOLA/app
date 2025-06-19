import { ChevronLeft } from "lucide-react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Row } from "@/components/layout/row";
import { Typo } from "../typography";

interface GoBackProps {
	label?: string;
	path?: string;
}

export function GoBack(props: GoBackProps) {
	const { label = "뒤로가기", path } = props;

	const navigate = useNavigate();

	const onClick = useCallback(() => {
		if (path) {
			navigate(path);
		} else {
			navigate(-1);
		}
	}, [path, navigate]);

	return (
		<Row gap={6} align="center" onClick={onClick}>
			<ChevronLeft />
			<Typo.Body>{label}</Typo.Body>
		</Row>
	);
}
