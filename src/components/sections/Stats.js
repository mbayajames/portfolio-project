import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Users, Award } from 'lucide-react';

const Stats = () => {
  const [stats, setStats] = useState({ projects: 0, clients: 0, experience: 0 });
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const statsElement = statsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll', 'visible');
            if (entry.target === statsElement) {
              // Start counter animation only when section is visible
              const duration = 2000;
              const steps = 60;
              const increment = duration / steps;
              let currentStep = 0;

              timerRef.current = setInterval(() => {
                currentStep++;
                const progress = currentStep / steps;

                setStats({
                  projects: Math.floor(progress * 50),
                  clients: Math.floor(progress * 30),
                  experience: Math.floor(progress * 5),
                });

                if (currentStep >= steps) {
                  clearInterval(timerRef.current);
                  timerRef.current = null;
                }
              }, increment);

              // Add stagger animations to stat cards
              entry.target.querySelectorAll('.stat-card').forEach((card, idx) => {
                card.classList.add('stagger-item', `delay-${100 * (idx + 1)}`);
              });

              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionElement) observer.observe(sectionElement);
    if (statsElement) observer.observe(statsElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
      if (statsElement) observer.unobserve(statsElement);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  const statsData = [
    {
      icon: Briefcase,
      value: stats.projects,
      label: 'Projects Completed',
      suffix: '+',
    },
    { icon: Users, value: stats.clients, label: 'Happy Clients', suffix: '+' },
    {
      icon: Award,
      value: stats.experience,
      label: 'Years Experience',
      suffix: '',
    },
  ];

  return (
    <section
      className="section py-16 px-6 bg-bg-secondary"
      ref={sectionRef}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={statsRef}>
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="stat-card text-center group animate-scaleIn"
            >
              <div
                className="icon-wrapper inline-flex items-center justify-center w-20 h-20 rounded-full gradient-blue mb-4 group-hover:scale-110 transition-transform duration-300"
              >
                <stat.icon className="w-10 h-10 text-gray-100" />
              </div>
              <div
                className="text-5xl font-bold gradient-text-blue mb-2 animate-pulseGlow"
              >
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;