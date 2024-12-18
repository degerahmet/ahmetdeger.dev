import React from 'react';
import { CodeSnippetHeader } from './CodeSnippetHeader';
import { CodeSnippetContent } from './CodeSnippetContent';

interface CodeSnippetProps {
  content: string;
  username: string;
  createdAt: string;
  stars: number;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({
  content,
  username,
  createdAt,
  stars,
}) => {
  return (
    <div className="bg-[#011627] rounded-lg p-4 mb-6 border border-[#1E2D3D] hover:border-[#43D9AD] transition-colors">
      <CodeSnippetHeader
        username={username}
        createdAt={createdAt}
        stars={stars}
      />
      <CodeSnippetContent content={content} />
    </div>
  );
};

export default CodeSnippet;