import { Skeleton } from "moti/skeleton";
import { useColorScheme, View } from "react-native";

import { UISkeletonProps } from "./UISkeleton.types";

const UISkeleton: React.FC<UISkeletonProps> = ({
  children,
  containerStyle,
  ...props
}) => {
  const colorScheme = useColorScheme();

  return (
    <View style={containerStyle}>
      <Skeleton {...props} colorMode={colorScheme ?? "light"}>
        {children}
      </Skeleton>
    </View>
  );
};

export default UISkeleton;
