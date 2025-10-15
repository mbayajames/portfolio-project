import React, { useEffect, useRef, useState } from 'react';

const ParallaxSection = ({ 
  children, 
  speed = 0.5,
  className = '' 
}) => {
  const [offsetY, setOffsetY] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const elementTop = elementRef.current.offsetTop;
        const scrolled = window.pageYOffset;
        setOffsetY((scrolled - elementTop) * speed);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform: `translateY(${offsetY}px)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;