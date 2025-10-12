import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
      <MessageSquare className="w-16 h-16 text-cyan-400 mb-6 mx-auto" />
      
      <p className="text-xl md:text-2xl text-gray-300 mb-8 text-center italic">
        "{testimonial.text}"
      </p>

      <div className="flex justify-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      <div className="text-center">
        <div className="font-bold text-xl text-cyan-400">{testimonial.name}</div>
        <div className="text-gray-400">{testimonial.role}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;