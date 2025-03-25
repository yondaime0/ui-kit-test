import { useTranslation } from "react-i18next";
import { useColorScheme } from "react-native";
import { useStyles } from "react-native-unistyles";

import { ICONS } from "../../assets";
import { UIButton } from "../UIButton";
import { UIIcon } from "../UIIcon";
import { UIText } from "../UIText";

import type { UIApplePayButtonProps } from "./UIApplePayButton.types";

const UIApplePayButton: React.FC<UIApplePayButtonProps> = ({
  title,
  onPress,
  isLoading,
  disabled
}) => {
  const { theme } = useStyles();

  const { t } = useTranslation("ns");

  const colorScheme = useColorScheme();

  return (
    <UIButton
      color={colorScheme === "light" ? "black" : "secondary"}
      onPress={onPress}
      isLoading={isLoading}
      disabled={disabled}
    >
      <UIText
        font="semibold"
        color={colorScheme === "light" ? "white" : "black"}
      >
        {title ?? t("applePay", "Apple Pay")}
      </UIText>
      <UIIcon
        xml={ICONS.applePay}
        fill={colorScheme === "light" ? theme.colors.white : theme.colors.black}
        width={24}
        height={24}
      />
    </UIButton>
  );
};

export default UIApplePayButton;
