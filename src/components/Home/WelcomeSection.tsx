import React from 'react';

interface WelcomeSectionProps {
  name: string;
  role: string;
  githubUrl: string;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ name, role, githubUrl }) => {
  return (
    <div className="max-w-xl">
      <p className="text-[#607B96] mb-2">Hi all. I am</p>
      <h1 className="text-white text-5xl font-bold mb-4">{name}</h1>
      <h2 className="text-[#4D5BCE] text-xl mb-6">&gt; {role}</h2>
      <div className="text-[#607B96]">
        <p>// complete the game to continue</p>
        <p>// you can also see it on my Github page</p>
        <p className="text-[#E99287]">
          const{' '}
          <span className="text-[#4D5BCE]">githubLink</span> ={' '}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E99287] hover:underline"
          >
            "{githubUrl}"
          </a>
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;