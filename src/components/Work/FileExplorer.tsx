import React from 'react';
import { Briefcase } from 'lucide-react';

interface FileExplorerProps {
  selectedFile: string;
  onSelect: (file: string) => void;
}

const FileExplorer: React.FC<FileExplorerProps> = ({ selectedFile, onSelect }) => {
  return (
    <div className="w-64 bg-[#011627] border-r border-[#1E2D3D] overflow-y-auto">
      <div className="p-4">
        <h2 className="text-[#607B96] mb-4">// work-experience</h2>
        <div className="space-y-2">
          <button
            onClick={() => onSelect('ginoa')}
            className={`w-full flex items-center gap-2 px-4 py-2 rounded hover:bg-[#1E2D3D] ${
              selectedFile === 'ginoa' ? 'text-white bg-[#1E2D3D]' : 'text-[#607B96]'
            }`}
          >
            <Briefcase size={16} />
            <span>Ginoa.io</span>
          </button>
          <button
            onClick={() => onSelect('partisepeti')}
            className={`w-full flex items-center gap-2 px-4 py-2 rounded hover:bg-[#1E2D3D] ${
              selectedFile === 'partisepeti' ? 'text-white bg-[#1E2D3D]' : 'text-[#607B96]'
            }`}
          >
            <Briefcase size={16} />
            <span>Partisepeti.com</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileExplorer;