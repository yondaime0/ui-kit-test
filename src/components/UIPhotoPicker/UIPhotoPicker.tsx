import { FasterImageView } from "@candlefinance/faster-image";
import { Keyboard, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./UIPhotoPicker.styles";
import { UIPhotoPickerProps } from "./UIPhotoPicker.types";
import { ICONS } from "../../assets";
import { useImagePicker } from "../../hooks";
import { UICard } from "../UICard";
import { UIIcon } from "../UIIcon";
import { UIText } from "../UIText";

const UIPhotoPicker: React.FC<UIPhotoPickerProps> = ({
  photo,
  label,
  onSelectPhoto,
  pickerType,
  errorMessage
}) => {
  const { styles, theme } = useStyles(stylesheet);
  const { openPicker } = useImagePicker({ pickerType });

  const handleSelectPhoto = async () => {
    Keyboard.dismiss();
    const image = await openPicker({
      quality: 0.8
    });

    if (image?.uri) {
      onSelectPhoto?.(image.uri);
    }
  };

  return (
    <View>
      <View style={styles.wrapper}>
        <UIText size="sm" font="medium">
          {label}
        </UIText>
        <UICard onPress={handleSelectPhoto} style={styles.picker}>
          {photo ? (
            <FasterImageView
              source={{ url: photo, resizeMode: "contain" }}
              style={styles.photo}
            />
          ) : (
            <UIIcon
              xml={ICONS.plus}
              width={28}
              height={28}
              fill={theme.colors.black}
            />
          )}
        </UICard>
      </View>

      {errorMessage ? (
        <UIText
          size="xs"
          font="semibold"
          color="error"
          style={styles.errorMessage}
        >
          {errorMessage}
        </UIText>
      ) : null}
    </View>
  );
};

export default UIPhotoPicker;
