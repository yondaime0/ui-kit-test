import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: (pressed: boolean) => ({
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    variants: {
      color: {
        default: {
          backgroundColor: pressed ? theme.colors.mainDarker : theme.colors.main
        },
        secondary: {
          backgroundColor: pressed ? theme.colors.white : theme.colors.grayLight
        },
        black: {
          backgroundColor: pressed ? theme.colors.black : theme.colors.dark
        },
        "outlined-red": {
          backgroundColor: pressed
            ? theme.colors.white
            : theme.colors.grayLight,
          borderColor: theme.colors.border,
          borderWidth: 2,
          opacity: pressed ? 0.8 : 1
        },
        "outlined-white": {
          backgroundColor: "transparent",
          borderColor: theme.colors.border,
          borderWidth: 2,
          opacity: pressed ? 0.8 : 1
        },
        "outlined-main": {
          backgroundColor: "transparent",
          borderColor: theme.colors.main,
          borderWidth: 2,
          opacity: pressed ? 0.8 : 1
        },
        transparent: {}
      },
      size: {
        small: {
          height: 33,
          borderRadius: 14.5,
          paddingHorizontal: 20,
          gap: 7
        },
        medium: {
          height: 36,
          borderRadius: theme.borderRadius.md,
          paddingHorizontal: 20,
          gap: 7
        },
        large: {
          height: 48,
          borderRadius: theme.borderRadius.md,
          paddingHorizontal: 20,
          gap: 10
        },
        xLarge: {
          height: 54,
          borderRadius: 24,
          paddingHorizontal: 20,
          gap: 10
        }
      }
    }
  })
}));
