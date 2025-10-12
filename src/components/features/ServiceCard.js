import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <service.icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
      <p className="text-gray-400">{service.desc}</p>
    </div>
  );
};

export default ServiceCard;