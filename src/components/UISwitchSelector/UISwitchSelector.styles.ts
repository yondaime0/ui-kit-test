import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  selectorText: (isSelected: boolean) => ({
    color: isSelected ? theme.colors.white : theme.colors.secondaryText,
    fontSize: 12,
    fontWeight: "600"
  })
}));
