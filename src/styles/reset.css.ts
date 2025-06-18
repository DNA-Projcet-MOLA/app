import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body, #root", {
	width: "100%",
	height: "var(--vh, 100vh)",
	backgroundColor: "#F2F2F2",
	color: "#1C1B1F",
	wordBreak: "keep-all",
	wordWrap: "break-word",
	textWrap: "pretty",
});

globalStyle("*", {
	boxSizing: "border-box",
	margin: 0,
	padding: 0,
	fontSynthesis: "none",
	WebkitFontSmoothing: "antialiased",
	textRendering: "optimizeLegibility",
	shapeRendering: "geometricPrecision",
	WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
	userSelect: "none",
	WebkitUserSelect: "none",
});

globalStyle("*:focus", { outline: "none" });

globalStyle("a", {
	width: "100%",
	color: "inherit",
	cursor: "pointer",
	textDecoration: "none",
});

globalStyle("svg", {
	flexShrink: 0,
});

globalStyle("input, textarea, button", {
	fontFamily: "inherit",
	color: "inherit",
	background: "transparent",
	border: "none",
	outline: "none",
});

globalStyle("::-webkit-scrollbar", { display: "none" });
