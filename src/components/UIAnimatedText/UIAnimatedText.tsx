import { type FC, useEffect } from "react";
import { View } from "react-native";
import Animated, { FadeInLeft, FadeOutLeft } from "react-native-reanimated";
import { useStyles } from "react-native-unistyles";

import { TEXT_ANIMATION_DELAY } from "./UIAnimatedText.constants";
import { stylesheet } from "./UIAnimatedText.styles";
import { useBoolean } from "../../hooks";

import type { UIAnimatedTextProps } from "./UIAnimatedText.types";

const UIAnimatedText: FC<UIAnimatedTextProps> = ({
  text,
  enteringDelay = 0,
  textStyle,
  containerStyle
}) => {
  const { value: isVisible, setTrue: onShow } = useBoolean(enteringDelay === 0);

  const { styles } = useStyles(stylesheet);

  const splittedText = text?.split(" ");

  useEffect(() => {
    if (enteringDelay !== 0) {
      setTimeout(() => {
        onShow();
      }, enteringDelay);
    }
  }, []);

  return (
    <View style={[styles.textContainer, containerStyle]}>
      {isVisible &&
        splittedText.map((char, index) => {
          return (
            <Animated.View
              key={`char_${char}_index_${index}}`}
              entering={FadeInLeft.delay(
                index * TEXT_ANIMATION_DELAY
              ).springify()}
              exiting={FadeOutLeft.delay(
                index * TEXT_ANIMATION_DELAY
              ).springify()}
            >
              <Animated.Text style={[styles.text, textStyle]}>
                {char}
              </Animated.Text>
            </Animated.View>
          );
        })}
    </View>
  );
};

export default UIAnimatedText;
