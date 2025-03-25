export type SwitchSelectorProps<T> = {
  options: { label: string; value: T }[];
  initial: number;
  onPress: (value: T) => void;
};
