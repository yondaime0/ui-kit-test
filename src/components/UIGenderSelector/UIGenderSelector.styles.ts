import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.input,
    borderRadius: theme.borderRadius.md,
    padding: 16,
    gap: 12
  },
  switchContainer: {
    flex: 1
  }
}));
