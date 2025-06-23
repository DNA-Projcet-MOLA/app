import { style } from "@vanilla-extract/css";

export const button = style({
	width: "100%",
	padding: "16px 0",
	borderRadius: 16,
	textAlign: "center",
	":disabled": {
		opacity: 0.35,
	},
});

export const primary = style({
	backgroundColor: "#24BD40",
	color: "#FFF",
});

export const secondary = style({
	backgroundColor: "#ECFEEF",
	color: "#24BD40",
});
