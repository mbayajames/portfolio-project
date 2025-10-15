import React, { useEffect, useRef } from 'react';
import { Code2, Smartphone, Server, Database, Zap, Palette } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const servicesRef = useRef(null);

  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      desc: 'Custom websites and web applications built with modern frameworks',
      gradient: 'gradient-blue',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      desc: 'Native and cross-platform mobile apps for iOS and Android',
      gradient: 'gradient-blue-dark',
    },
    {
      icon: Server,
      title: 'Backend Development',
      desc: 'Scalable server-side solutions and API development',
      gradient: 'gradient-blue-light',
    },
    {
      icon: Database,
      title: 'Database Design',
      desc: 'Efficient database architecture and optimization',
      gradient: 'gradient-blue',
    },
    {
      icon: Zap,
      title: 'API Integration',
      desc: 'Seamless third-party service integration and REST APIs',
      gradient: 'gradient-blue-dark',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      desc: 'Beautiful, intuitive interfaces with modern design principles',
      gradient: 'gradient-blue-light',
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const services = servicesRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll', 'visible');
            if (entry.target === services) {
              entry.target.querySelectorAll('.service-card').forEach((card, idx) => {
                card.classList.add('stagger-item', `delay-${100 * (idx + 1)}`);
              });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (section) observer.observe(section);
    if (heading) observer.observe(heading);
    if (services) observer.observe(services);

    return () => {
      if (section) observer.unobserve(section);
      if (heading) observer.unobserve(heading);
      if (services) observer.unobserve(services);
    };
  }, []);

  return (
    <section
      id="services"
      className="section py-20 px-6 bg-bg-secondary"
      ref={sectionRef}
    >
      <div className="container max-w-7xl mx-auto">
        <h2
          className="text-5xl font-bold text-center mb-16 gradient-text-blue animate-fadeInUp"
          ref={headingRef}
        >
          What I Do
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={servicesRef}
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              className="service-card group card glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-blue-dark"
            >
              <div
                className={`icon-wrapper p-4 rounded-xl ${service.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-gray-100" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-100">{service.title}</h3>
              <p className="text-gray-200">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;