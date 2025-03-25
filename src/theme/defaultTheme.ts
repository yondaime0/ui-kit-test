import { borderRadius } from "./borderRadius";
import { fonts } from "./fonts";
import { sharedColors } from "./sharedColors";

export const utils = {
  getHexColorWithOpacity: (color: string, opacity: number): string => {
    const alpha = Math.round(opacity * 255).toString(16);
    return `${color}${alpha}`;
  }
};

export const LightTheme = {
  colors: {
    ...sharedColors,
    background: "#E4EAF3",
    cards: "#FFFFFF",
    border: "#F7F9FB",
    icons: "#B6B7C1",
    text: "#161618",
    secondaryText: "#757588",
    main: "#5A6FDC",
    mainDarker: "#4E64D5",
    mainLighter: "#8394EC",
    mainLight: "#CFD7FF"
  },
  fonts,
  utils,
  borderRadius
};

export const DarkTheme = {
  colors: {
    ...sharedColors,
    background: "#1C1C20",
    cards: "#424A5D",
    border: "#757588",
    icons: "#555C70",
    text: "#FFFFFF",
    secondaryText: "#B2B2B5",
    main: "#8394EC",
    mainDarker: "#5A6FDC",
    mainLighter: "#8394EC",
    mainLight: "#CFD7FF"
  },
  fonts,
  utils,
  borderRadius
};
