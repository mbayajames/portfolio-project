import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            I'm a passionate Full Stack Developer with over 5 years of experience in building 
            scalable web and mobile applications. I specialize in modern JavaScript frameworks, 
            backend technologies, and creating seamless user experiences.
          </p>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            My expertise spans across the entire development stack, from crafting responsive 
            frontends with React and Vue.js to building robust backends with Node.js, PHP, and Laravel. 
            I'm committed to writing clean, maintainable code and staying up-to-date with the latest 
            industry trends.
          </p>

          <p className="text-xl text-gray-300 leading-relaxed">
            When I'm not coding, you'll find me contributing to open-source projects, writing 
            technical articles, or exploring new technologies that can solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;