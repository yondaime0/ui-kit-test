import { SharedValue } from "react-native-reanimated";

export type UIFlexibleListHeaderProps = {
  scrollOffsetY: SharedValue<number>;
  height: number;
  children: React.ReactNode;
};
