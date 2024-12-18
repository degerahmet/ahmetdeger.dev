import React from 'react';
import { User, Star } from 'lucide-react';

interface CodeSnippetHeaderProps {
  username: string;
  createdAt: string;
  stars: number;
}

export const CodeSnippetHeader: React.FC<CodeSnippetHeaderProps> = ({
  username,
  createdAt,
  stars,
}) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <User size={20} className="text-[#607B96]" />
        <span className="text-[#4D5BCE]">@{username}</span>
        <span className="text-[#607B96] text-sm">Created {createdAt}</span>
      </div>
      <div className="flex items-center gap-2">
        <button className="text-[#607B96] hover:text-white transition-colors">
          details
        </button>
        <div className="flex items-center gap-1">
          <Star size={16} className={stars > 0 ? 'text-[#FEA55F]' : 'text-[#607B96]'} />
          <span className="text-[#607B96]">{stars}</span>
        </div>
      </div>
    </div>
  );
};