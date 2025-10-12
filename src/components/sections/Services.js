import React from 'react';
import { Code2, Smartphone, Server, Database, Zap, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      desc: 'Custom websites and web applications built with modern frameworks',
      color: 'from-cyan-400 to-blue-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      desc: 'Native and cross-platform mobile apps for iOS and Android',
      color: 'from-pink-400 to-purple-600'
    },
    {
      icon: Server,
      title: 'Backend Development',
      desc: 'Scalable server-side solutions and API development',
      color: 'from-green-400 to-teal-600'
    },
    {
      icon: Database,
      title: 'Database Design',
      desc: 'Efficient database architecture and optimization',
      color: 'from-orange-400 to-red-600'
    },
    {
      icon: Zap,
      title: 'API Integration',
      desc: 'Seamless third-party service integration and REST APIs',
      color: 'from-yellow-400 to-orange-600'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      desc: 'Beautiful, intuitive interfaces with modern design principles',
      color: 'from-purple-400 to-pink-600'
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            What I Do
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;