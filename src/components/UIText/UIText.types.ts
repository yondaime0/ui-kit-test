import { TextProps } from "react-native";
import { AnimatedProps } from "react-native-reanimated";

import { stylesheet } from "./UIText.styles";
import { ExtractVariantNames } from "../../types";

export type UITextVariants = ExtractVariantNames<typeof stylesheet>;

export type UITextProps = {
  children: React.ReactNode;
} & UITextVariants &
  AnimatedProps<TextProps>;
