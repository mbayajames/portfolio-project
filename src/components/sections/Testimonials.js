import React, { useState, useEffect } from 'react';
import { MessageSquare, Star } from 'lucide-react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStartup Inc',
      text: 'Outstanding work! The platform exceeded our expectations and was delivered ahead of schedule.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, Digital Solutions',
      text: 'Exceptional technical skills and great communication. Highly recommend for any project.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, E-Commerce Ventures',
      text: 'Transformed our vision into reality. The attention to detail was impressive.',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Client Testimonials
          </span>
        </h2>

        <div className="relative">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
            <MessageSquare className="w-16 h-16 text-cyan-400 mb-6 mx-auto" />
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 text-center italic">
              "{testimonials[activeTestimonial].text}"
            </p>

            <div className="flex justify-center mb-4">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <div className="text-center">
              <div className="font-bold text-xl text-cyan-400">
                {testimonials[activeTestimonial].name}
              </div>
              <div className="text-gray-400">
                {testimonials[activeTestimonial].role}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === idx ? 'bg-cyan-400 w-8' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;