import React from 'react';

interface TechnologyFilterProps {
  technologies: string[];
  selectedTechs: string[];
  onTechSelect: (tech: string) => void;
}

const TechnologyFilter: React.FC<TechnologyFilterProps> = ({
  technologies,
  selectedTechs,
  onTechSelect,
}) => {
  return (
    <div className="w-64 bg-[#011627] border-r border-[#1E2D3D] p-4">
      <h2 className="text-[#607B96] mb-4">// select technology</h2>
      <div className="space-y-2">
        {technologies.map(tech => (
          <label key={tech} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedTechs.includes(tech)}
              onChange={() => onTechSelect(tech)}
              className="text-[#FEA55F]"
            />
            <span className="text-[#607B96]">{tech}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default TechnologyFilter;