import { forwardRef, useCallback } from "react";
import {
  type NativeSyntheticEvent,
  TextInput,
  type TextInputFocusEventData,
  View
} from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./UIInput.styles";
import { ICONS } from "../../assets";
import { useBoolean } from "../../hooks";
import { UIIconButton } from "../UIIconButton";
import { UIText } from "../UIText";

import type { UIInputProps } from "./UIInput.types";

const AnimatedText = Animated.createAnimatedComponent(UIText);

const UIInput = forwardRef<TextInput, UIInputProps>(
  (
    { label, errorMessage, style, type = "text", rightAction, ...props },
    parentRef
  ) => {
    const labelFontSize = useSharedValue(12);
    const labelLineHeight = useSharedValue(14.6);
    const labelTop = useSharedValue(14);

    const isFocused = useSharedValue(false);
    const focusedProgress = useSharedValue(0);

    const { styles, theme } = useStyles(stylesheet);

    const { value: isSecure, toggle: toggleIsSecure } = useBoolean(
      type === "password"
    );

    const onFocusHandler = (
      e: NativeSyntheticEvent<TextInputFocusEventData>
    ) => {
      isFocused.value = true;
      props.onFocus?.(e);
    };

    const onBlurHandler = (
      e: NativeSyntheticEvent<TextInputFocusEventData>
    ) => {
      isFocused.value = false;
      props.onBlur?.(e);
    };

    const animatedContainerStyle = useAnimatedStyle(() => {
      const borderColor = interpolateColor(
        focusedProgress.value,
        [0, 1],
        errorMessage
          ? [theme.colors.white, theme.colors.error]
          : [theme.colors.white, theme.colors.main]
      );

      const backgroundColor = interpolateColor(
        focusedProgress.value,
        [0, 1],
        [theme.colors.input, theme.colors.white]
      );

      return {
        borderColor,
        backgroundColor
      };
    }, [errorMessage, theme]);

    useAnimatedReaction(
      () => ({
        isFocused: isFocused.value || props.value,
        isProgress: isFocused.value || errorMessage
      }),
      ({ isFocused, isProgress }) => {
        focusedProgress.value = withTiming(isProgress ? 1 : 0);
        if (isFocused) {
          labelFontSize.value = withTiming(9);
          labelLineHeight.value = withTiming(9.7);
          labelTop.value = withTiming(7);
        } else {
          labelFontSize.value = withTiming(12);
          labelLineHeight.value = withTiming(14.6);
          labelTop.value = withTiming(14);
        }
      }
    );

    const handleRef = useCallback(
      (element: TextInput) => {
        if (parentRef instanceof Function) {
          parentRef(element);
        } else if (parentRef) {
          parentRef.current = element;
        }
      },
      [parentRef]
    );
    return (
      <View style={style}>
        <Animated.View
          style={[styles.container, animatedContainerStyle, style]}
        >
          <AnimatedText
            size="xs"
            font="semibold"
            color="secondary"
            style={[
              styles.label,
              {
                top: labelTop,
                fontSize: labelFontSize,
                lineHeight: labelLineHeight
              }
            ]}
          >
            {label}
          </AnimatedText>
          <TextInput
            {...props}
            ref={handleRef}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            style={styles.input(!!errorMessage, !!props.multiline)}
            selectionColor={theme.colors.main}
            secureTextEntry={isSecure}
          />
          {type === "password" && (
            <UIIconButton
              onPress={toggleIsSecure}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              style={styles.rightContainer}
              xml={isSecure ? ICONS.visibility : ICONS.visibilityOff}
              width={24}
              height={24}
              fill={theme.colors.icons}
            />
          )}

          {rightAction && (
            <UIIconButton
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              style={styles.rightContainer}
              {...rightAction}
            />
          )}
        </Animated.View>

        {errorMessage ? (
          <UIText
            size="xs"
            font="semibold"
            color="error"
            style={styles.errorMessage}
          >
            {errorMessage}
          </UIText>
        ) : null}
      </View>
    );
  }
);

export default UIInput;
