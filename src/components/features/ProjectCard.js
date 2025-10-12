import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
      <div className={`h-48 bg-gradient-to-r ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
        <div className="text-8xl opacity-50 group-hover:scale-110 transition-transform duration-300">
          {project.image}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.desc}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span key={i} className="px-3 py-1 bg-slate-700 rounded-full text-sm text-cyan-400">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a 
            href={project.demo}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4" /> Live Demo
          </a>
          <a 
            href={project.github}
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <Github className="w-4 h-4" /> Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;