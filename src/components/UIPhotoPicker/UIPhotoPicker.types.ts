export interface UIPhotoPickerProps {
  label?: string;
  photo?: string;
  onSelectPhoto?: (photo: string) => void;
  pickerType?: "gallery" | "camera";
  errorMessage?: string;
}
