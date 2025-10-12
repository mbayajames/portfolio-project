import React from 'react';

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const navItems = ['Home', 'About', 'Services', 'Projects', 'Testimonials', 'Contact'];

  if (!menuOpen) return null;

  return (
    <div className="fixed top-[72px] left-0 w-full bg-slate-900/95 backdrop-blur-lg px-6 py-4 space-y-4 z-40 md:hidden">
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className="block text-lg hover:text-cyan-400 transition-colors py-2"
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default MobileMenu;
