import React from 'react';

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col md:flex-row items-center mb-12 ${
      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
    }`}>
      <div className={`w-full md:w-5/12 ${
        isEven ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
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
  );
};

export default TimelineItem;