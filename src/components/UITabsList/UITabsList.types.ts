import { ViewStyle } from "react-native";

export interface UITabsListProps {
  tabs: string[];
  selectedTabIndex: number;
  onTabClick: (index: number) => void;
  style?: ViewStyle;
}
