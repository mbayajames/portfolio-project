import React, { useEffect, useRef } from 'react';

const Loader = ({ size = 'md', className = '' }) => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const element = loaderRef.current;
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

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const sizes = {
    sm: 'w-6 h-6 border-2',
    md: 'w-12 h-12 border-4',
    lg: 'w-16 h-16 border-4',
    xl: 'w-24 h-24 border-4',
  };

  return (
    <div className={`flex items-center justify-center ${className}`} ref={loaderRef}>
      <div
        className={`${sizes[size]} border-blue-300 border-t-transparent rounded-full animate-spin animate-pulseGlow`}
      />
    </div>
  );
};

export default Loader;