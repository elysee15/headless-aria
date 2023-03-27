import React from "react";
import { AriaButtonProps, mergeProps, useButton } from "react-aria";

export type ButtonProps = AriaButtonProps;

// TODO: add a correct type for `ref`
export const Button = React.forwardRef((props: ButtonProps, ref: any) => {
  const fallbackRef = React.useRef(null);
  const domRef = ref || fallbackRef;
  const { buttonProps } = useButton(props, domRef);

  return (
    <button {...mergeProps(buttonProps, props)} ref={domRef}>
      {props.children}
    </button>
  );
});
