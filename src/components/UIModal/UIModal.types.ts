import { ViewStyle } from "react-native";

export interface UIModalProps {
  isVisible: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
}
