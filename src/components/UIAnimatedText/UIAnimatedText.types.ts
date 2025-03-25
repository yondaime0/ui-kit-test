import { TextStyle, ViewStyle } from "react-native";

export interface UIAnimatedTextProps {
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  text: string;
  enteringDelay?: number;
}
