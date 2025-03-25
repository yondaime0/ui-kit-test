import { TouchableOpacity } from "react-native";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./UIHeaderButton.styles";
import { UIIcon, UIText } from "../../components";

import type { UIHeaderButtonProps } from "./UIHeaderButton.types";

const UIHeaderButton: React.FC<UIHeaderButtonProps> = ({
  onPress,
  title,
  icon
}) => {
  const { theme, styles } = useStyles(stylesheet);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <UIIcon xml={icon} fill={theme.colors.main} /> : null}
      <UIText size="xs" color="main" font="semibold">
        {title}
      </UIText>
    </TouchableOpacity>
  );
};

export default UIHeaderButton;
