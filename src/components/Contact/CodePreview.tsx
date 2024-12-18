import React from 'react';

interface CodePreviewProps {
  formData: {
    name: string;
    email: string;
    message: string;
  };
}

const CodePreview: React.FC<CodePreviewProps> = ({ formData }) => {
  const code = `const button = document.querySelector('#sendBtn');

const message = {
  name: "${formData.name || 'Jonathan Davis'}",
  email: "${formData.email || 'jonathan-davis@gmail.com'}",
  message: "${formData.message || 'Hey! Just checked your website and it looks awesome! Also, I checked your article on Medium. Learned a few nice tips. Thanks!'}",
  date: "Thu 21 Apr"
}

button.addEventListener('click', () => {
  form.send(message);
})`;

  return (
    <pre className="font-mono text-sm whitespace-pre-wrap">
      <code>
        {code.split('\n').map((line, i) => (
          <div key={i} className="table-row">
            <span className="table-cell text-[#607B96] pr-4">{i + 1}</span>
            <span className="table-cell">
              {line.split(/(const|let|var|function|addEventListener|querySelector|message|button|\(|\)|{|}|"|'|,|;)/).map((part, j) => {
                if (part === 'const' || part === 'let' || part === 'var' || part === 'function') {
                  return <span key={j} className="text-[#C792EA]">{part}</span>;
                } else if (part === 'addEventListener' || part === 'querySelector') {
                  return <span key={j} className="text-[#82AAFF]">{part}</span>;
                } else if (part === '"' || part === "'" || part === ',' || part === ';') {
                  return <span key={j} className="text-[#89DDFF]">{part}</span>;
                } else if (part === '{' || part === '}' || part === '(' || part === ')') {
                  return <span key={j} className="text-[#89DDFF]">{part}</span>;
                } else if (part === 'message' || part === 'button') {
                  return <span key={j} className="text-[#4D5BCE]">{part}</span>;
                } else if (part.startsWith('//')) {
                  return <span key={j} className="text-[#607B96]">{part}</span>;
                } else {
                  return <span key={j} className="text-[#E99287]">{part}</span>;
                }
              })}
            </span>
          </div>
        ))}
      </code>
    </pre>
  );
};

export default CodePreview;