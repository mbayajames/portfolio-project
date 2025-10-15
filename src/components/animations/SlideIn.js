import React, { useEffect, useRef, useState } from 'react';

const SlideIn = ({ 
  children, 
  direction = 'left',
  delay = 0,
  duration = 800,
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current; // ✅ Store ref value
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target); // Optional: stop observing once visible
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentElement);

    return () => {
      // ✅ Use stored ref in cleanup
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay]); // ✅ Only depends on delay

  const transforms = {
    left: { initial: '-100%', final: '0%' },
    right: { initial: '100%', final: '0%' },
    up: { initial: '0%', final: '0%' },
    down: { initial: '0%', final: '0%' },
  };

  const translateY = {
    up: { initial: '100%', final: '0%' },
    down: { initial: '-100%', final: '0%' },
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? `translateX(${transforms[direction].final}) translateY(${translateY[direction]?.final || '0%'})`
          : `translateX(${transforms[direction].initial}) translateY(${translateY[direction]?.initial || '0%'})`,
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
};

export default SlideIn;
