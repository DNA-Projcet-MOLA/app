import { lazy } from "react";

export const HomePage = lazy(() => import("./home"));
export const CameraPage = lazy(() => import("./camera"));
export const ResultPage = lazy(() => import("./result"));
