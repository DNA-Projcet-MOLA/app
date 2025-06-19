import { Header } from "@/components/ui/header";
import { Labeled } from "@/components/ui/labeled";
import { TopNavigator } from "@/components/ui/top-navigator";
import { GoBack } from "@/components/ui/top-navigator/go-back";
import { Typo } from "@/components/ui/typography";

export default function SubmissionsDetailPage() {
	return (
		<>
			<TopNavigator leadingArea={<GoBack label="제출 내역" />} />
			<Header title="수1 / 원의 방정식" />
			<Labeled label="결과">
				<Typo.Lead weight="strong">정답</Typo.Lead>
			</Labeled>
			<Labeled label="이미지"></Labeled>
		</>
	);
}
