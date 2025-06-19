import { lazy } from "react";

export const HomePage = lazy(() => import("./home"));
export const CameraPage = lazy(() => import("./camera"));
export const ResultPage = lazy(() => import("./result"));

export const SubmissionsPage = lazy(() => import("./submissions"));
export const SubmissionsDetailPage = lazy(() => import("./submissions/detail"));
