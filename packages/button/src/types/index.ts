import { AriaButtonProps } from "react-aria";

type BaseProps = Pick<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "className"
>;

export type ButtonProps = BaseProps & AriaButtonProps<"button">;
