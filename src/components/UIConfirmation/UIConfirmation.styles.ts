import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  contentContainer: {
    borderRadius: 24,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 21,
    paddingTop: 28,
    paddingBottom: 20,
    width: "85%",
    gap: 25
  },
  title: { textAlign: "center" },
  buttonsContainer: {
    flexDirection: "row",
    gap: 14
  },
  button: {
    flex: 1
  }
}));
