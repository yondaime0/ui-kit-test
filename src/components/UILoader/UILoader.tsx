import {
  MaterialIndicator,
  type MaterialIndicatorProps
} from "react-native-indicators";
import { useStyles } from "react-native-unistyles";

const UILoader: React.FC<MaterialIndicatorProps> = ({
  trackWidth = 2,
  size = 20,
  ...props
}) => {
  const { theme } = useStyles();
  return (
    <MaterialIndicator
      {...props}
      trackWidth={trackWidth}
      size={size}
      color={props.color ?? theme.colors.main}
    />
  );
};
export default UILoader;
