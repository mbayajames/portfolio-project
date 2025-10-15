import React, { useEffect, useRef } from 'react';

const Textarea = ({
  name,
  placeholder,
  value,
  onChange,
  rows = 5,
  required = false,
  className = '',
  ...props
}) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll', 'visible', 'animate-fadeInUp');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = textareaRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <textarea
      ref={textareaRef}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      required={required}
      className={`w-full px-4 py-3 bg-bg-tertiary border border-blue-300 rounded-lg focus:outline-none focus:border-blue-200 focus:shadow-blue-light transition-all resize-none text-gray-100 placeholder-gray-200 hover:bg-blue-300/10 animate-pulseGlow ${className}`}
      {...props}
    />
  );
};

export default Textarea;