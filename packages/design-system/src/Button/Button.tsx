import React, { forwardRef } from "react";
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

// TODO: add a correct type for `ref`
const Button = forwardRef((props: ButtonProps, ref: any) => {
  const fallbackRef = React.useRef(null);
  const domRef = ref || fallbackRef;
  const { buttonProps } = useButton(props, domRef);

  return (
    <button {...mergeProps(buttonProps, props)} ref={domRef}>
      {props.children}
    </button>
  );
});

export default Button;
