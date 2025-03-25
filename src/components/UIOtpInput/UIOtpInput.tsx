import { useEffect, useRef } from "react";
import { TextInput, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./UIOtpInput.styles";
import { UIText } from "../UIText";

import type { CellProps, UIOtpInputProps } from "./UIOtpInput.types";

const Cell: React.FC<CellProps> = ({ value, focusedCellIndex, index }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.cell(!!value, index === focusedCellIndex)}>
      {value ? (
        <UIText color="dark">{value}</UIText>
      ) : (
        <View style={styles.underscore} />
      )}
    </View>
  );
};

const UIOtpInput: React.FC<UIOtpInputProps> = ({
  value,
  setValue,
  errorMessage,
  ...props
}) => {
  const { styles } = useStyles(stylesheet);

  const ref = useRef<TextInput>(null);

  const focusedCellIndex = value?.length;

  const onFocusHandler = () => {
    setValue("");
  };

  useEffect(() => {
    if (value?.length === 6) {
      ref.current?.blur();
    }
  }, [value]);

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.cellGroup}>
          {new Array(3).fill(null).map((_, index) => (
            <Cell
              key={index}
              index={index}
              focusedCellIndex={focusedCellIndex}
              value={value?.[index]}
            />
          ))}
        </View>
        <View style={styles.cellGroup}>
          {new Array(3).fill(null).map((_, index) => (
            <Cell
              key={index}
              index={index + 3}
              focusedCellIndex={focusedCellIndex}
              value={value?.[index + 3]}
            />
          ))}
        </View>
      </View>

      <TextInput
        {...props}
        ref={ref}
        style={styles.input}
        onFocus={onFocusHandler}
        onChangeText={setValue}
        value={value}
        maxLength={6}
        keyboardType="number-pad"
        autoFocus
      />
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

export default UIOtpInput;
