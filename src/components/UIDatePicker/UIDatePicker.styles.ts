import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    borderRadius: theme.borderRadius.md,
    height: 48,
    borderWidth: 2,
    backgroundColor: theme.colors.input,
    borderColor: theme.colors.white,
    flexDirection: "row",
    alignItems: "center"
  },
  label: {
    position: "absolute",
    left: 16,
    top: 14
  },
  smallLabel: {
    fontSize: 9,
    lineHeight: 9.7,
    top: 7
  },
  errorMessage: {
    marginHorizontal: 4,
    marginTop: 8
  },
  value: {
    textAlignVertical: "bottom",
    position: "absolute",
    top: 20,
    bottom: 6,
    left: 0,
    right: 0,
    marginLeft: 16,
    fontFamily: theme.fonts.semibold.primary,
    fontSize: 12,
    color: theme.colors.black
  },
  rightContainer: {
    position: "absolute",
    right: 14
  }
}));
