import { Container } from "@/components/layout/container";
import { Typo } from "@/components/ui/typography";
import type { BaseProps, HAS_CHILDREN } from "@/types/props";

interface SubmissionGroupProps extends BaseProps<HAS_CHILDREN> {
	year: number;
	month: number;
}

export function SubmissionGroup(props: SubmissionGroupProps) {
	const { year, month, children } = props;

	return (
		<Container vertical="small" horizontal="none">
			<Container vertical="small">
				<Typo.Body weight="strong">
					{year}년 {month}월
				</Typo.Body>
			</Container>
			{children}
		</Container>
	);
}
