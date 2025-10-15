import React, { useEffect, useRef } from 'react';

const TechMarquee = ({ technologies }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const element = marqueeRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll', 'visible', 'animate-fadeIn');
            entry.target.querySelectorAll('.tech-item').forEach((item, idx) => {
              item.classList.add('stagger-item', `delay-${100 * (idx + 1)}`);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <div className="py-12 overflow-hidden bg-bg-secondary">
      <div
        ref={marqueeRef}
        className="flex animate-[scroll_20s_linear_infinite] whitespace-nowrap"
      >
        {[...technologies, ...technologies].map((tech, idx) => (
          <div
            key={idx}
            className="tech-item inline-flex items-center gap-3 mx-8 text-2xl hover:scale-105 transition-all duration-300 animate-pulseGlow"
          >
            <span className="text-4xl">{tech.icon}</span>
            <span className="font-semibold text-gray-200">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;