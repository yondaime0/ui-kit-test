import { TextInputProps } from "react-native";

export type UIOtpInputProps = {
  value: string;
  setValue: (values: string) => void;
  errorMessage?: string;
} & TextInputProps;

export type CellProps = {
  value?: string;
  focusedCellIndex: number;
  index: number;
};
