import React, { useEffect, useRef } from 'react';
import { Star, MessageSquare } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll', 'visible', 'animate-slideInFromBottom');
            entry.target.querySelectorAll('.card-content').forEach((item, idx) => {
              item.classList.add('stagger-item', `delay-${100 * (idx + 1)}`);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = cardRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="card glass rounded-2xl p-8 md:p-12 shadow-blue-dark animate-pulseGlow"
    >
      <MessageSquare
        className="w-16 h-16 text-blue-300 mb-6 mx-auto card-content"
      />
      
      <p
        className="text-xl md:text-2xl text-gray-200 mb-8 text-center italic card-content"
      >
        "{testimonial.text}"
      </p>

      <div className="flex justify-center mb-4 card-content">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className="w-6 h-6 text-blue-300 fill-blue-300 hover:scale-110 transition-all duration-300"
          />
        ))}
      </div>

      <div className="text-center card-content">
        <div className="font-bold text-xl text-blue-300">{testimonial.name}</div>
        <div className="text-gray-200">{testimonial.role}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;