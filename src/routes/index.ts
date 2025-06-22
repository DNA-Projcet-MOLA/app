import { lazy } from "react";

export const HomePage = lazy(() => import("./home"));

export const SignInPage = lazy(() => import("./auth/sign-in"));
export const SignUpPage = lazy(() => import("./auth/sign-up"));

export const CameraPage = lazy(() => import("./camera"));
export const ResultPage = lazy(() => import("./result"));

export const SubmissionsPage = lazy(() => import("./submissions"));
export const SubmissionsDetailPage = lazy(() => import("./submissions/detail"));
