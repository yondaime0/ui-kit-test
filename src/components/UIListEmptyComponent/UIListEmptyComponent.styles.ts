import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((_, runtime) => ({
  container: {
    paddingHorizontal: 12,
    width: runtime.screen.width - 40
  },
  text: {
    textAlign: "center"
  }
}));
