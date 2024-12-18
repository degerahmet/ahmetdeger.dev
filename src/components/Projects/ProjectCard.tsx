import React from 'react';
import { ExternalLink } from 'lucide-react';
import Button from '../UI/Button';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-[#011627] rounded-lg overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">
          {project.title} <span className="text-[#607B96]">// {project.id}</span>
        </h3>
        <p className="text-[#607B96] mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => (
            <span
              key={tech}
              className="px-2 py-1 bg-[#1C2B3A] rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <Button
          variant="primary"
          onClick={() => window.open(project.link, '_blank')}
          className="flex items-center gap-2"
        >
          view-project <ExternalLink size={16} />
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;