export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
}

export interface SocialLink {
  name: string;
  icon: React.ComponentType<{ size?: number }>;
  url: string;
}