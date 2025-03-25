import { FC } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle
} from "react-native-reanimated";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./UIFlexibleListHeader.styles";

import type { UIFlexibleListHeaderProps } from "./UIFlexibleListHeader.types";

const UIFlexibleListHeader: FC<UIFlexibleListHeaderProps> = ({
  scrollOffsetY,
  height,
  children
}) => {
  const { styles } = useStyles(stylesheet);

  const outerAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(scrollOffsetY.value, [1, 0], [height, 0], {
        extrapolateRight: "clamp"
      }),
      zIndex: 10
    };
  }, [scrollOffsetY]);

  const innerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: scrollOffsetY.value,
      transform: [
        {
          translateY: interpolate(scrollOffsetY.value, [1, 0], [0, -height / 2])
        }
      ],
      height
    };
  }, [scrollOffsetY]);

  return (
    <Animated.View style={[styles.outerContainer, outerAnimatedStyle]}>
      <Animated.View style={innerAnimatedStyle}>{children}</Animated.View>
    </Animated.View>
  );
};

export default UIFlexibleListHeader;
