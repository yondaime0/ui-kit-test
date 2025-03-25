import { TouchableOpacity } from "react-native";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./UILink.styles";
import { type UILinkProps } from "./UILink.types";
import { UIIcon } from "../UIIcon";
import { UIText } from "../UIText";

const UILink: React.FC<UILinkProps> = ({ title, color, icon, ...props }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <TouchableOpacity
      {...props}
      style={[styles.link, props.style]}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <UIText size="xs" font="semibold" color={color}>
        {title}
      </UIText>
      <UIIcon {...icon} />
    </TouchableOpacity>
  );
};

export default UILink;
