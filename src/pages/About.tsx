import React, { useState } from 'react';
import FileTree from '../components/About/FileTree';
import ContentDisplay from '../components/About/ContentDisplay';
import CodeSnippetCard from '../components/About/CodeSnippetCard';

const About = () => {
  const [selectedFile, setSelectedFile] = useState('bio');

  return (
    <div className="flex h-[calc(100vh-116px)]">
      {/* Left Panel - File Tree */}
      <FileTree selectedFile={selectedFile} onSelect={setSelectedFile} />
      
      {/* Center and Right Panels */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 divide-x divide-[#1E2D3D]">
        {/* Content Display */}
        <ContentDisplay selectedFile={selectedFile} />
        
        {/* Code Snippets */}
        <div className="p-8 bg-[#011627] overflow-y-auto">
          <h2 className="text-[#607B96] mb-6">// Code snippet showcase:</h2>
          <CodeSnippetCard
            username="username"
            createdAt="5 months ago"
            stars={3}
            content={`function initializeModelChunk<T>(
  chunk: ResolvedModelChunk
): T {
  const value = parseModel(
    chunk._response,
    chunk._value
  );
  const initializedChunk: InitializedChunk<T> = (
    chunk: any
  );
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}`}
          />
          <CodeSnippetCard
            username="username"
            createdAt="9 months ago"
            stars={0}
            content={`export function parseModelTuple(
  response: Response,
  value: {[key: string]: JSONValue} | 
    $ReadOnlyArray<JSONValue>,
): any {
  const tuple: [mixed, mixed, mixed, mixed] = (
    value: any
  );
  return tuple;
}`}
          />
        </div>
      </div>
    </div>
  );
};

export default About;