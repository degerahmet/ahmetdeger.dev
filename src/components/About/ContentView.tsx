import React from 'react';
import { bio } from '../../data/bio';
import { interests } from '../../data/interests';
import { education } from '../../data/education';

interface ContentViewProps {
  selectedFile: string;
}

const ContentView: React.FC<ContentViewProps> = ({ selectedFile }) => {
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
    <div className="flex-1 p-8 bg-[#011627] overflow-y-auto">
      <div className="font-mono text-sm leading-relaxed">
        <pre className="text-[#607B96] whitespace-pre-wrap">{getContent()}</pre>
      </div>
    </div>
  );
};

export default ContentView;