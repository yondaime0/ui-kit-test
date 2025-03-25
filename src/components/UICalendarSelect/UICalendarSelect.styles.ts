import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme, runtime) => ({
  container: {
    paddingTop: 16,
    paddingBottom: runtime.insets.bottom + 16,
    paddingHorizontal: 20
  },
  selectedTextStyle: {
    color: theme.colors.white,
    fontWeight: "600"
  }
}));
