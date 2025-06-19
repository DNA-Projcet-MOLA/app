import { ChallengeCard } from "@/components/ui/card/challenge";
import { Header } from "@/components/ui/header";

export function HomeChallengePage() {
	return (
		<>
			<Header title="오늘의 도전" subtitle="2025년 6월 16일 월요일" />
			<ChallengeCard />
			<ChallengeCard />
		</>
	);
}
