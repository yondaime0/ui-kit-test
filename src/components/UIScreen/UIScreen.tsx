import { FC } from "react";
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { styleSheet } from "./UIScreen.styles";
import { UIScreenProps } from "./UIScreen.types";

const UIScreen: FC<UIScreenProps> = ({
  insetBottom,
  noHorizontalPadding,
  children,
  style
}) => {
  const { styles } = useStyles(styleSheet);

  return (
    <View style={[styles.wrapper({ insetBottom, noHorizontalPadding }), style]}>
      {children}
    </View>
  );
};

export default UIScreen;
