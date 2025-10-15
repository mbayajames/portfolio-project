import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll', 'visible', 'animate-slideInFromBottom');
            entry.target.querySelectorAll('.card-content').forEach((item, idx) => {
              item.classList.add('stagger-item', `delay-${100 * (idx + 1)}`);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = cardRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative card glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-blue-dark animate-pulseGlow"
    >
      <div
        className={`h-48 ${project.gradient} relative overflow-hidden flex items-center justify-center card-content`}
      >
        <div className="absolute inset-0 bg-black-100/20 group-hover:bg-black-100/10 transition-all duration-300" />
        <div className="text-8xl opacity-50 group-hover:scale-110 transition-transform duration-300">
          {project.image}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-100 card-content">{project.title}</h3>
        <p className="text-gray-200 mb-4 card-content">{project.desc}</p>

        <div className="flex flex-wrap gap-2 mb-4 card-content">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="chip px-3 py-1 rounded-full text-sm text-blue-300 hover:bg-blue-200 hover:text-black-100 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 card-content">
          <a
            href={project.demo}
            className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-all duration-300 hover:scale-105"
          >
            <ExternalLink className="w-4 h-4" /> Live Demo
          </a>
          <a
            href={project.github}
            className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-all duration-300 hover:scale-105"
          >
            <Github className="w-4 h-4" /> Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;