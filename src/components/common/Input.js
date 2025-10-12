import React from 'react';

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
  return (
    <div className="relative">
      {Icon && (
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          <Icon className="w-5 h-5" />
        </div>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-4 py-3 ${Icon ? 'pl-12' : ''} bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-gray-400 ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;