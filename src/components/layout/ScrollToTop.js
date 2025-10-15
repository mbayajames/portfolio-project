import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 btn btn-primary bg-gradient-blue rounded-full shadow-blue-dark hover:scale-110 transition-all duration-300 z-50 animate-${
        isVisible ? 'fadeIn' : 'fadeOut'
      } animate-pulseGlow`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 text-gray-100" />
    </button>
  );
};

export default ScrollToTop;