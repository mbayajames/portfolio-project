import React, { useState, useEffect, useRef } from 'react';

const StatCounter = ({ end, duration = 2000, suffix = '', icon: Icon }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add('animate-on-scroll', 'visible');
            entry.target.querySelectorAll('.counter-content').forEach((item, idx) => {
              item.classList.add('stagger-item', `delay-${100 * (idx + 1)}`);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRef = counterRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const steps = 60;
    const increment = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setCount(Math.floor(progress * end));

      if (currentStep >= steps) {
        clearInterval(timer);
        setCount(end);
      }
    }, increment);

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return (
    <div ref={counterRef} className="text-center group animate-fadeInUp">
      {Icon && (
        <div
          className="icon-wrapper inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-blue mb-4 group-hover:scale-110 transition-all duration-300 counter-content animate-pulseGlow"
        >
          <Icon className="w-10 h-10 text-gray-100" />
        </div>
      )}
      <div
        className="text-5xl font-bold gradient-text-blue mb-2 counter-content"
      >
        {count}
        {suffix}
      </div>
    </div>
  );
};

export default StatCounter;