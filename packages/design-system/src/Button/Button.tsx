import React from "react";
import { ButtonWrapper } from "./Button.style";
import { ButtonProps } from "./Button.type";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <ButtonWrapper {...props} ref={ref}>
        {leftIcon && <span style={{ marginRight: 5 }}>{leftIcon}</span>}
        {children}
        {rightIcon && <span style={{ marginLeft: 5 }}>{rightIcon}</span>}
      </ButtonWrapper>
    );
  }
);

Button.displayName = "Button";
