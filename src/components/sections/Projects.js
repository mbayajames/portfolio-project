import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const projectsRef = useRef(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      desc: 'Full-stack marketplace with Laravel backend and React frontend',
      tech: ['Laravel', 'React', 'MySQL', 'Tailwind'],
      gradient: 'gradient-blue',
      image: '🛒',
      demo: '#',
      github: '#',
    },
    {
      title: 'Real-time Chat App',
      desc: 'WebSocket-based messaging system with Firebase integration',
      tech: ['Node.js', 'React', 'Firebase', 'API Design'],
      gradient: 'gradient-blue-dark',
      image: '💬',
      demo: '#',
      github: '#',
    },
    {
      title: 'Mobile Fitness Tracker',
      desc: 'Cross-platform mobile app with Python ML backend',
      tech: ['React Native', 'Python', 'Firebase', 'Mobile'],
      gradient: 'gradient-blue-light',
      image: '💪',
      demo: '#',
      github: '#',
    },
    {
      title: 'CMS Dashboard',
      desc: 'Admin panel with Vue.js and PHP backend',
      tech: ['Vue.js', 'PHP', 'MySQL', 'Bootstrap'],
      gradient: 'gradient-blue',
      image: '📊',
      demo: '#',
      github: '#',
    },
    {
      title: 'Payment Gateway Integration',
      desc: 'Secure payment processing system with multiple providers',
      tech: ['Node.js', 'Laravel', 'API Design', 'MySQL'],
      gradient: 'gradient-blue-dark',
      image: '💳',
      demo: '#',
      github: '#',
    },
    {
      title: 'AI Content Generator',
      desc: 'Machine learning powered content creation platform',
      tech: ['Python', 'React', 'Firebase', 'API Design'],
      gradient: 'gradient-blue-light',
      image: '🤖',
      demo: '#',
      github: '#',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll', 'visible');
            if (entry.target === projectsRef.current) {
              entry.target.querySelectorAll('.project-card').forEach((card, idx) => {
                card.classList.add('stagger-item', `delay-${100 * (idx + 1)}`);
              });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const sectionElement = sectionRef.current;
    const headingElement = headingRef.current;
    const projectsElement = projectsRef.current;

    if (sectionElement) observer.observe(sectionElement);
    if (headingElement) observer.observe(headingElement);
    if (projectsElement) observer.observe(projectsElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
      if (headingElement) observer.unobserve(headingElement);
      if (projectsElement) observer.unobserve(projectsElement);
    };
  }, []);

  return (
    <section id="projects" className="section py-20 px-6" ref={sectionRef}>
      <div className="container max-w-7xl mx-auto">
        <h2
          className="text-5xl font-bold text-center mb-16 gradient-text-blue animate-fadeInUp"
          ref={headingRef}
        >
          Featured Projects
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={projectsRef}
        >
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="project-card group card glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-blue-dark"
            >
              <div
                className={`h-48 ${project.gradient} relative overflow-hidden flex items-center justify-center`}
              >
                <div className="absolute inset-0 bg-black-100/20 group-hover:bg-black-100/10 transition-all duration-300" />
                <div className="text-8xl opacity-50 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-100">{project.title}</h3>
                <p className="text-gray-200 mb-4">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="chip px-3 py-1 rounded-full text-sm text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;