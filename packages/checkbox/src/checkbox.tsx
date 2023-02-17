import {} from "@headless-aria/button";

import React from "react";
import { useToggleState } from "react-stately";
import { useCheckbox, AriaCheckboxProps } from "react-aria";

type BaseProps = {
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
};

type OmitedProps =
  | "isIndeterminate"
  | "isRequired"
  | "isDisabled"
  | "isSelected"
  | "defaultSelected"
  | "isReadOnly";

export interface CheckboxProps
  extends BaseProps,
    Omit<AriaCheckboxProps, OmitedProps> {
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
}

function Checkbox(props: CheckboxProps) {
  const { children } = props;

  const state = useToggleState({
    ...props,
    isDisabled: props.disabled,
    isRequired: props.required,
    isReadOnly: props.readOnly,
    isSelected: props.checked,
  });
  const ref = React.useRef(null);
  const { inputProps } = useCheckbox(
    {
      ...props,
      isDisabled: props.disabled,
      isIndeterminate: props.indeterminate,
      isRequired: props.required,
      isReadOnly: props.readOnly,
      isSelected: props.checked,
      defaultSelected: props.defaultChecked,
    },
    state,
    ref
  );

  return (
    <label style={{ display: "block" }}>
      <input {...inputProps} ref={ref} />
      {children}
    </label>
  );
}

export default Checkbox;
