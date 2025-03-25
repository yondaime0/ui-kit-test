import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StatusBar, StatusBarProps } from "react-native";

const UIStatusBar: React.FC<StatusBarProps> = (props) => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    if (navigation) {
      setIsReady(true);
    }
  }, [navigation]);

  if (!isReady) {
    return null;
  }

  return isFocused ? <StatusBar {...props} /> : null;
};

export default UIStatusBar;
