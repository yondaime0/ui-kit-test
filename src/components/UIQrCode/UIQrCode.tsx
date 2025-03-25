import { FC } from "react";
import { View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { UnistylesRuntime, useStyles } from "react-native-unistyles";

import { stylesheet } from "./UIQrCode.styles";
import { UIQrCodeProps } from "./UIQrCode.types";

const UIQrCode: FC<UIQrCodeProps> = ({ value }) => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.qrCode(UnistylesRuntime.screen.width * 0.5 + 64)}>
      <QRCode value={value} size={UnistylesRuntime.screen.width * 0.5} />
    </View>
  );
};

export default UIQrCode;
