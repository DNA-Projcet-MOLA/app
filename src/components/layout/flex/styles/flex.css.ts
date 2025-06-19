import { style } from "@vanilla-extract/css";

export const flex = style({
	display: "flex",
});

export const noGrow = style({
	flexGrow: 0,
});

export const noShrink = style({
	flexShrink: 0,
});
