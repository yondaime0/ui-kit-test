import { Audio } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useColorScheme, View } from "react-native";
import { TimerPickerModal } from "react-native-timer-picker";
import { useStyles } from "react-native-unistyles";

import { UITimerPickerProps } from "./UITimerPicker.types";
import { UICard } from "../UICard";
import { UIText } from "../UIText";
import { stylesheet } from "./UITimerPicker.styles";
import { useBoolean } from "../../hooks";

const UITimerPicker: React.FC<UITimerPickerProps> = ({
  label,
  initialValue,
  onChangeValue
}) => {
  const { value: isVisiblePicker, setValue: setIsVisible } = useBoolean(false);

  const { theme, styles } = useStyles(stylesheet);

  const formatTime = ({
    hours,
    minutes
  }: {
    hours?: number;
    minutes?: number;
  }) => {
    if (hours && minutes) {
      return `${hours.toString().padStart(2, "0")} г, ${minutes
        .toString()
        .padStart(2, "0")} хв`;
    }
    if (hours && !minutes) {
      return `${hours.toString().padStart(2, "0")} г`;
    }

    if (!hours && minutes) {
      return `${minutes.toString().padStart(2, "0")} хв`;
    }

    return "";
  };

  const [alarmString, setAlarmString] = useState<string | null | undefined>(
    initialValue ? formatTime(initialValue) : ""
  );

  const colorScheme = useColorScheme();

  const { t } = useTranslation();

  return (
    <View>
      <UIText
        size="xs"
        font="semibold"
        color="secondary"
        style={styles.labelText}
      >
        {label}
      </UIText>
      <UICard
        style={styles.card(!!alarmString)}
        appearance="elevated"
        onPress={() => setIsVisible(true)}
      >
        <UIText
          font="medium"
          size="sm"
          style={styles.valueText}
          color={
            alarmString
              ? colorScheme === "dark"
                ? "white"
                : "black"
              : "secondary"
          }
          numberOfLines={2}
        >
          {alarmString ?? t("chooseTime", "Оберіть час")}
        </UIText>
      </UICard>

      <TimerPickerModal
        visible={isVisiblePicker}
        setIsVisible={setIsVisible}
        onConfirm={(pickedDuration) => {
          setAlarmString(formatTime(pickedDuration));
          onChangeValue(pickedDuration);
          setIsVisible(false);
        }}
        maximumHours={24}
        modalTitle={label}
        initialValue={initialValue}
        onCancel={() => setIsVisible(false)}
        closeOnOverlayPress
        Audio={Audio}
        LinearGradient={LinearGradient}
        styles={{
          theme: colorScheme || "light",
          pickerItem: {
            fontSize: 22,
            fontFamily: theme.fonts.medium
          },
          pickerLabel: {
            fontSize: 14,
            fontFamily: theme.fonts.medium
          },
          button: {
            borderWidth: 1,
            borderRadius: 16
          },
          confirmButton: {
            backgroundColor: theme.colors.main,
            color: theme.colors.white
          },
          cancelButton: {
            backgroundColor: theme.colors.white,
            color: theme.colors.main,
            borderColor: theme.colors.gray
          }
        }}
        confirmButtonText={t("confirm", "Підтвердити")}
        cancelButtonText={t("cancel", "Скасувати")}
        hideSeconds
        modalProps={{
          overlayOpacity: 0.2
        }}
      />
    </View>
  );
};

export default UITimerPicker;
