import React, { useState, useEffect } from 'react';
import { Briefcase, Users, Award } from 'lucide-react';

const Stats = () => {
  const [stats, setStats] = useState({ projects: 0, clients: 0, experience: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setStats({
        projects: Math.floor(progress * 50),
        clients: Math.floor(progress * 30),
        experience: Math.floor(progress * 5)
      });

      if (currentStep >= steps) clearInterval(timer);
    }, increment);

    return () => clearInterval(timer);
  }, []);

  const statsData = [
    { icon: Briefcase, value: stats.projects, label: 'Projects Completed', suffix: '+' },
    { icon: Users, value: stats.clients, label: 'Happy Clients', suffix: '+' },
    { icon: Award, value: stats.experience, label: 'Years Experience', suffix: '' }
  ];

  return (
    <section className="py-16 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsData.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;