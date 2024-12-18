import React from 'react';
import { bio } from '../../data/bio';
import { interests } from '../../data/interests';
import { education } from '../../data/education';

interface ContentDisplayProps {
  selectedFile: string;
}

const ContentDisplay: React.FC<ContentDisplayProps> = ({ selectedFile }) => {
  const getContent = () => {
    switch (selectedFile) {
      case 'bio':
        return bio;
      case 'interests':
        return interests;
      case 'education':
        return education;
      default:
        return '// Select a file to view its contents';
    }
  };

  return (
    <div className="p-8 bg-[#011627] overflow-y-auto">
      <pre className="font-mono text-sm leading-relaxed whitespace-pre-wrap">
        {getContent().split('\n').map((line, i) => (
          <div key={i} className="table-row">
            <span className="table-cell text-[#607B96] pr-4 select-none">
              {i + 1}
            </span>
            <span className="table-cell text-[#607B96]">{line}</span>
          </div>
        ))}
      </pre>
    </div>
  );
};

export default ContentDisplay;