import React from "react";
import { Pressable } from "react-native";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./UICard.styles";

import type { UICardProps } from "./UICard.types";

const UICard = ({
  children,
  style: additionalStyles,
  appearance,
  ...props
}: UICardProps): React.ReactNode => {
  const { styles } = useStyles(stylesheet, { appearance });
  return (
    <Pressable style={[styles.card, additionalStyles]} {...props}>
      {children}
    </Pressable>
  );
};

export default UICard;
