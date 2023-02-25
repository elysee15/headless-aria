import React from "react";
import { useToggleState } from "react-stately";
import { useCheckbox, AriaCheckboxProps, mergeProps } from "react-aria";

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
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

function Checkbox(props: CheckboxProps) {
  const { children, inputProps = {} } = props;

  const state = useToggleState({
    ...props,
    isDisabled: props.disabled,
    isRequired: props.required,
    isReadOnly: props.readOnly,
    isSelected: props.checked,
  });
  const ref = React.useRef(null);
  const { inputProps: ariaInputProps } = useCheckbox(
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
    <label style={{ display: "block" }} data-testid="label">
      <input
        {...mergeProps(inputProps, ariaInputProps)}
        ref={ref}
        data-testid="input"
      />
      {children}
    </label>
  );
}

export default Checkbox;
