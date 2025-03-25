import { ReactElement, ReactNode } from "react";
import { ListRenderItem, TextStyle } from "react-native";

import { UITextProps } from "../UIText";

export type UIPickerItem = { value: string | number; label: string };

export type UIPickerProps<T extends UIPickerItem> = {
  items: T[];
  selectedValue?: string | number | null;
  placeholder?: string;
  listHeaderTitle: string;
  isLoading?: boolean;
  errorMessage?: string;
  titleTextProps?: Omit<UITextProps, "children">;
  onSelectValue: (item: { label: string; value: string | number }) => void;
  itemTextStyle?: TextStyle;
  rightElement?: ReactNode;
  search?: string;
  searchEnabled?: boolean;
  onEndReached?: () => void;
  initialSearchValue?: string;
  onSearchChange?: (search: string) => void;
  ListFooterComponent?: ReactElement;
  renderItem?: (props: {
    handleSelect: (item: T) => void;
  }) => ListRenderItem<T>;
};
