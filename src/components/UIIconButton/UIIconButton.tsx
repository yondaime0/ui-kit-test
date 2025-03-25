import { TouchableOpacity } from "react-native";

import { type UIIconButtonProps } from "./UIIconButton.types";
import { UIIcon } from "../UIIcon";
import { UILoader } from "../UILoader";

const UIIconButton: React.FC<UIIconButtonProps> = ({
  width,
  height,
  xml,
  fill,
  stroke,
  isLoading,
  ...pressableProps
}) => {
  return (
    <TouchableOpacity {...pressableProps}>
      {isLoading ? (
        <UILoader />
      ) : (
        <UIIcon
          xml={xml}
          width={width}
          height={height}
          fill={fill}
          stroke={stroke}
        />
      )}
    </TouchableOpacity>
  );
};

export default UIIconButton;
