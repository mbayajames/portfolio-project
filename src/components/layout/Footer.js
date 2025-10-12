import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: Mail, url: 'mailto:your@email.com', label: 'Email' }
  ];

  return (
    <footer className="py-8 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-center md:text-left">
            © {currentYear} Developer Portfolio. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
          
          {/* Footer Links */}
          <div className="flex gap-6">
            <button className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Privacy
            </button>
            <button className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Terms
            </button>
            <button className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
