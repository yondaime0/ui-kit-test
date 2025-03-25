export interface UICheckBoxProps {
  isChecked?: boolean;
  onToggle?: () => void;
  variant: "main" | "white";
  isError?: boolean;
}
