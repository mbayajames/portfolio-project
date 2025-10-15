import React, { useState, useEffect } from 'react';
import Navigation from './components/layout/Navigation';
import MobileMenu from './components/layout/MobileMenu';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Timeline from './components/sections/Timeline';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Chatbot from './components/features/Chatbox'; // Ensure this path matches your file name (Chatbot.js or Chatbox.js?)
import ThemeToggle from './components/common/ThemeToggle';
import { MessageCircle } from 'lucide-react'; // Added for the toggle button

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark'); // 'light', 'dark', 'system'
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const systemTheme = prefersDark ? 'dark' : 'light';
      setTheme('system');
      applyTheme(systemTheme);
    }
    setLoading(false);
  }, []);

  // Apply theme whenever theme state changes
  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listen to system theme changes if using 'system'
  useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      applyTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Apply theme to document
  const applyTheme = (themeValue) => {
    let appliedTheme = themeValue;

    if (themeValue === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      appliedTheme = prefersDark ? 'dark' : 'light';
    }

    document.documentElement.setAttribute('data-theme', appliedTheme);
  };

  // Handle theme change
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  // Simulate loading (optional, remove if not needed)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Example 1s loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="loading-screen">Loading...</div>; // Replace with your loader component
  }

  return (
    <div className="app-container">
      <Navigation scrollY={scrollY} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      <main className="main-content">
        <Hero />
        <Stats />
        <About />
        <Timeline />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
      <ScrollToTop />
      <ThemeToggle theme={theme} onThemeChange={handleThemeChange} />
      <Chatbot isOpen={chatOpen} onClose={() => setChatOpen(false)} /> {/* Updated prop names to match component */}
      
      {/* Floating Chatbot Toggle Button */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="chatbot-toggle-btn"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
            zIndex: 49,
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <MessageCircle size={32} />
        </button>
      )}
    </div>
  );
}

export default App;