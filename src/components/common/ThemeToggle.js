import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import '../../styles/ThemeToggle.css'; // Optional: Add styles below or inline

const ThemeToggle = ({ theme, onThemeChange }) => {
  const handleChange = (newTheme) => {
    onThemeChange(newTheme);
  };

  return (
    <div className="theme-toggle-container">
      <button
        onClick={() => handleChange('light')}
        className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
        title="Light Mode"
      >
        <Sun size={20} />
      </button>
      <button
        onClick={() => handleChange('dark')}
        className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
        title="Dark Mode"
      >
        <Moon size={20} />
      </button>
      <button
        onClick={() => handleChange('system')}
        className={`theme-btn ${theme === 'system' ? 'active' : ''}`}
        title="System Preference"
      >
        <Monitor size={20} />
      </button>
    </div>
  );
};

export default ThemeToggle;