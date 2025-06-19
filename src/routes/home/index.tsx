import { Bell } from "lucide-react";
import { useQueryState } from "nuqs";
import { HomeChallengePage } from "@/components/pages/home/challenge";
import { HomeProfilePage } from "@/components/pages/home/profile";
import { FloatingBar } from "@/components/ui/floating-bar";
import { Logo } from "@/components/ui/logo";
import { TopNavigator } from "@/components/ui/top-navigator";

export default function HomePage() {
	const [tab] = useQueryState("tab", { defaultValue: "challenge" });

	return (
		<>
			<TopNavigator leadingArea={<Logo />} trailingArea={<Bell />} />
			{tab === "challenge" ? <HomeChallengePage /> : <HomeProfilePage />}
			<FloatingBar />
		</>
	);
}
