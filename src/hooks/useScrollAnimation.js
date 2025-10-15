import { useEffect, useState } from 'react';

const useScrollAnimation = (threshold = 0.1) => {
  const [elementRef, setElementRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!elementRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(elementRef);

    return () => {
      if (elementRef) {
        observer.unobserve(elementRef);
      }
    };
  }, [elementRef, threshold]);

  return [setElementRef, isVisible];
};

export default useScrollAnimation;