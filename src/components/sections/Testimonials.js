import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Star } from 'lucide-react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef(null);
  const testimonialRef = useRef(null);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStartup Inc',
      text: 'Outstanding work! The platform exceeded our expectations and was delivered ahead of schedule.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, Digital Solutions',
      text: 'Exceptional technical skills and great communication. Highly recommend for any project.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, E-Commerce Ventures',
      text: 'Transformed our vision into reality. The attention to detail was impressive.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const currentTestimonial = testimonialRef.current;

    if (!currentSection || !currentTestimonial) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll', 'visible');
            if (entry.target === currentTestimonial) {
              entry.target.querySelectorAll('.testimonial-item').forEach((item, idx) => {
                item.classList.add('stagger-item', `delay-${100 * (idx + 1)}`);
              });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(currentSection);
    observer.observe(currentTestimonial);

    return () => {
      observer.unobserve(currentSection);
      observer.unobserve(currentTestimonial);
    };
  }, []);

  return (
    <section
      id="testimonials"
      className="section py-20 px-6 bg-bg-secondary"
      ref={sectionRef}
    >
      <div className="container max-w-5xl mx-auto">
        <h2
          className="text-5xl font-bold text-center mb-16 gradient-text-blue animate-fadeInUp"
        >
          Client Testimonials
        </h2>

        <div className="relative" ref={testimonialRef}>
          <div className="card glass rounded-2xl p-8 md:p-12 shadow-blue-dark animate-slideInFromBottom">
            <MessageSquare
              className="w-16 h-16 text-blue-300 mb-6 mx-auto testimonial-item"
            />
            
            <p
              className="text-xl md:text-2xl text-gray-200 mb-8 text-center italic testimonial-item delay-100"
              key={testimonials[activeTestimonial].text}
            >
              "{testimonials[activeTestimonial].text}"
            </p>

            <div className="flex justify-center mb-4 testimonial-item delay-200">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-blue-300 fill-blue-300 animate-pulseScale"
                />
              ))}
            </div>

            <div className="text-center testimonial-item delay-300">
              <div className="font-bold text-xl text-blue-300">
                {testimonials[activeTestimonial].name}
              </div>
              <div className="text-gray-200">
                {testimonials[activeTestimonial].role}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8 testimonial-item delay-400">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === idx
                    ? 'bg-blue-300 w-8'
                    : 'bg-gray-200 bg-opacity-40'
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