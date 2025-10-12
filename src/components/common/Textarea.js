import React from 'react';

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
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      required={required}
      className={`w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors resize-none text-white placeholder-gray-400 ${className}`}
      {...props}
    />
  );
};

export default Textarea;