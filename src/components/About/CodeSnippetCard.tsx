import React from 'react';
import { User, Star } from 'lucide-react';

interface CodeSnippetCardProps {
  content: string;
  username: string;
  createdAt: string;
  stars: number;
}

const CodeSnippetCard: React.FC<CodeSnippetCardProps> = ({
  content,
  username,
  createdAt,
  stars,
}) => {
  return (
    <div className="bg-[#011627] rounded-lg p-4 mb-6 border border-[#1E2D3D] hover:border-[#43D9AD] transition-colors">
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
      <pre className="font-mono text-sm overflow-x-auto">
        {content.split('\n').map((line, i) => (
          <div key={i} className="table-row">
            <span className="table-cell text-[#607B96] pr-4 select-none">
              {i + 1}
            </span>
            <span className="table-cell">
              {line.split(/(function|const|let|return|interface|type|:|=>|<|>|\(|\)|{|}|"|'|,|;)/).map((part, j) => {
                if (['function', 'const', 'let', 'return', 'interface', 'type'].includes(part)) {
                  return <span key={j} className="text-[#C792EA]">{part}</span>;
                } else if ([':', '=>', '<', '>', '(', ')', '{', '}'].includes(part)) {
                  return <span key={j} className="text-[#89DDFF]">{part}</span>;
                } else if (part.match(/".*"|'.*'/)) {
                  return <span key={j} className="text-[#E99287]">{part}</span>;
                } else if (part.match(/[A-Z][a-zA-Z]+/)) {
                  return <span key={j} className="text-[#43D9AD]">{part}</span>;
                } else {
                  return <span key={j} className="text-[#607B96]">{part}</span>;
                }
              })}
            </span>
          </div>
        ))}
      </pre>
    </div>
  );
};

export default CodeSnippetCard;