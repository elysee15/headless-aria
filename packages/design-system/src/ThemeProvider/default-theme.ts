import { Theme } from "@emotion/react";

export const defaultTheme: Theme = {
  palette: {
    mode: "light",
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#1abc9c",
      light: "#1abc9c",
      dark: "#1abc9c",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f1c40f",
      light: "#f1c40f",
      dark: "#f1c40f",
      contrastText: "#fff",
    },
  },
  typography: {
    htmlFontSize: 14,
    fontFamily: "'Roboto', sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontSize: 20,
      fontWeight: 600,
      fontFamily: "'Roboto', sans-serif",
    },
    h2: {
      fontSize: 20,
      fontWeight: 600,
      fontFamily: "'Roboto', sans-serif",
    },
    h3: {
      fontSize: 20,
      fontWeight: 600,
      fontFamily: "'Roboto', sans-serif",
    },
    h4: {
      fontSize: 20,
      fontWeight: 600,
      fontFamily: "'Roboto', sans-serif",
    },
    h5: {
      fontSize: 20,
      fontWeight: 600,
      fontFamily: "'Roboto', sans-serif",
    },
    body1: {
      fontSize: 20,
      fontWeight: 600,
      fontFamily: "'Roboto', sans-serif",
    },
    body2: {
      fontSize: 20,
      fontWeight: 600,
      fontFamily: "'Roboto', sans-serif",
    },
    button: {
      fontSize: 20,
      fontWeight: 600,
      fontFamily: "'Roboto', sans-serif",
    },
  },
  shape: {
    borderRadius: "",
  },
  shadows: {},
  transitions: {},
};
