import React from 'react';
import { Code2, Download, ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
      {/* Floating Particles Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: Math.random() * 5 + 's'
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Animated Avatar */}
        <div className="mb-6 inline-block animate-[fadeIn_1s_ease-in]">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 p-1 animate-[spin_3s_linear_infinite]">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <Code2 className="w-16 h-16 text-cyan-400" />
            </div>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-[slideDown_1s_ease-out]">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Full Stack Developer
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-[fadeIn_1.5s_ease-in]">
          Crafting exceptional digital experiences with modern technologies
        </p>
        
        <div className="flex gap-4 justify-center animate-[fadeIn_2s_ease-in] flex-wrap">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:scale-105 transition-transform duration-300 font-semibold inline-flex items-center gap-2"
          >
            View Work <ArrowRight className="w-5 h-5" />
          </a>
          <button className="px-8 py-3 border-2 border-cyan-400 rounded-full hover:bg-cyan-400/10 transition-all duration-300 font-semibold flex items-center gap-2">
            <Download className="w-5 h-5" /> Resume
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white opacity-70" />
      </div>
    </section>
  );
};

export default Hero;