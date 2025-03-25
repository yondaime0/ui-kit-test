import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet({
  wrapper: {
    gap: 8
  },
  picker: {
    height: 120,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 0,
    paddingHorizontal: 0,
    overflow: "hidden"
  },
  photo: {
    width: "100%",
    height: "100%"
  },
  errorMessage: {
    marginHorizontal: 4,
    marginTop: 8
  }
});
