import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '',
  icon: Icon,
  ...props 
}) => {
  const baseStyles = 'font-semibold transition-all duration-300 rounded-full inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 text-white',
    secondary: 'border-2 border-cyan-400 hover:bg-cyan-400/10 text-white',
    outline: 'border-2 border-slate-700 hover:border-cyan-400 text-white',
    ghost: 'hover:bg-slate-800/50 text-gray-300'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
};

export default Button;