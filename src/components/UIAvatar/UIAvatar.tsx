import { Image, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./UIAvatar.styles";
import { ICONS } from "../../assets";
import { UIIcon } from "../UIIcon";

import type { UIAvatarProps } from "./UIAvatar.types";
import type { FC } from "react";

const UIAvatar: FC<UIAvatarProps> = ({ picture, size = 40 }) => {
  const { styles, theme } = useStyles(stylesheet);

  if (!picture)
    return (
      <View style={[styles.defaultAvatar, { width: size, height: size }]}>
        <UIIcon
          xml={ICONS.user}
          fill={theme.colors.white}
          height={20}
          width={20}
        />
      </View>
    );

  return (
    <Image
      source={{ uri: picture }}
      style={[styles.avatar, { width: size, height: size }]}
    />
  );
};

export default UIAvatar;
