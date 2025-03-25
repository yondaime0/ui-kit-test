import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { BlurView } from "expo-blur";
import React, { useMemo } from "react";
import { Pressable } from "react-native";
import Modal from "react-native-modal";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./UIModal.styles";
import { type UIModalProps } from "./UIModal.types";

const UIModal: React.FC<UIModalProps> = ({
  children,
  isVisible,
  onClose,
  style
}) => {
  const { styles } = useStyles(stylesheet);

  const Backdrop = useMemo(() => {
    return (
      <Pressable style={styles.backdropTouchableWrapper} onPress={onClose}>
        <BlurView
          style={styles.backdropBlur}
          tint="systemMaterialDark"
          intensity={10}
          blurReductionFactor={10}
        />
      </Pressable>
    );
  }, [onClose]);

  return (
    <Modal
      isVisible={isVisible}
      customBackdrop={Backdrop}
      backdropOpacity={1}
      onBackdropPress={onClose}
      hideModalContentWhileAnimating
      style={[styles.modal, style]}
      useNativeDriver
      useNativeDriverForBackdrop
    >
      <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
    </Modal>
  );
};

export default UIModal;
