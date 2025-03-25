import * as ImagePicker from "expo-image-picker";
import { useCallback } from "react";
import { Alert, Linking } from "react-native";

interface UseImagePickerProps {
  pickerType?: "gallery" | "camera";
}

export const useImagePicker = ({
  pickerType = "gallery"
}: UseImagePickerProps) => {
  const openPicker = useCallback(
    async (options?: ImagePicker.ImagePickerOptions) => {
      try {
        let image;
        if (pickerType === "gallery") {
          image = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 0.8,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            ...options
          });
        } else {
          await ImagePicker.requestCameraPermissionsAsync();
          image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            quality: 0.8,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            ...options
          });
        }
        if (image.canceled) return null;

        return {
          uri: image.assets?.[0]?.uri,
          name: image.assets?.[0]?.uri?.split("/").slice(-1)[0],
          type: image.assets?.[0]?.mimeType
        };
      } catch {
        Alert.alert("Please provide access", "", [
          {
            text: "Settings",

            onPress: async () => await Linking.openSettings()
          },
          {
            text: "Cancel",
            style: "cancel"
          }
        ]);
        return;
      }
    },
    []
  );

  return {
    openPicker
  };
};
