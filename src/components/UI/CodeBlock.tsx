import React from 'react';

interface CodeBlockProps {
  content: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ content, language = 'typescript' }) => {
  return (
    <div className="bg-[#011627] rounded-lg p-4 font-mono text-sm">
      <pre className="text-[#607B96]">
        <code>{content}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;