import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((_, runtime) => ({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: runtime.insets.bottom + 16,
    paddingHorizontal: 20
  }
}));
