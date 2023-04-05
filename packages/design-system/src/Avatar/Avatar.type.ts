import { ReactNode } from "react";

export type Variant = "circular" | "rounded" | "square" | "string";
export type Size = "small" | "medium" | "large" | "string";

export type AvatarProps = {
  variant?: Variant;
  src: string;
  imgProps?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
  alt: string;
  size?: Size;
  children?: ReactNode;
}