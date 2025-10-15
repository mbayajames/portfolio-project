import React, { useEffect, useRef } from 'react';

const Card = ({
  children,
  className = '',
  hover = true,
  gradient = false,
  ...props
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll', 'visible', 'animate-slideInFromBottom');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = cardRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, []);

  const baseStyles = 'card glass rounded-2xl p-6';
  const hoverStyles = hover ? 'hover:scale-105 transition-all duration-300 hover:shadow-blue-dark' : '';
  const gradientStyles = gradient ? 'bg-gradient-blue' : '';

  return (
    <div
      ref={cardRef}
      className={`${baseStyles} ${hoverStyles} ${gradientStyles} animate-pulseGlow ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;