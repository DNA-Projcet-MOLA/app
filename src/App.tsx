import "@/styles/reset.css";
import "@/styles/font.css";
import { NuqsAdapter } from "nuqs/adapters/react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
	CameraPage,
	HomePage,
	SignInPage,
	SignUpPage,
	SubmissionsDetailPage,
	SubmissionsPage,
} from "./routes";
import ResultPage from "./routes/result";

export default function App() {
	return (
		<BrowserRouter>
			<Suspense>
				<NuqsAdapter>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/auth/sign-in" element={<SignInPage />} />
						<Route path="/auth/sign-up" element={<SignUpPage />} />
						<Route path="/camera" element={<CameraPage />} />
						<Route path="/result" element={<ResultPage />} />
						<Route path="/submissions" element={<SubmissionsPage />} />
						<Route
							path="/submissions/:id"
							element={<SubmissionsDetailPage />}
						/>
					</Routes>
				</NuqsAdapter>
			</Suspense>
		</BrowserRouter>
	);
}
