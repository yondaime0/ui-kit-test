import { HeaderTitleProps } from "@react-navigation/elements/src/types";
import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { useStyles } from "react-native-unistyles";

import { ICONS } from "../../assets";
import { UIIconButton, UIIconButtonProps } from "../UIIconButton";
import { UIText } from "../UIText";

const useDefaultUIStackHeaderStyles = () => {
  const { theme } = useStyles();

  const headerStyle: StyleProp<ViewStyle> = {
    backgroundColor: theme.colors.background
  };
  const headerLeftContainerStyle: StyleProp<ViewStyle> = { paddingLeft: 16 };
  return {
    headerStyle,
    headerLeftContainerStyle
  };
};

const UIStackHeaderTitle: React.FC<HeaderTitleProps> = ({ children }) => (
  <UIText adjustsFontSizeToFit numberOfLines={1} font="semibold">
    {children}
  </UIText>
);

const UIBackButton: React.FC<UIIconButtonProps> = (props) => {
  const { theme } = useStyles();
  const navigation = useNavigation();

  const handlePress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.dispatch(StackActions.replace("BottomTabNavigation"));
    }
  };

  return (
    <UIIconButton
      {...props}
      onPress={handlePress}
      hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
      xml={ICONS.arrowLeft}
      width={24}
      height={24}
      fill={theme.colors.text}
    />
  );
};

const UIStackHeader = {
  Title: UIStackHeaderTitle,
  BackButton: UIBackButton,
  useDefaultUIStackHeaderStyles
};

export default UIStackHeader;
