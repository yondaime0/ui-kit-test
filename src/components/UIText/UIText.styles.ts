import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  text: {
    variants: {
      size: {
        default: {
          fontSize: 16,
          lineHeight: 20
        },
        xs: {
          fontSize: 12,
          lineHeight: 14.6
        },
        sm: {
          fontSize: 14,
          lineHeight: 20
        },
        lg: {
          fontSize: 20,
          lineHeight: 30
        },
        xl: {
          fontSize: 24,
          lineHeight: 30
        }
      },
      font: {
        default: {
          fontFamily: theme.fonts.regular
        },
        medium: {
          fontFamily: theme.fonts.medium
        },
        semibold: {
          fontFamily: theme.fonts.semibold.primary
        },
        bold: {
          fontFamily: theme.fonts.bold
        }
      },
      color: {
        default: {
          color: theme.colors.text
        },
        main: {
          color: theme.colors.main
        },
        black: {
          color: theme.colors.black
        },
        white: {
          color: theme.colors.white
        },
        dark: {
          color: theme.colors.dark
        },
        error: {
          color: theme.colors.error
        },
        green: {
          color: theme.colors.green
        },
        secondary: {
          color: theme.colors.secondaryText
        },
        label: {
          color: theme.colors.label
        },
        orange: {
          color: theme.colors.orange
        },
        red: {
          color: theme.colors.error
        }
      }
    }
  }
}));
