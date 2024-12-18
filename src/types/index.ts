// Common types used across the application
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