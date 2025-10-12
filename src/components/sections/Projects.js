import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      desc: 'Full-stack marketplace with Laravel backend and React frontend',
      tech: ['Laravel', 'React', 'MySQL', 'Tailwind'],
      gradient: 'from-purple-500 to-pink-500',
      image: '🛒',
      demo: '#',
      github: '#'
    },
    {
      title: 'Real-time Chat App',
      desc: 'WebSocket-based messaging system with Firebase integration',
      tech: ['Node.js', 'React', 'Firebase', 'API Design'],
      gradient: 'from-blue-500 to-cyan-500',
      image: '💬',
      demo: '#',
      github: '#'
    },
    {
      title: 'Mobile Fitness Tracker',
      desc: 'Cross-platform mobile app with Python ML backend',
      tech: ['React Native', 'Python', 'Firebase', 'Mobile'],
      gradient: 'from-green-500 to-teal-500',
      image: '💪',
      demo: '#',
      github: '#'
    },
    {
      title: 'CMS Dashboard',
      desc: 'Admin panel with Vue.js and PHP backend',
      tech: ['Vue.js', 'PHP', 'MySQL', 'Bootstrap'],
      gradient: 'from-orange-500 to-red-500',
      image: '📊',
      demo: '#',
      github: '#'
    },
    {
      title: 'Payment Gateway Integration',
      desc: 'Secure payment processing system with multiple providers',
      tech: ['Node.js', 'Laravel', 'API Design', 'MySQL'],
      gradient: 'from-yellow-500 to-orange-500',
      image: '💳',
      demo: '#',
      github: '#'
    },
    {
      title: 'AI Content Generator',
      desc: 'Machine learning powered content creation platform',
      tech: ['Python', 'React', 'Firebase', 'API Design'],
      gradient: 'from-indigo-500 to-purple-500',
      image: '🤖',
      demo: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;