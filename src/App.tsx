import "@/styles/reset.css";
import "@/styles/font.css";
import { NuqsAdapter } from "nuqs/adapters/react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CameraPage, HomePage } from "./routes";

export default function App() {
	return (
		<BrowserRouter>
			<Suspense>
				<NuqsAdapter>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/camera" element={<CameraPage />} />
					</Routes>
				</NuqsAdapter>
			</Suspense>
		</BrowserRouter>
	);
}
