import React from "react";
import { StyleProp, ViewStyle } from "react-native";

export type UITicketProps = {
  background: string;
  headerTitle: string;
  headerTitleNumberOfLines?: number;
  textColor?: string;
  dotsColor?: string;
  headerChildren?: React.ReactNode;

  description?: string | React.ReactNode;
  price?: string | number;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};
