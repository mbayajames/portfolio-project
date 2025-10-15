import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const SocialLinks = ({ className = '' }) => {
  const linksRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll', 'visible', 'animate-fadeIn');
            entry.target.querySelectorAll('.social-link').forEach((link, idx) => {
              link.classList.add('stagger-item', `delay-${100 * (idx + 1)}`);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = linksRef.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/mbayajames',
      label: 'GitHub',
      color: 'hover:text-gray-200',
    },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/james-muthiora-89915a271/',
      label: 'LinkedIn',
      color: 'hover:text-blue-300',
    },
    {
      icon: Twitter,
      url: 'https://twitter.com/yourusername',
      label: 'Twitter',
      color: 'hover:text-blue-200',
    },
    {
      icon: Mail,
      url: 'mailto:muthiorajames39@gmail.com',
      label: 'Email',
      color: 'hover:text-blue-300',
    },
  ];

  return (
    <div ref={linksRef} className={`flex gap-6 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-link text-gray-200 ${social.color} transition-all duration-300 hover:scale-110 animate-pulseGlow`}
          aria-label={social.label}
        >
          <social.icon size={24} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;