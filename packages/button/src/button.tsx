import React from "react";
import { useButton } from "react-aria";
import { ButtonProps } from "./types";

function Button(props: ButtonProps) {
  const ref = React.useRef(null);
  const { buttonProps } = useButton(props, ref);

  return (
    <button {...buttonProps} ref={ref}>
      {props.children}
    </button>
  );
}

export default Button;
