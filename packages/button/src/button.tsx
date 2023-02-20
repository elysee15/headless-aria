import React from "react";
import { AriaButtonProps, mergeProps, useButton } from "react-aria";

type BaseProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick" | "onChange"
>;

type OmitedProps = "isDisabled";

export type ButtonProps = BaseProps &
  Omit<AriaButtonProps<"button">, OmitedProps>;

function Button(props: ButtonProps) {
  const ref = React.useRef(null);
  const { buttonProps } = useButton(props, ref);

  return (
    <button {...mergeProps(buttonProps, props)} ref={ref}>
      {props.children}
    </button>
  );
}

export default Button;
