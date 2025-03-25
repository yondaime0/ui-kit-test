import { MotiSkeletonProps } from "moti/build/skeleton/types";
import { StyleProp, ViewStyle } from "react-native";

export type UISkeletonProps = {
  children?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
} & Partial<MotiSkeletonProps>;
