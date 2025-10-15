import React, { useEffect, useRef } from 'react';

const Timeline = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const timelineRef = useRef(null);

  const timeline = [
    { year: '2024', title: 'Senior Full Stack Developer', company: 'Tech Innovators Ltd' },
    { year: '2022', title: 'Full Stack Developer', company: 'Digital Solutions Co' },
    { year: '2020', title: 'Frontend Developer', company: 'Creative Web Agency' },
    { year: '2019', title: 'Junior Developer', company: 'StartUp Labs' },
  ];

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const headingElement = headingRef.current;
    const timelineElement = timelineRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll', 'visible');
            if (entry.target === timelineElement) {
              entry.target.querySelectorAll('.timeline-item').forEach((item, idx) => {
                item.classList.add(
                  'stagger-item',
                  `delay-${100 * (idx + 1)}`,
                  idx % 2 === 0 ? 'animate-slideInLeft' : 'animate-slideInRight'
                );
              });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionElement) observer.observe(sectionElement);
    if (headingElement) observer.observe(headingElement);
    if (timelineElement) observer.observe(timelineElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
      if (headingElement) observer.unobserve(headingElement);
      if (timelineElement) observer.unobserve(timelineElement);
    };
  }, []);

  return (
    <section
      id="timeline"
      className="section py-20 px-6 bg-bg-secondary"
      ref={sectionRef}
    >
      <div className="container max-w-7xl mx-auto">
        <h2
          className="text-5xl font-bold text-center mb-16 gradient-text-blue animate-fadeInUp"
          ref={headingRef}
        >
          My Journey
        </h2>

        <div className="relative max-w-4xl mx-auto" ref={timelineRef}>
          {/* Timeline Line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-blue hidden md:block animate-scaleIn"
          ></div>

          {timeline.map((item, idx) => (
            <div
              key={idx}
              className={`timeline-item flex flex-col md:flex-row items-center mb-12 ${
                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div
                className={`w-full md:w-5/12 ${
                  idx % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                }`}
              >
                <div className="card glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-blue-dark">
                  <div className="text-blue-300 font-bold text-xl mb-2">{item.year}</div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-100">{item.title}</h3>
                  <p className="text-gray-200">{item.company}</p>
                </div>
              </div>

              <div className="w-2/12 hidden md:flex justify-center my-4 md:my-0">
                <div className="w-6 h-6 rounded-full gradient-blue ring-4 ring-black-100 z-10 animate-pulseScale"></div>
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