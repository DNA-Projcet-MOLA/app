import { style } from "@vanilla-extract/css";

export const wrapper = style({
	position: "fixed",
	left: 16,
	bottom: 16,
	width: "calc(100% - 32px)",
	backgroundColor: "#fff",
	borderRadius: 9999,
	boxShadow: "0px 4px 16px 2px rgba(0, 0, 0, 0.08)",
});

export const item = style({
	width: "100%",
	height: 48,
	color: "#6E736F",
});

export const itemActive = style({
	backgroundColor: "#ECFEEF",
	color: "#24BD40",
	borderRadius: 24,
});

export const capture = style({
	width: 48,
	height: 48,
	display: "grid",
	placeItems: "center",
	backgroundColor: "#24BD40",
	color: "#FFF",
	flexShrink: 0,
	borderRadius: "50%",
});
