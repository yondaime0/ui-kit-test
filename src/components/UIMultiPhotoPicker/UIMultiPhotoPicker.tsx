import { FasterImageView } from "@candlefinance/faster-image";
import { Keyboard, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./UIMultiPhotoPicker.styles";
import { type UIMultiPhotoPickerProps } from "./UIMultiPhotoPicker.types";
import { ICONS } from "../../assets";
import { replaceElementInArray } from "../../helpers";
import { useImagePicker } from "../../hooks";
import { UICard } from "../UICard";
import { UIIcon } from "../UIIcon";
import { UIText } from "../UIText";

const UIMultiPhotoPicker: React.FC<UIMultiPhotoPickerProps> = ({
  photos,
  label,
  onSelectPhotos,
  pickerType,
  errorMessage
}) => {
  const { styles, theme } = useStyles(stylesheet);
  const { openPicker } = useImagePicker({ pickerType });

  const handleSelectPhoto = async (index: number) => {
    Keyboard.dismiss();
    const image = await openPicker({
      quality: 0.8
    });
    if (image) {
      onSelectPhotos?.(replaceElementInArray(photos || [], image?.uri, index));
    }
  };

  return (
    <View>
      <View style={styles.wrapper}>
        <UIText size="sm" font="medium">
          {label}
        </UIText>
        <View style={styles.pickerContainer}>
          {photos?.map((photo, index) => (
            <UICard
              onPress={async () => await handleSelectPhoto(index)}
              key={index}
              style={styles.picker}
            >
              {photo ? (
                <FasterImageView
                  source={{ url: photo, resizeMode: "cover" }}
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
          ))}
        </View>
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

export default UIMultiPhotoPicker;
