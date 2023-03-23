import "@emotion/react";

declare module "@emotion/react" {
  interface Palette {
    mode: "light" | "dark";
    common: {
      black: string;
      white: string;
    };
    primary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    error?: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    warning?: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    success?: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    info?: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    text?: {
      primary: string;
      secondary: string;
      disabled: string;
    };
  }

  interface Shape {
    borderRadius: string;
  }

  interface Shadows {}

  interface Typography {
    htmlFontSize: number;
    pxToRem?: (size: number) => number;
    fontFamily: string;
    fontWeightLight: number;
    fontWeightRegular: number;
    fontWeightMedium: number;
    fontWeightBold: number;
    h1: {
      fontSize: number;
      fontWeight: number;
      fontFamily: string;
    };
    h2: CSSProperties;
    h3: CSSProperties;
    h4: CSSProperties;
    h5: CSSProperties;
    body1: CSSProperties;
    body2: CSSProperties;
    button: CSSProperties;
  }

  interface Transitions {}

  export interface Theme {
    palette: Palette;
    shape: Shape;
    shadows: Shadows;
    typography: Typography;
    transitions: Transitions;
  }
}
