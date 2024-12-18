// Move types from types/index.ts to utils/types.ts for better organization
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export interface PersonalInfo {
  bio: string[];
  interests: string[];
  education: {
    type: string;
    institution: string;
    year: string;
  }[];
  contacts: {
    email: string;
    phone: string;
  };
}

export interface TreeItem {
  label: string;
  type: 'folder' | 'file';
  children?: TreeItem[];
  isOpen?: boolean;
  onClick?: () => void;
}