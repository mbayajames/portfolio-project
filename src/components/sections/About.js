import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const content = contentRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll', 'visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (section) observer.observe(section);
    if (heading) observer.observe(heading);
    if (content) observer.observe(content);

    return () => {
      if (section) observer.unobserve(section);
      if (heading) observer.unobserve(heading);
      if (content) observer.unobserve(content);
    };
  }, []);

  return (
    <section id="about" className="section py-20 px-6" ref={sectionRef}>
      <div className="container max-w-4xl mx-auto">
        <h2
          className="text-5xl font-bold text-center mb-12 gradient-text-blue animate-fadeInUp"
          ref={headingRef}
        >
          About Me
        </h2>

        <div
          className="card glass rounded-2xl p-8 md:p-12 animate-slideInFromBottom delay-200"
          ref={contentRef}
        >
          <p className="text-xl text-gray-200 leading-relaxed mb-6 stagger-item">
            I'm a passionate Full Stack Developer with over 5 years of experience in building 
            scalable web and mobile applications. I specialize in modern JavaScript frameworks, 
            backend technologies, and creating seamless user experiences.
          </p>
          
          <p className="text-xl text-gray-200 leading-relaxed mb-6 stagger-item delay-300">
            My expertise spans across the entire development stack, from crafting responsive 
            frontends with React and Vue.js to building robust backends with Node.js, PHP, and Laravel. 
            I'm committed to writing clean, maintainable code and staying up-to-date with the latest 
            industry trends.
          </p>

          <p className="text-xl text-gray-200 leading-relaxed stagger-item delay-500">
            When I'm not coding, you'll find me contributing to open-source projects, writing 
            technical articles, or exploring new technologies that can solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;