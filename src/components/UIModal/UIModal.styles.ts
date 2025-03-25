import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet(() => ({
  modal: {
    flex: 1,
    margin: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  backdropTouchableWrapper: {
    flex: 1
  },
  backdropBlur: {
    flex: 1,
    backgroundColor: "rgba(20, 20, 20, 0.7)"
  }
}));
