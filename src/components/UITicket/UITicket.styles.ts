import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  outerContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  container: (backgroundColor: string) => ({
    flexGrow: 1,
    flex: 1,
    borderTopLeftRadius: theme.borderRadius.sm,
    borderBottomLeftRadius: theme.borderRadius.sm,
    backgroundColor,
    paddingTop: 11,
    paddingBottom: 18,
    paddingLeft: 13,
    paddingRight: 25
  }),
  header: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: theme.borderRadius.xs,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: theme.colors.dark,
    gap: 5
  },
  headerTitle: {
    flex: 1
  },
  details: {
    flexDirection: "row",
    marginTop: 24,
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 12
  },
  description: {
    flexShrink: 1
  },
  dotsContainer: {
    flex: 0,
    alignSelf: "center",
    marginLeft: -8,
    gap: 8
  },
  dot: (color?: string) => ({
    height: 16,
    width: 16,
    backgroundColor: color ?? theme.colors.background,
    borderRadius: 8
  })
}));
