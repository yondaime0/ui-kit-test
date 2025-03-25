import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    borderRadius: theme.borderRadius.md,
    height: 48,
    borderWidth: 2,
    backgroundColor: theme.colors.input,
    flexDirection: "row",
    alignItems: "center"
  },
  input: (hasError: boolean, multiline: boolean) => ({
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: hasError ? 50 : 0,
    paddingTop: multiline ? 20 : 12,
    paddingLeft: 16,
    fontFamily: theme.fonts.semibold.primary,
    fontSize: 12,
    lineHeight: 14.6
  }),
  label: {
    position: "absolute",
    left: 16,
    top: 14
  },
  errorMessage: {
    marginHorizontal: 4,
    marginTop: 8
  },
  rightContainer: {
    position: "absolute",
    right: 14
  }
}));
