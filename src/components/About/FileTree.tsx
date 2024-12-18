import React from 'react';
import { ChevronDown, ChevronRight, File, Folder, GraduationCap, Heart } from 'lucide-react';

interface FileTreeProps {
  selectedFile: string;
  onSelect: (file: string) => void;
}

const FileTree: React.FC<FileTreeProps> = ({ selectedFile, onSelect }) => {
  const [isPersonalInfoOpen, setIsPersonalInfoOpen] = React.useState(true);

  return (
    <div className="w-64 bg-[#011627] border-r border-[#1E2D3D] overflow-y-auto">
      {/* Personal Info Section */}
      <div className="py-2">
        <button
          onClick={() => setIsPersonalInfoOpen(!isPersonalInfoOpen)}
          className="w-full flex items-center gap-2 px-4 py-1 hover:bg-[#1E2D3D] text-[#607B96]"
        >
          {isPersonalInfoOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          <Folder size={16} />
          <span>personal-info</span>
        </button>

        {isPersonalInfoOpen && (
          <div className="ml-4">
            <button
              onClick={() => onSelect('bio')}
              className={`w-full flex items-center gap-2 px-4 py-1 hover:bg-[#1E2D3D] ${
                selectedFile === 'bio' ? 'text-white bg-[#1E2D3D]' : 'text-[#607B96]'
              }`}
            >
              <File size={16} />
              <span>bio</span>
            </button>
            <button
              onClick={() => onSelect('interests')}
              className={`w-full flex items-center gap-2 px-4 py-1 hover:bg-[#1E2D3D] ${
                selectedFile === 'interests' ? 'text-white bg-[#1E2D3D]' : 'text-[#607B96]'
              }`}
            >
              <Heart size={16} />
              <span>interests</span>
            </button>
            <button
              onClick={() => onSelect('education')}
              className={`w-full flex items-center gap-2 px-4 py-1 hover:bg-[#1E2D3D] ${
                selectedFile === 'education' ? 'text-white bg-[#1E2D3D]' : 'text-[#607B96]'
              }`}
            >
              <GraduationCap size={16} />
              <span>education</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileTree;