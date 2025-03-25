import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  card: {
    paddingVertical: 16,
    paddingHorizontal: 18,
    backgroundColor: theme.colors.cards,
    borderRadius: theme.borderRadius.md,
    variants: {
      appearance: {
        elevated: {
          shadowColor: theme.colors.mainDarker,
          shadowOffset: {
            width: 0,
            height: 1
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          elevation: 2
        }
      }
    }
  }
}));
