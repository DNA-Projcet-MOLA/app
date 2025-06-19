import { Bell } from "lucide-react";
import { Header } from "@/components/ui/header";
import { Logo } from "@/components/ui/logo";
import { TopNavigator } from "@/components/ui/top-navigator";

export default function Home() {
	return (
		<>
			<TopNavigator leadingArea={<Logo />} trailingArea={<Bell />} />
			<Header title="오늘의 도전" subtitle="2025년 6월 16일 월요일" />
		</>
	);
}
