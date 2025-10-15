import React, { useEffect, useRef } from 'react';

const Input = ({
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  required = false,
  className = '',
  icon: Icon,
  ...props
}) => {
  const inputRef = useRef(null);

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

    const element = inputRef.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div className="relative">
      {Icon && (
        <div
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-200 animate-pulseGlow"
        >
          <Icon className="w-5 h-5" />
        </div>
      )}
      <input
        ref={inputRef}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-4 py-3 ${Icon ? 'pl-12' : ''} bg-bg-tertiary border border-blue-300 rounded-lg focus:outline-none focus:border-blue-200 focus:shadow-blue-light transition-all text-gray-100 placeholder-gray-200 hover:bg-blue-300/10 ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;