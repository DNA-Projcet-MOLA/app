import { style } from "@vanilla-extract/css";

export const backdrop = style({
	position: "fixed",
	top: 0,
	left: 0,
	width: "100%",
	height: "100vh",
	backgroundColor: "rgba(0, 0, 0, 0.15)",
	backdropFilter: "blur(4px)",
	zIndex: 9999,
	display: "grid",
	placeItems: "center",
});

export const popup = style({
	width: "100%",
	backgroundColor: "#F2F2F2",
	borderRadius: 16,
});

export const profile = style({
	position: "relative",
	width: 80,
	height: 80,
	borderRadius: 40,
	overflow: "hidden",
});

export const image = style({
	width: "100%",
	height: "100%",
	objectFit: "cover",
});

export const overlay = style({
	position: "absolute",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	backgroundColor: "rgba(255, 255, 255, 0.25)",
	display: "grid",
	placeItems: "center",
});

export const imageInput = style({
	position: "absolute",
	top: -999,
	left: -999,
	width: 1,
	height: 1,
});

export const nicknameInput = style({
	width: "100%",
	padding: "16px 12px",
	backgroundColor: "#FFF",
	borderRadius: 16,
	fontSize: 16,
});
