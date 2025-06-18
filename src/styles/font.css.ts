import { globalFontFace, globalStyle } from "@vanilla-extract/css";

const pretendard = "pretendard";

globalFontFace(pretendard, {
	src: `url('/PretendardVariable.ttf') format('truetype')`,
});

globalStyle("html, body", {
	fontFamily: pretendard,
});
