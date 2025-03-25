import { ViewProps, ViewStyle } from "react-native";

export type UIScreenProps = {
  children: React.ReactNode;
  insetBottom?: boolean;
  noHorizontalPadding?: boolean;
  style?: ViewStyle;
} & ViewProps;
