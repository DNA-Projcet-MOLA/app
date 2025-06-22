import { Camera } from "lucide-react";
import { type MouseEvent, useCallback } from "react";
import { Column } from "@/components/layout/column";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	backdrop,
	image,
	imageInput,
	nicknameInput,
	overlay,
	popup,
	profile,
} from "./styles/edit-profile.css";

interface HomeEditProfileProps {
	close: () => unknown;
}

export function HomeEditProfile(props: HomeEditProfileProps) {
	const { close } = props;

	const onClickBackdrop = useCallback(() => {
		close();
	}, [close]);

	const onClickPopup = useCallback((e: MouseEvent) => {
		e.stopPropagation();
	}, []);

	return (
		<Container className={backdrop} onClick={onClickBackdrop}>
			<Container
				className={popup}
				vertical="small"
				horizontal="small"
				onClick={onClickPopup}
			>
				<Container>
					<Column align="center">
						<label className={profile}>
							<img className={image} src="/profile.jpg" alt="Profile" />
							<div className={overlay}>
								<Camera size={36} />
							</div>
							<input className={imageInput} type="file" accept="image/*" />
						</label>
					</Column>
				</Container>
				<Container vertical="small" horizontal="small">
					{/* <input className={nicknameInput} placeholder="닉네임" /> */}
					<Input placeholder="닉네임" />
				</Container>
				<Container vertical="small" horizontal="small">
					<Button>저장</Button>
				</Container>
			</Container>
		</Container>
	);
}
