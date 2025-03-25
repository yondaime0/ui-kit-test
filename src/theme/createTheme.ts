import { borderRadius } from "./borderRadius";
import { DarkTheme, LightTheme, utils } from "./defaultTheme";
import { fonts } from "./fonts";
import { deepMerge, DeepPartial } from "../helpers/deepMerge";

type ThemeTokens = {
  colors: typeof LightTheme.colors;
  fonts: typeof fonts;
  borderRadius: typeof borderRadius;
};

export const createTheme = (
  baseTheme: typeof LightTheme | typeof DarkTheme,
  tokens?: DeepPartial<ThemeTokens>
): typeof LightTheme => {
  const mergedTokens = deepMerge<ThemeTokens>(baseTheme, tokens ?? {});

  return {
    ...mergedTokens,
    utils
  };
};

export const lightTheme = createTheme(LightTheme);
export const darkTheme = createTheme(DarkTheme);
