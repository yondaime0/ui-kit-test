import SwitchSelector from "react-native-switch-selector";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./UISwitchSelector.styles";
import { SwitchSelectorProps } from "./UISwitchSelector.types";

function UISwitchSelector<T>({
  options,
  initial,
  onPress
}: SwitchSelectorProps<T>) {
  const { theme, styles } = useStyles(stylesheet);

  return (
    <SwitchSelector
      initial={initial}
      onPress={onPress}
      options={options}
      hasPadding
      selectedColor={theme.colors.mainDarker}
      textColor={theme.colors.text}
      buttonColor={theme.colors.main}
      borderColor="transparent"
      textStyle={styles.selectorText(false)}
      selectedTextStyle={styles.selectorText(true)}
      valuePadding={4}
    />
  );
}

export default UISwitchSelector;
