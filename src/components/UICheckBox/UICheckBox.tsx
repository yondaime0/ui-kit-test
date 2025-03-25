import { TouchableOpacity } from "react-native";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./UICheckBox.styles";
import { UICheckBoxProps } from "./UICheckBox.types";
import { ICONS } from "../../assets";
import { UIIcon } from "../UIIcon";

const UICheckBox: React.FC<UICheckBoxProps> = ({
  isChecked,
  onToggle,
  variant = "main",
  isError
}) => {
  const { styles, theme } = useStyles(stylesheet, {
    type:
      isChecked && variant === "main"
        ? "checked-main"
        : isChecked && variant === "white"
          ? "checked-white"
          : isError
            ? "error"
            : "unChecked"
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
          stroke={variant === "main" ? theme.colors.white : theme.colors.main}
          width={14}
          height={14}
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default UICheckBox;
