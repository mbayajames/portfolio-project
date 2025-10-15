import React from 'react';
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Folder,
  MessageSquare,
  Mail
} from 'lucide-react';
import '../../styles/Navigation.css';

const iconMap = {
  Home: <Home size={18} />,
  About: <User size={18} />,
  Services: <Briefcase size={18} />,
  Projects: <Folder size={18} />,
  Testimonials: <MessageSquare size={18} />,
  Contact: <Mail size={18} />
};

const Navigation = ({ scrollY, menuOpen, setMenuOpen }) => {
  const navItems = ['Home', 'About', 'Services', 'Projects', 'Testimonials', 'Contact'];

  const handleNavClick = (item) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`navigation ${scrollY > 50 ? 'scrolled' : ''}`}
    >
      <div className="navigation-container">
        <div className="logo">
          James<span className="gradient-text">Mbaya</span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="nav-link"
            >
              {iconMap[item]}
              <span>{item}</span>
              <span className="underline" />
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-toggle"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
