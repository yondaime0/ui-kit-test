import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  checkbox: {
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    borderWidth: 2,
    variants: {
      type: {
        "checked-main": {
          backgroundColor: theme.colors.main,
          borderColor: theme.colors.main
        },
        "checked-white": {
          backgroundColor: theme.colors.white,
          borderColor: theme.colors.white
        },
        error: {
          backgroundColor: theme.colors.white,
          borderColor: theme.colors.error
        },
        unChecked: {
          backgroundColor: theme.colors.white,
          borderColor: theme.colors.gray
        }
      }
    }
  }
}));
