import React, { useState } from 'react';
import FileExplorer from '../components/Work/FileExplorer';
import CodeSnippetCard from '../components/About/CodeSnippetCard';
import { workExperience } from '../data/work-experience';

const Work = () => {
  const [selectedFile, setSelectedFile] = useState('ginoa');

  const getContent = () => {
    return workExperience[selectedFile as keyof typeof workExperience] || '';
  };

  return (
    <div className="flex h-[calc(100vh-116px)]">
      <FileExplorer selectedFile={selectedFile} onSelect={setSelectedFile} />
      <div className="flex-1 p-8 bg-[#011627] overflow-y-auto">
        <CodeSnippetCard
          content={getContent()}
          username="degerahmet"
          createdAt="2 months ago"
          stars={5}
        />
      </div>
    </div>
  );
};

export default Work;