import React from 'react';

interface WelcomeSectionProps {
  name: string;
  role: string;
  gh_url: string;
  gh_url_view: string;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ name, role, gh_url, gh_url_view }) => {
  return (
    <div className="max-w-xl">
      <p className="text-[#607B96] mb-2">Hi all. I am</p>
      <h1 className="text-white text-5xl font-bold mb-4">{name}</h1>
      <h2 className="text-[#4D5BCE] text-xl mb-6">&gt; {role}</h2>
      <div className="text-[#607B96]">
        <p>// complete the game to continue</p>
        <p className="text-[#569cd6]">
          let{' '}
          <span className="text-[#9CDCFE]">ghlink;</span>
          <br />
          <span className="text-[#9CDCFE]">ghlink</span> ={' '}
          <a
            href={gh_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#CE9178] hover:underline"
          >
            "{gh_url_view}"
          </a>
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;