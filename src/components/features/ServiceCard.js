import React, { useEffect, useRef } from 'react';

const ServiceCard = ({ service }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll', 'visible', 'animate-slideInFromBottom');
            entry.target.querySelectorAll('.card-content').forEach((item, idx) => {
              item.classList.add('stagger-item', `delay-${100 * (idx + 1)}`);
            });
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
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="group card glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-blue-dark animate-pulseGlow"
    >
      <div
        className={`icon-wrapper p-4 rounded-xl ${service.gradient || 'bg-gradient-blue'} mb-4 group-hover:scale-110 transition-transform duration-300 card-content`}
      >
        <service.icon className="w-8 h-8 text-gray-100" />
      </div>
      <h3 className="text-2xl font-bold mb-3 text-gray-100 card-content">{service.title}</h3>
      <p className="text-gray-200 card-content">{service.desc}</p>
    </div>
  );
};

export default ServiceCard;