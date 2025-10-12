import React from 'react';

const TechMarquee = ({ technologies }) => {
  return (
    <div className="py-12 overflow-hidden bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
      <div className="flex animate-[scroll_20s_linear_infinite] whitespace-nowrap">
        {[...technologies, ...technologies].map((tech, idx) => (
          <div key={idx} className="inline-flex items-center gap-3 mx-8 text-2xl">
            <span className="text-4xl">{tech.icon}</span>
            <span className="font-semibold text-gray-300">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;