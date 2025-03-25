import { TouchableOpacityProps } from "react-native";

import { UIIconProps } from "../UIIcon";
import { UITextVariants } from "../UIText";

export type UILinkProps = { title: string; icon?: UIIconProps } & Pick<
  UITextVariants,
  "color"
> &
  TouchableOpacityProps;
