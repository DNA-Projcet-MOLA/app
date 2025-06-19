import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/common";
import { Typo } from "../typography";
import { button, primary, secondary } from "./styles.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
}

type ButtonVariant = "primary" | "secondary";

export function Button(props: ButtonProps) {
	const { variant = "primary", className, children, ...restProps } = props;

	const classNames = [
		button,
		className,
		{
			[primary]: variant === "primary",
			[secondary]: variant === "secondary",
		},
	];

	return (
		<button {...restProps} className={cn(classNames)}>
			<Typo.Body weight="strong">{children}</Typo.Body>
		</button>
	);
}
