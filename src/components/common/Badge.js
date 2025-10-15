import React, { useEffect, useRef } from 'react';

const Badge = ({ 
  children, 
  variant = 'default',
  className = '',
}) => {
  const badgeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll', 'visible', 'animate-scaleIn');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = badgeRef.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const variants = {
    default: 'chip bg-gray-200 text-blue-300 hover:bg-blue-200 hover:text-black-100',
    primary: 'chip bg-gradient-blue text-gray-100 hover:bg-gradient-blue-dark hover:scale-110',
    success: 'chip bg-blue-100 text-blue-300 border border-blue-300/30 hover:bg-blue-200 hover:text-black-100',
    warning: 'chip bg-blue-200 text-blue-300 border border-blue-300/30 hover:bg-blue-300 hover:text-black-100',
    error: 'chip bg-blue-300 text-gray-100 border border-blue-300/30 hover:bg-blue-200 hover:text-black-100',
  };

  return (
    <span
      ref={badgeRef}
      className={`chip px-3 py-1 rounded-full text-sm font-medium animate-pulseGlow ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;