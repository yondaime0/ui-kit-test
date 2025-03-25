import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./UIGenderSelector.styles";
import { UISwitchSelector, UIText } from "../../components";

import type { UIGenderSelectorProps } from "./UIGenderSelector.types";

const UIGenderSelector: React.FC<UIGenderSelectorProps> = ({
  value,
  onPress
}) => {
  const { t } = useTranslation("ns", { keyPrefix: "auth" });
  const { styles } = useStyles(stylesheet);
  const initial = value === "male" ? 0 : 1;
  return (
    <View style={styles.container}>
      <UIText size="xs" font="semibold" color="secondary">
        {t("sex", "Стать")}
      </UIText>
      <View style={styles.switchContainer}>
        <UISwitchSelector
          initial={initial}
          options={[
            { label: t("male", "Чоловік"), value: "male" },
            { label: t("female", "Жінка"), value: "female" }
          ]}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default UIGenderSelector;
