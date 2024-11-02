import { StaticImageData } from "next/image";

export interface Project {
    title: string;
    description: string;
    imageUrl: StaticImageData | string;
    demoUrl: string;
    browserUrl: string;
  }
  
  export interface ProjectCardProps {
    project: Project;
    selectedProject: Project | null;
    setSelectedProject: (project: Project | null) => void;
    navigate: (url: string) => void;
  }
  