import { style } from "@vanilla-extract/css";

export const alignStyles = {
	start: style({
		alignItems: "flex-start",
	}),
	center: style({
		alignItems: "center",
	}),
	end: style({
		alignItems: "flex-end",
	}),
	stretch: style({
		alignItems: "stretch",
	}),
} as const;
