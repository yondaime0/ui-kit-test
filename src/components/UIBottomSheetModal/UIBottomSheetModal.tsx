import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import { forwardRef } from "react";
import { UnistylesRuntime, useStyles } from "react-native-unistyles";

import type { UIBottomSheetProps } from "./UIBottomSheetModal.types";

const UIBottomSheetModal = forwardRef<BottomSheetModal, UIBottomSheetProps>(
  ({ snapPoints = ["90%"], statusBarColor, ...props }, parentRef) => {
    const { theme } = useStyles();

    if (!statusBarColor) {
      statusBarColor = theme.colors.background;
    }

    return (
      <BottomSheetModal
        {...props}
        snapPoints={snapPoints}
        ref={parentRef}
        topInset={UnistylesRuntime.insets.top}
        handleIndicatorStyle={{ backgroundColor: theme.colors.text }}
        backgroundStyle={{ backgroundColor: theme.colors.cards }}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            pressBehavior="close"
            opacity={0.6}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
          />
        )}
        onAnimate={(from, to) => {
          if (from === -1) {
            UnistylesRuntime.statusBar.setColor(
              theme.utils.getHexColorWithOpacity(theme.colors.black, 0.1)
            );
            return;
          }
          if (to === -1) {
            UnistylesRuntime.statusBar.setColor(statusBarColor);
          }
        }}
      >
        {props.children}
      </BottomSheetModal>
    );
  }
);

export default UIBottomSheetModal;
