import { get } from "lodash";
import { useMemo } from "react";
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./UIListEmptyComponent.styles";
import { type UIListEmptyComponentProps } from "./UIListEmptyComponent.types";
import { UIText } from "../UIText";

const UIListEmptyComponent: React.FC<UIListEmptyComponentProps> = ({
  isError,
  error,
  emptyListText
}) => {
  const { styles } = useStyles(stylesheet);

  const content = useMemo(() => {
    switch (true) {
      case !!isError:
        if (typeof error === "string") {
          return (
            <UIText style={styles.text} size="sm">
              {error}
            </UIText>
          );
        } else {
          return (
            <UIText style={styles.text} size="sm">
              {get(error, "message")}
            </UIText>
          );
        }
      case !!emptyListText:
        return (
          <UIText style={styles.text} size="sm">
            {emptyListText}
          </UIText>
        );

      default:
        return null;
    }
  }, [isError, error, emptyListText]);

  return <View style={styles.container}>{content}</View>;
};

export default UIListEmptyComponent;
