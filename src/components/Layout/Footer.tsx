import React from 'react';
import { Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#011627] border-t border-[#1E2D3D] fixed bottom-0 w-full z-40">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="text-[#607B96] flex items-center gap-2">
          <span className="hidden md:block">find me in:</span>
          <a
            href="https://twitter.com/0xdeger"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors p-2 border-r border-[#1E2D3D] md:border-none"
          >
            <Twitter size={18} />
          </a>
        </div>
        <a
          href="https://github.com/degerahmet"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#607B96] hover:text-white transition-colors"
        >
          <span className="hidden md:block">@degerahmet</span>
          <Github size={18} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;