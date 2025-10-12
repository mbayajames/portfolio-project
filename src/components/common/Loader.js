import React from 'react';

const Loader = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-6 h-6 border-2',
    md: 'w-12 h-12 border-4',
    lg: 'w-16 h-16 border-4',
    xl: 'w-24 h-24 border-4'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizes[size]} border-cyan-500 border-t-transparent rounded-full animate-spin`} />
    </div>
  );
};

export default Loader;