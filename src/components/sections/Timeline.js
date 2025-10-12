import React from 'react';

const Timeline = () => {
  const timeline = [
    { year: '2024', title: 'Senior Full Stack Developer', company: 'Tech Innovators Ltd' },
    { year: '2022', title: 'Full Stack Developer', company: 'Digital Solutions Co' },
    { year: '2020', title: 'Frontend Developer', company: 'Creative Web Agency' },
    { year: '2019', title: 'Junior Developer', company: 'StartUp Labs' }
  ];

  return (
    <section className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            My Journey
          </span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-purple-600 hidden md:block"></div>
          
          {timeline.map((item, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center mb-12 ${
              idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}>
              <div className={`w-full md:w-5/12 ${
                idx % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
              }`}>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="text-cyan-400 font-bold text-xl mb-2">{item.year}</div>
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.company}</p>
                </div>
              </div>
              
              <div className="w-2/12 hidden md:flex justify-center my-4 md:my-0">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 ring-4 ring-slate-900 z-10"></div>
              </div>
              
              <div className="w-full md:w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;