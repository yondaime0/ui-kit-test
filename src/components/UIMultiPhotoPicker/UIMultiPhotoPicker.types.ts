export interface UIMultiPhotoPickerProps {
  label?: string;
  photos?: string[];
  onSelectPhotos?: (photo: string[]) => void;
  pickerType?: "gallery" | "camera";
  errorMessage?: string;
}
