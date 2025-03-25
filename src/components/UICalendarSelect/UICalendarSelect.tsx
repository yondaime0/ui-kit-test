import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { forwardRef, useState } from "react";
import { useTranslation } from "react-i18next";
import DateTimePicker from "react-native-ui-datepicker";
import { DatePickerRangeProps } from "react-native-ui-datepicker/lib/typescript/DateTimePicker";
import { RangeChange } from "react-native-ui-datepicker/lib/typescript/types";
import { UnistylesRuntime, useStyles } from "react-native-unistyles";

import { UIBottomSheetModal } from "../UIBottomSheetModal";
import { UIButton } from "../UIButton";
import { stylesheet } from "./UICalendarSelect.styles";

dayjs.extend(utc);

type DateRange = Parameters<RangeChange>[0];

const UICalendarSelect = forwardRef<
  BottomSheetModal,
  {
    calendarPickerProps?: DatePickerRangeProps;
    selectedRange: DateRange | undefined;
    setRange: (range: DateRange | undefined) => void;
  }
>(({ calendarPickerProps, selectedRange, setRange }, ref) => {
  const { t } = useTranslation("ns", { keyPrefix: "common" });
  const { theme, styles } = useStyles(stylesheet);
  const [selectedDates, setSelectedDates] = useState<DateRange | undefined>(
    selectedRange
  );

  const textColor =
    UnistylesRuntime.colorScheme === "dark"
      ? theme.colors.white
      : theme.colors.dark;

  return (
    <UIBottomSheetModal ref={ref} enableDynamicSizing>
      <BottomSheetView style={styles.container}>
        <DateTimePicker
          locale="uk"
          mode="range"
          onChange={setSelectedDates}
          maxDate={dayjs().utc(true)}
          startDate={selectedDates?.startDate}
          endDate={selectedDates?.endDate}
          selectedItemColor={theme.colors.main}
          selectedTextStyle={styles.selectedTextStyle}
          timePickerIndicatorStyle={{
            backgroundColor: theme.colors.mainLighter
          }}
          calendarTextStyle={{
            color: textColor
          }}
          headerTextStyle={{ color: textColor }}
          weekDaysTextStyle={{ color: textColor }}
          headerButtonColor={theme.colors.text}
          weekDaysContainerStyle={{ borderColor: theme.colors.grayLight }}
          yearContainerStyle={{
            backgroundColor: theme.colors.background,
            borderColor: theme.colors.grayLight
          }}
          todayContainerStyle={{ backgroundColor: theme.colors.background }}
          monthContainerStyle={{
            backgroundColor: theme.colors.background,
            borderColor: theme.colors.grayLight
          }}
          {...calendarPickerProps}
        />
        <UIButton onPress={() => setRange(selectedDates)}>
          {t("save", "Зберегти")}
        </UIButton>
      </BottomSheetView>
    </UIBottomSheetModal>
  );
});

export default UICalendarSelect;
