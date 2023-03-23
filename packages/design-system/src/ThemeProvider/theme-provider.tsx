import { createTheme } from "./create-theme";
import {
  ThemeProvider as EmotionThemeProvider,
  Theme,
  Global,
} from "@emotion/react";
import { ReactNode } from "react";

export type ThemeProviderProps = {
  children: ReactNode;
  theme: Theme;
};

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return (
    <EmotionThemeProvider theme={createTheme(theme)}>
      <Global
        styles={(theme) => ({
          body: {
            background: theme.palette.primary.main,
          },
        })}
      />
      {children}
    </EmotionThemeProvider>
  );
};