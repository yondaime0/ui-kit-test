import { createStyleSheet } from "react-native-unistyles";

export const styleSheet = createStyleSheet((theme, runtime) => ({
  wrapper: ({
    insetBottom,
    noHorizontalPadding
  }: {
    insetBottom?: boolean;
    noHorizontalPadding?: boolean;
  }) => ({
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingBottom: insetBottom ? runtime.insets.bottom : 0,
    paddingHorizontal: noHorizontalPadding ? 0 : 20
  })
}));
