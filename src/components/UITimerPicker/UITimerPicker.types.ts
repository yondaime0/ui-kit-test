export interface UITimerPickerProps {
  label?: string;
  initialValue?: {
    hours?: number;
    minutes?: number;
    seconds?: number;
  };
  onChangeValue: (value: {
    hours?: number;
    minutes?: number;
    seconds?: number;
  }) => void;
}
