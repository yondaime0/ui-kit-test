import { TouchableOpacity } from "react-native";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./UICheckBox.styles";
import { ICONS } from "../../assets";
import { UIIcon } from "../UIIcon";

import type { UICheckBoxProps } from "./UICheckBox.types";

const UICheckBox: React.FC<UICheckBoxProps> = ({ isChecked, onToggle }) => {
  const { styles, theme } = useStyles(stylesheet, {
    type: isChecked ? "checked" : "unChecked"
  });

  return (
    <TouchableOpacity
      hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
      onPress={onToggle}
      style={styles.checkbox}
    >
      {isChecked ? (
        <UIIcon
          xml={ICONS.smallCheck}
          stroke={theme.colors.white}
          width={14}
          height={14}
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default UICheckBox;
