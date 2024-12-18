import React from 'react';
import { Youtube, Instagram, Twitch, Twitter, Github, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    name: 'YouTube Channel',
    icon: Youtube,
    url: 'https://www.youtube.com/@0xdeger',
  },
  {
    name: 'Instagram account',
    icon: Instagram,
    url: 'https://instagram.com/0xdeger',
  },
  {
    name: 'Twitch profile',
    icon: Twitch,
    url: 'https://twitch.tv/0xdeger',
  },
  {
    name: 'Twitter profile',
    icon: Twitter,
    url: 'https://twitter.com/0xdeger',
  },
  {
    name: 'GitHub profile',
    icon: Github,
    url: 'https://github.com/degerahmet',
  },
  {
    name: 'LinkedIn profile',
    icon: Linkedin,
    url: 'https://linkedin.com/in/ahmetdeger',
  },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="space-y-2">
      <h3 className="text-[#607B96] mb-4">// find-me-also-in:</h3>
      {socialLinks.map(({ name, icon: Icon, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#607B96] hover:text-white transition-colors p-2"
        >
          <Icon size={16} />
          <span>{name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;