import { style } from "@vanilla-extract/css";
import { weightStyles } from "./weight.css";

export const typography = style([weightStyles.regular]);

export const typographyFill = style({
	width: "100%",
	display: "block",
});

export const title = style({
	fontSize: 32,
});

export const lead = style({
	fontSize: 20,
});

export const body = style({
	fontSize: 16,
});

export const caption = style({
	fontSize: 14,
});
