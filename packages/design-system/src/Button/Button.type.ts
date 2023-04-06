import { AriaButtonProps } from "react-aria";

export type Size = "small" | "medium" | "large";
export type Color = "primary" | "secondary" | "error" | "warning";

type BaseProps = {
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  size?: Size;
  color?: Color;
  href?: string;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = BaseProps;
