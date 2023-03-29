import { createTheme } from "./create-theme";
import {
  ThemeProvider as EmotionThemeProvider,
  Theme,
  Global,
  css,
} from "@emotion/react";
import { ReactNode } from "react";
import emotionReset from "emotion-reset";
import emotionNormalize from "emotion-normalize";

export type ThemeProviderProps = {
  children: ReactNode;
  theme: Theme;
};

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return (
    <EmotionThemeProvider theme={createTheme(theme)}>
      <Global
        styles={css`
          ${emotionReset}
          /* ${emotionNormalize} */

          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
        `}
      />
      {children}
    </EmotionThemeProvider>
  );
};
