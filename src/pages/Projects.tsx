import React, { useState } from 'react';
import ProjectCard from '../components/Projects/ProjectCard';
import TechnologyFilter from '../components/Projects/TechnologyFilter';
import { projects } from '../data/projects';

const Projects = () => {
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  const technologies = Array.from(
    new Set(projects.flatMap(p => p.technologies))
  );

  const handleTechSelect = (tech: string) => {
    setSelectedTechs(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const filteredProjects = selectedTechs.length === 0
    ? projects
    : projects.filter(p =>
        p.technologies.some(t => selectedTechs.includes(t))
      );

  return (
    <div className="flex h-[calc(100vh-116px)]">
      <TechnologyFilter
        technologies={technologies}
        selectedTechs={selectedTechs}
        onTechSelect={handleTechSelect}
      />
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;