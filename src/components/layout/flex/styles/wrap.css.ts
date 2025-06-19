import { style } from "@vanilla-extract/css";

export const wrapStyles = {
	nowrap: style({
		flexWrap: "nowrap",
	}),
	wrap: style({
		flexWrap: "wrap",
	}),
	"wrap-reverse": style({
		flexWrap: "wrap-reverse",
	}),
} as const;
