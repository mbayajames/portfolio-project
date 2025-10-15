import React, { useEffect, useRef } from 'react';
import { Code2, Download, ArrowRight, ChevronDown } from 'lucide-react';
import '../../styles/Hero.css'; // <-- Make sure to create this CSS file

const Hero = () => {
  const sectionRef = useRef(null);
  const avatarRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonsRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const targets = [
      sectionRef.current,
      avatarRef.current,
      headingRef.current,
      subheadingRef.current,
      buttonsRef.current,
      scrollIndicatorRef.current,
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll', 'visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    targets.forEach((el) => el && observer.observe(el));

    return () => {
      targets.forEach((el) => el && observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="home"
      className="hero-section"
      ref={sectionRef}
    >
      {/* Floating Particles Background */}
      <div className="floating-particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        {/* Avatar with Image or Fallback */}
        <div className="avatar-container" ref={avatarRef}>
          <img
            src="/src/assets/4BDA686D-7569-47F5-ABBC-31CEE0921911_1_105_c.jpeg" // <-- Replace with your image path
            alt="My Avatar"
            className="avatar-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="avatar-fallback">
            <Code2 className="w-16 h-16 text-blue-300" />
          </div>
        </div>

        <h1 className="hero-heading" ref={headingRef}>
          Full Stack Developer
        </h1>

        <p className="hero-subheading" ref={subheadingRef}>
          Crafting exceptional digital experiences with modern technologies
        </p>

        <div className="hero-buttons" ref={buttonsRef}>
          <a href="#projects" className="btn btn-primary">
            View Work <ArrowRight className="w-5 h-5" />
          </a>
          <button className="btn btn-outline">
            <Download className="w-5 h-5" /> Resume
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" ref={scrollIndicatorRef}>
        <ChevronDown className="w-8 h-8 text-gray-100 opacity-70" />
      </div>
    </section>
  );
};

export default Hero;
