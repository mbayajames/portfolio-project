import React, { useEffect, useRef } from 'react';

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;
  const itemRef = useRef(null);

  useEffect(() => {
    const currentRef = itemRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll', 'visible');
            entry.target
              .querySelectorAll('.timeline-content')
              .forEach((content, idx) => {
                content.classList.add(
                  'stagger-item',
                  `delay-${100 * (idx + 1)}`,
                  isEven ? 'animate-slideInFromLeft' : 'animate-slideInFromRight'
                );
              });
            entry.target.querySelectorAll('.timeline-dot').forEach((dot) => {
              dot.classList.add('stagger-item', 'delay-300', 'animate-scaleIn');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [isEven]);

  return (
    <div
      ref={itemRef}
      className={`flex flex-col md:flex-row items-center mb-12 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div
        className={`w-full md:w-5/12 ${
          isEven ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
        }`}
      >
        <div
          className="card glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-blue-dark animate-pulseGlow"
        >
          <div className="text-blue-300 font-bold text-xl mb-2 timeline-content">
            {item.year}
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-100 timeline-content">
            {item.title}
          </h3>
          <p className="text-gray-200 timeline-content">{item.company}</p>
        </div>
      </div>

      <div className="w-2/12 hidden md:flex justify-center my-4 md:my-0">
        <div className="w-6 h-6 rounded-full bg-gradient-blue ring-4 ring-gray-200 z-10 timeline-dot"></div>
      </div>

      <div className="w-full md:w-5/12"></div>
    </div>
  );
};

export default TimelineItem;