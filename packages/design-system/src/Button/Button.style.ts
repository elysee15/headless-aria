import { Theme, css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonProps, Color, Size } from "./Button.type";

const disabledStyles = css({
  cursor: "not-allowed",
  background: "#cccccc",
  color: "#666666",
});

const variantStyles = (theme: Theme, color: Color = "primary") =>
  ({
    primary: css`
      background: ${theme.palette.primary.main};
      color: ${theme.palette.primary.contrastText};
    `,
    secondary: css`
      background: ${theme.palette.secondary.main};
      color: ${theme.palette.secondary.contrastText};
    `,
    error: css`
      background: ${theme.palette.error?.main};
      color: ${theme.palette.error?.contrastText};
    `,
    warning: css`
      background: ${theme.palette.warning?.main};
      color: ${theme.palette.warning?.contrastText};
    `,
  }[color]);

const sizeStyles = (theme: Theme, size: Size = "medium") =>
  ({
    small: css`
      padding: 4px 8px;
      font-size: 12px;
    `,
    medium: css`
      padding: 8px 12px;
      font-size: 14px;
    `,
    large: css`
      padding: 12px 24px;
      font-size: 16px;
      font-weight: 500;
    `,
  }[size]);

export const ButtonWrapper = styled.button<ButtonProps>`
  border: none;
  cursor: pointer;
  ${({ theme, color }) => variantStyles(theme, color)};
  ${({ theme, size }) => sizeStyles(theme, size)};
  ${({ disabled }) => disabled && disabledStyles};
`;
