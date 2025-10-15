import React, { useEffect, useRef } from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  icon: Icon,
  ...props
}) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll', 'visible', 'animate-scaleIn');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentButton = buttonRef.current;
    if (currentButton) observer.observe(currentButton);

    return () => {
      if (currentButton) observer.unobserve(currentButton);
    };
  }, []);

  const baseStyles = 'btn font-semibold transition-all duration-300 rounded-full inline-flex items-center justify-center gap-2';

  const variants = {
    primary: 'btn-primary bg-gradient-blue text-gray-100 hover:bg-gradient-blue-dark hover:scale-105',
    secondary: 'btn-outline border-blue-300 hover:bg-blue-300/10 text-gray-100',
    outline: 'btn-outline border-gray-200 hover:border-blue-300 text-gray-100',
    ghost: 'btn-ghost hover:bg-blue-300/10 text-gray-200',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  return (
    <button
      ref={buttonRef}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} animate-pulseGlow ${className}`}
      onClick={onClick}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
};

export default Button;