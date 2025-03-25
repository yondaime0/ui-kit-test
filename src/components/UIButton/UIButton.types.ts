import { ReactNode } from "react";
import { PressableProps, ViewStyle } from "react-native";

import { stylesheet } from "./UIButton.styles";
import { ExtractVariantNames } from "../../types";

export type ButtonProps = {
  children: ReactNode;
  icon?: string;
  iconColor?: string;
  style?: ViewStyle | ViewStyle[];
  isLoading?: boolean;
} & ExtractVariantNames<typeof stylesheet> &
  PressableProps;
