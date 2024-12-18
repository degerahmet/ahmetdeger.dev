export interface TreeItem {
  label: string;
  type: 'folder' | 'file';
  icon?: React.ReactNode;
  children?: TreeItem[];
  isOpen?: boolean;
  onClick?: () => void;
}