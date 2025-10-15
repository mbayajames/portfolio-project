import { useState, useEffect } from 'react';

const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const steps = 60;
    const increment = duration / steps;
    const stepValue = (end - start) / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newValue = start + Math.floor(stepValue * currentStep);
      
      setCount(newValue);

      if (currentStep >= steps) {
        clearInterval(timer);
        setCount(end);
        setIsComplete(true);
      }
    }, increment);

    return () => clearInterval(timer);
  }, [end, duration, start]);

  return { count, isComplete };
};

export default useCounter;