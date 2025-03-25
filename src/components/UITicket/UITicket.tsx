import { FC } from "react";
import { Pressable, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { UICard } from "../UICard";
import { UIText } from "../UIText";
import { stylesheet } from "./UITicket.styles";
import { UITicketProps } from "./UITicket.types";
import { currencyFormatter } from "../../helpers/methods";

const UITicket: FC<UITicketProps> = ({
  background,
  textColor = "black",
  headerTitle,
  headerTitleNumberOfLines,
  headerChildren,
  description,
  price,
  dotsColor,
  style,
  onPress
}) => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={[styles.outerContainer, style]}>
      <Pressable onPress={onPress} style={styles.container(background)}>
        <UICard style={styles.header} onPress={onPress}>
          <UIText
            numberOfLines={headerTitleNumberOfLines}
            style={styles.headerTitle}
            font="semibold"
            color="white"
          >
            {headerTitle}
          </UIText>
          {headerChildren}
        </UICard>
        <View style={styles.details}>
          {typeof description === "string" ? (
            <UIText
              size="xs"
              font="semibold"
              style={[styles.description, { color: textColor }]}
            >
              {description}
            </UIText>
          ) : (
            description
          )}
          {price ? (
            <UIText size="xl" font="semibold" style={{ color: textColor }}>
              {currencyFormatter.format(price)}
            </UIText>
          ) : null}
        </View>
      </Pressable>
      <View style={styles.dotsContainer}>
        <View style={styles.dot(dotsColor)} />
        <View style={styles.dot(dotsColor)} />
        <View style={styles.dot(dotsColor)} />
        <View style={styles.dot(dotsColor)} />
      </View>
    </View>
  );
};

export default UITicket;
