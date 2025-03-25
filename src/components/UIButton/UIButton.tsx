import { type FC, useMemo } from "react";
import { Pressable } from "react-native";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./UIButton.styles";
import { UIIcon } from "../UIIcon";
import { UILoader } from "../UILoader";
import { UIText, type UITextVariants } from "../UIText";

import type { ButtonProps } from "./UIButton.types";

const UIButton: FC<ButtonProps> = ({
  children,
  icon,
  iconColor,
  style,
  isLoading,
  disabled,
  color,
  size = "xLarge",
  ...props
}) => {
  const { styles, theme } = useStyles(stylesheet, {
    size,
    color
  });

  const elementsColor =
    color === "black"
      ? theme.colors.white
      : !color
        ? theme.colors.white
        : theme.colors.black;

  const textVariant = useMemo<UITextVariants>(() => {
    const variant: UITextVariants = {};

    switch (size) {
      case "small":
      case "medium":
        variant.size = "sm";
        variant.font = "semibold";
        break;
      case "large":
        variant.font = "semibold";
        break;
      case "xLarge":
        variant.font = "semibold";
        break;
    }

    switch (color) {
      case undefined:
      case "outlined-white":
      case "black":
      case "transparent":
        variant.color = "white";
        break;
      case "secondary":
        variant.color = "dark";
        break;
      case "outlined-red":
        variant.color = "error";
        break;

      case "outlined-main":
        variant.color = "main";
        break;
    }

    return variant;
  }, [size, color]);

  return (
    <Pressable
      disabled={isLoading || disabled}
      style={({ pressed }) => [styles.container(pressed), style]}
      {...props}
    >
      {icon ? (
        <UIIcon
          xml={icon}
          width={20}
          height={20}
          fill={iconColor ?? elementsColor}
        />
      ) : null}
      {isLoading ? (
        <UILoader color={elementsColor} />
      ) : typeof children === "string" ? (
        <UIText {...textVariant}>{children}</UIText>
      ) : (
        children
      )}
    </Pressable>
  );
};

export default UIButton;
