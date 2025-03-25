import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flexDirection: "row",
    gap: 12,
    alignSelf: "center"
  },
  input: {
    position: "absolute",
    height: 55,
    left: 0,
    right: 0,
    opacity: 0
  },
  cellGroup: {
    flexDirection: "row",
    gap: 5
  },
  cell: (hasValue: boolean, isFocused: boolean) => ({
    height: 48,
    width: 48,
    backgroundColor: isFocused ? theme.colors.white : theme.colors.input,
    borderRadius: theme.borderRadius.sm,
    padding: 2,
    alignItems: "center",
    justifyContent: hasValue ? "center" : "flex-end",
    borderWidth: 2,
    borderColor: isFocused ? theme.colors.main : theme.colors.white
  }),

  underscore: {
    flex: 1,
    borderBottomColor: theme.colors.icons,
    borderBottomWidth: 2,
    width: 16,
    marginBottom: 10
  },
  errorMessage: {
    marginHorizontal: 4,
    marginTop: 8
  }
}));
