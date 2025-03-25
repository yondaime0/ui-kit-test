import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  qrCode: (width: number) => ({
    width,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.xl,
    padding: 30
  })
}));
