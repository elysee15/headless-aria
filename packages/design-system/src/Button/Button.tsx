import React from "react";
import { AriaButtonProps, mergeProps, useButton } from "react-aria";

type Size = "small" | "medium" | "large" | string;

export type ButtonProps = AriaButtonProps & {
  children: React.ReactNode;
  startIcon: React.ReactNode;
  leftIcon: React.ReactNode;
  fullWidth: boolean;
  size: Size;
  color: string;
  href: string;
};

// TODO: add a correct type for `ref`
export const Button = React.forwardRef<HTMLButtonElement, Partial<ButtonProps>>(
  (props, ref) => {
    const fallbackRef = React.useRef<HTMLButtonElement>(null);
    const domRef = (ref || fallbackRef) as React.RefObject<HTMLButtonElement>;

    const { buttonProps } = useButton(props, domRef);

    return (
      <button {...mergeProps(buttonProps, props)} ref={domRef}>
        {props.children}
      </button>
    );
  }
);
