import { HeaderBackButtonProps } from "@react-navigation/elements";
import { TouchableOpacityProps } from "react-native";

import { UIIconProps } from "../UIIcon";

export type UIIconButtonProps = HeaderBackButtonProps &
  UIIconProps &
  TouchableOpacityProps & { isLoading?: boolean };
