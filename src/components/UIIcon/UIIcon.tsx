import { type FC } from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import { useStyles } from "react-native-unistyles";

import { type UIIconProps } from "./UIIcon.types";

const UIIcon: FC<UIIconProps> = ({
  xml,
  width = 22,
  height = 22,
  fill,
  stroke,
  ...props
}) => {
  const { theme } = useStyles();

  if (!xml) return null;

  return (
    <View style={props.style}>
      <SvgXml
        xml={xml}
        width={width}
        height={height}
        fill={fill ?? theme.colors.icons}
        stroke={stroke}
      />
    </View>
  );
};

export default UIIcon;
