import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { UIButton, UICard, UIText } from "..";
import { UIModal } from "../UIModal";
import { stylesheet } from "./UIConfirmation.styles";

import type { UIConfirmationProps } from "./UIConfirmation.types";

const UIConfirmation: React.FC<UIConfirmationProps> = ({
  isVisible,
  onClose,
  onConfirm,
  confirmButtonText = "Так",
  closeButtonText = "Ні",
  title,
  isConfirmLoading
}) => {
  const { styles } = useStyles(stylesheet);

  return (
    <UIModal isVisible={isVisible} onClose={onClose}>
      <UICard appearance="elevated" style={styles.contentContainer}>
        <UIText style={styles.title} font="semibold">
          {title}
        </UIText>
        <View style={styles.buttonsContainer}>
          <UIButton
            size="large"
            color="outlined-red"
            onPress={onConfirm}
            style={styles.button}
            isLoading={isConfirmLoading}
          >
            {confirmButtonText}
          </UIButton>
          <UIButton
            size="large"
            color="secondary"
            onPress={onClose}
            style={styles.button}
          >
            {closeButtonText}
          </UIButton>
        </View>
      </UICard>
    </UIModal>
  );
};

export default UIConfirmation;
