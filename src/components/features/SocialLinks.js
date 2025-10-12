import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const SocialLinks = ({ className = '' }) => {
  const socialLinks = [
    { 
      icon: Github, 
      url: 'https://github.com/yourusername', 
      label: 'GitHub',
      color: 'hover:text-gray-400'
    },
    { 
      icon: Linkedin, 
      url: 'https://linkedin.com/in/yourusername', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: Twitter, 
      url: 'https://twitter.com/yourusername', 
      label: 'Twitter',
      color: 'hover:text-cyan-400'
    },
    { 
      icon: Mail, 
      url: 'mailto:your@email.com', 
      label: 'Email',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <div className={`flex gap-6 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-400 ${social.color} transition-colors transform hover:scale-110 duration-300`}
          aria-label={social.label}
        >
          <social.icon size={24} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
