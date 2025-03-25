import { PressableProps, StyleProp, ViewStyle } from "react-native";

import { stylesheet } from "./UICard.styles";
import { ExtractVariantNames } from "../../types";

export type UICardProps = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
} & PressableProps &
  ExtractVariantNames<typeof stylesheet>;
