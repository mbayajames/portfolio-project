import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  gradient = false,
  ...props 
}) => {
  const baseStyles = 'bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6';
  const hoverStyles = hover ? 'hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20' : '';
  const gradientStyles = gradient ? 'bg-gradient-to-br from-slate-800/50 to-purple-900/30' : '';

  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;