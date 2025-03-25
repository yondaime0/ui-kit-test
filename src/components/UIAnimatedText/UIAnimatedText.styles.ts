import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  textContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    rowGap: 7
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: theme.fonts.bold,
    color: theme.colors.white
  }
}));
