import BarCode from "@kichiyaki/react-native-barcode-generator";
import { View } from "react-native";
import { UnistylesRuntime, useStyles } from "react-native-unistyles";

import { stylesheet } from "./UIBarCode.styles";

import type { UIBarCodeProps } from "./UIBarCode.types";
import type { FC } from "react";

const UIBarCode: FC<UIBarCodeProps> = ({ ...props }) => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.qrCode(UnistylesRuntime.screen.width * 0.7 + 64)}>
      <BarCode {...props} />
    </View>
  );
};

export default UIBarCode;
