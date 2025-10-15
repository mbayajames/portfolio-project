import React, { useEffect, useState } from 'react';
import '../../styles/MobileMenu.css';

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const [shouldRender, setShouldRender] = useState(menuOpen);
  const [animateOut, setAnimateOut] = useState(false);

  const navItems = ['Home', 'About', 'Services', 'Projects', 'Testimonials', 'Contact'];

  useEffect(() => {
    if (menuOpen) {
      setShouldRender(true);
      setAnimateOut(false);
    } else {
      setAnimateOut(true);
      const timer = setTimeout(() => setShouldRender(false), 300); // match CSS duration
      return () => clearTimeout(timer);
    }
  }, [menuOpen]);

  const handleNavClick = (item) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  if (!shouldRender) return null;

  return (
    <div className={`mobile-menu ${animateOut ? 'animate-out' : ''}`}>
      {navItems.map((item) => (
        <button
          key={item}
          onClick={() => handleNavClick(item)}
          className="mobile-menu-button"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default MobileMenu;
