export type ModalPropsType = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  title?: string;
};
