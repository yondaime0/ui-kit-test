import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme, runtime) => ({
  bottomView: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingBottom: runtime.insets.bottom || 24,
    backgroundColor: theme.colors.cards,
    borderTopEndRadius: theme.borderRadius.md,
    borderTopStartRadius: theme.borderRadius.md
  }
}));
