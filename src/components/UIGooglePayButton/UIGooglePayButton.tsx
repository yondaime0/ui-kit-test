import { useTranslation } from "react-i18next";
import { useColorScheme } from "react-native";

import { ICONS } from "../../assets";
import { UIButton } from "../UIButton";
import { UIIcon } from "../UIIcon";
import { UIText } from "../UIText";

import type { UIApplePayButtonProps } from "./UIGooglePayButton.types";

const UIGooglePayButton: React.FC<UIApplePayButtonProps> = ({
  title,
  onPress,
  isLoading,
  disabled
}) => {
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
        {title ?? t("googlePay", "Google Pay")}
      </UIText>
      <UIIcon xml={ICONS.google} width={24} height={24} />
    </UIButton>
  );
};

export default UIGooglePayButton;
