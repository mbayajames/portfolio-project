import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  const indicatorRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll', 'visible', 'animate-fadeIn');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentElement = indicatorRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  return (
    <div
      ref={indicatorRef}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
      <ChevronDown className="w-8 h-8 text-gray-100 opacity-70 animate-pulseGlow" />
    </div>
  );
};

export default ScrollIndicator;