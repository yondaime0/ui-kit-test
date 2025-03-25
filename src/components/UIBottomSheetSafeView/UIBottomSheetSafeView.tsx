import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./UIBottomSheetSafeView.styles";

const UIBottomSheetSafeView = ({ children }: { children: React.ReactNode }) => {
  const { styles } = useStyles(stylesheet);
  return <View style={styles.container}>{children}</View>;
};

export default UIBottomSheetSafeView;
