import { TextInputProps, ViewStyle } from "react-native";

import { UIIconButtonProps } from "../UIIconButton";

export interface UIInputProps extends TextInputProps {
  label?: string;
  errorMessage?: string;
  style?: ViewStyle | ViewStyle[];
  type?: "text" | "password";
  rightAction?: UIIconButtonProps;
}
