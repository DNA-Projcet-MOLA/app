import { style } from "@vanilla-extract/css";

export const justifyStyles = {
	start: style({
		justifyContent: "flex-start",
	}),
	center: style({
		justifyContent: "center",
	}),
	end: style({
		justifyContent: "flex-end",
	}),
	"space-between": style({
		justifyContent: "space-between",
	}),
	"space-around": style({
		justifyContent: "space-around",
	}),
	"space-evenly": style({
		justifyContent: "space-evenly",
	}),
} as const;
