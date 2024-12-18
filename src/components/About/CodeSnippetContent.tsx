import React from 'react';
import { useCodeHighlight } from '../../hooks/useCodeHighlight';

interface CodeSnippetContentProps {
  content: string;
}

export const CodeSnippetContent: React.FC<CodeSnippetContentProps> = ({ content }) => {
  const highlightCode = useCodeHighlight();

  return (
    <pre className="font-mono text-sm overflow-x-auto">
      {content.split('\n').map((line, i) => (
        <div key={i} className="table-row">
          <span className="table-cell text-[#607B96] pr-4 select-none">
            {i + 1}
          </span>
          <span className="table-cell">
            {highlightCode(line).map((token, j) => (
              <span key={j} className={token.className}>
                {token.text}
              </span>
            ))}
          </span>
        </div>
      ))}
    </pre>
  );
};