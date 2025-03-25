import { lightTheme } from "../theme";

type AppThemes = Record<string, typeof lightTheme>;

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}
