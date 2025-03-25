import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  card: (valid: boolean) => ({
    borderColor: valid ? theme.colors.green : theme.colors.icons,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }),
  labelText: {
    flexShrink: 1,
    marginBottom: 10
  },
  valueText: {
    flexShrink: 1
  }
}));
