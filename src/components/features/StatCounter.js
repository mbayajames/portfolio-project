import React, { useState, useEffect } from 'react';

const StatCounter = ({ end, duration = 2000, suffix = '', icon: Icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [end, duration]);

  return (
    <div className="text-center group">
      {Icon && (
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-10 h-10 text-white" />
        </div>
      )}
      <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
        {count}{suffix}
      </div>
    </div>
  );
};

export default StatCounter;