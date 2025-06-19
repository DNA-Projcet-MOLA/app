import { style } from "@vanilla-extract/css";

export const directionStyles = {
	row: style({
		flexDirection: "row",
	}),
	"row-reverse": style({
		flexDirection: "row-reverse",
	}),
	column: style({
		flexDirection: "column",
	}),
	"column-reverse": style({
		flexDirection: "column-reverse",
	}),
} as const;
