import { defaultTheme } from "./default-theme";
import deepmerge from "deepmerge";
import { Theme } from "@emotion/react";

export function createTheme(theme: Partial<Theme>): Theme {
  return deepmerge(defaultTheme, theme);
}
