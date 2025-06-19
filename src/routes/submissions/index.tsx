import { SubmissionGroup } from "@/components/pages/submissions/group";
import { SubmissionItem } from "@/components/pages/submissions/item";
import { Header } from "@/components/ui/header";
import { TopNavigator } from "@/components/ui/top-navigator";
import { GoBack } from "@/components/ui/top-navigator/go-back";

export default function SubmissionsPage() {
	return (
		<>
			<TopNavigator leadingArea={<GoBack label="내 정보" />} />
			<Header title="제출 내역" />
			<SubmissionGroup year={2025} month={6}>
				<SubmissionItem />
				<SubmissionItem />
				<SubmissionItem />
			</SubmissionGroup>
		</>
	);
}
