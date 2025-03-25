export interface UIConfirmationProps {
  isVisible: boolean;
  title: string;
  confirmButtonText?: string;
  closeButtonText?: string;
  onConfirm: () => void;
  isConfirmLoading?: boolean;
  onClose: () => void;
}
