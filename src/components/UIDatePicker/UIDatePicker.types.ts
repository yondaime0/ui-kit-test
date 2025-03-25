import { ViewStyle } from "react-native";

export interface UIDatePickerProps {
  label: string;
  style?: ViewStyle;
  date?: Date;
  onChangeDate: (date: Date) => void;
  errorMessage?: string;
}
