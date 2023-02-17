import {} from "@headless-aria/button";

import React from "react";
import { useToggleState } from "react-stately";
import { useCheckbox, AriaCheckboxProps } from "react-aria";

export type CheckboxProps = AriaCheckboxProps;

function Checkbox(props: CheckboxProps) {
  const { children } = props;
  const state = useToggleState(props);
  const ref = React.useRef(null);
  const { inputProps } = useCheckbox(props, state, ref);

  return (
    <label style={{ display: "block" }}>
      <input {...inputProps} ref={ref} />
      {children}
    </label>
  );
}

export default Checkbox;
