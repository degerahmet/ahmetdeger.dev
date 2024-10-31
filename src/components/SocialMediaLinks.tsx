// SocialMediaLinks.tsx
import React from 'react';

interface SocialMediaLinksProps {
  links: {
    github?: string;
    linkedIn?: string;
    X?: string;
    stackOverflow?: string;
  };
}

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({ links }) => (
  <div className="flex gap-4">
    {links.github && (
      <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub</a>
    )}
    {links.linkedIn && (
      <a href={links.linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn</a>
    )}
    {links.X && (
      <a href={links.X} target="_blank" rel="noopener noreferrer" className="text-blue-500">X</a>
    )}
    {links.stackOverflow && (
      <a href={links.stackOverflow} target="_blank" rel="noopener noreferrer" className="text-blue-500">Stack Overflow</a>
    )}
  </div>
);

export default SocialMediaLinks;
