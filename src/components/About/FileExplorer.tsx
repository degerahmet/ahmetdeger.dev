import React, { useState } from 'react';
import { ChevronDown, ChevronRight, File, Folder, GraduationCap, Heart } from 'lucide-react';
import type { TreeItem } from '../../types/navigation';

interface FileExplorerProps {
  onSelect: (file: string) => void;
}

const FileExplorer: React.FC<FileExplorerProps> = ({ onSelect }) => {
  const [isPersonalInfoOpen, setIsPersonalInfoOpen] = useState(true);

  const handleFolderClick = () => {
    setIsPersonalInfoOpen(!isPersonalInfoOpen);
  };

  return (
    <div className="w-64 bg-[#011627] border-r border-[#1E2D3D] overflow-y-auto">
      <div>
        {/* Personal Info Folder */}
        <button
          onClick={handleFolderClick}
          className="w-full flex items-center gap-2 px-4 py-1 hover:bg-[#1E2D3D] text-[#607B96]"
        >
          {isPersonalInfoOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          <Folder size={16} />
          <span>personal-info</span>
        </button>

        {/* Folder Contents */}
        {isPersonalInfoOpen && (
          <div className="ml-4">
            <button
              onClick={() => onSelect('bio')}
              className="w-full flex items-center gap-2 px-4 py-1 hover:bg-[#1E2D3D] text-[#607B96]"
            >
              <File size={16} />
              <span>bio</span>
            </button>
            <button
              onClick={() => onSelect('interests')}
              className="w-full flex items-center gap-2 px-4 py-1 hover:bg-[#1E2D3D] text-[#607B96]"
            >
              <Heart size={16} />
              <span>interests</span>
            </button>
          </div>
        )}

        {/* Education File */}
        <button
          onClick={() => onSelect('education')}
          className="w-full flex items-center gap-2 px-4 py-1 hover:bg-[#1E2D3D] text-[#607B96]"
        >
          <GraduationCap size={16} />
          <span>education</span>
        </button>
      </div>
    </div>
  );
};

export default FileExplorer;