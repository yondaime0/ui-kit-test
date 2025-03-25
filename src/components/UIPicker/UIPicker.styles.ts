import { createStyleSheet, UnistylesRuntime } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme, runtime) => ({
  card: (valid: boolean) => ({
    borderColor: valid ? theme.colors.green : theme.colors.icons,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }),
  labelText: {
    flexShrink: 1
  },
  bottomSheetView: {
    height: runtime.screen.height / 3,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20
  },
  text: {
    textAlign: "center"
  },
  bottomSheetHeader: {
    alignSelf: "center",
    marginVertical: 16
  },
  bottomSheetList: {
    paddingHorizontal: 20,
    paddingBottom: runtime.insets.bottom + 40
  },
  bottomSheetListItem: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderBottomColor:
      UnistylesRuntime.colorScheme === "dark"
        ? theme.colors.cardsDarkLight
        : theme.colors.background
  },
  errorMessage: {
    marginHorizontal: 4,
    marginTop: 8
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.grayLight,
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: theme.borderRadius.sm,
    marginBottom: 15
  },
  search: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    paddingLeft: 42,
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    lineHeight: 18,
    color: theme.colors.black
  }
}));
