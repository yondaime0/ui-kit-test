import dayjs from "dayjs";
import { TouchableOpacity, View } from "react-native";
import DatePicker from "react-native-date-picker";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./UIDatePicker.styles";
import { useBoolean } from "../../hooks";
import { UIText } from "../UIText";

import type { UIDatePickerProps } from "./UIDatePicker.types";

const UIDatePicker: React.FC<UIDatePickerProps> = ({
  style,
  label,
  date = dayjs().toDate(),
  onChangeDate,
  errorMessage
}) => {
  const { styles } = useStyles(stylesheet);

  const {
    value: isVisible,
    setTrue: onShow,
    setFalse: onClose
  } = useBoolean(false);

  return (
    <View style={style}>
      <DatePicker
        modal
        mode="date"
        locale="uk"
        title={label}
        maximumDate={new Date()}
        open={isVisible}
        date={date}
        onConfirm={(date) => {
          onClose();
          onChangeDate(dayjs(date).toDate());
        }}
        onCancel={onClose}
      />
      <TouchableOpacity
        onPress={onShow}
        activeOpacity={0.7}
        style={styles.container}
      >
        <UIText
          size="xs"
          font="semibold"
          color="secondary"
          style={[styles.label, date && styles.smallLabel]}
        >
          {label}
        </UIText>
        {date ? (
          <UIText style={styles.value}>
            {dayjs(date).locale("uk").format("DD MMMM, YYYY")}
          </UIText>
        ) : null}
      </TouchableOpacity>
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
};

export default UIDatePicker;
