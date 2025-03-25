import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 100
  },
  defaultAvatar: {
    height: 40,
    width: 40,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.mainLighter
  }
}));
