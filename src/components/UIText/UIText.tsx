import React, { forwardRef } from "react";
import { Text } from "react-native";
import Animated from "react-native-reanimated";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./UIText.styles";
import { UITextProps } from "./UIText.types";

const UIText = forwardRef<Text, UITextProps>(
  ({ children, style, size, font, color, ...props }, ref) => {
    const { styles } = useStyles(stylesheet, { size, font, color });

    return (
      <Animated.Text ref={ref} style={[styles.text, style]} {...props}>
        {children}
      </Animated.Text>
    );
  }
);

export default UIText;
