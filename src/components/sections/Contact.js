import React, { useEffect, useRef, useState } from 'react';
import { Mail, Github, Linkedin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Demo mode)');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@developer.com', color: 'gradient-blue' },
    { icon: Github, label: 'GitHub', value: 'github.com/developer', color: 'gradient-blue-dark' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/developer', color: 'gradient-blue-light' },
  ];

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const headingElement = headingRef.current;
    const formElement = formRef.current;
    const contactInfoElement = contactInfoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll', 'visible');
            if (entry.target === contactInfoElement) {
              entry.target.querySelectorAll('.contact-item').forEach((item, idx) => {
                item.classList.add('stagger-item', `delay-${100 * (idx + 1)}`);
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
    if (formElement) observer.observe(formElement);
    if (contactInfoElement) observer.observe(contactInfoElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
      if (headingElement) observer.unobserve(headingElement);
      if (formElement) observer.unobserve(formElement);
      if (contactInfoElement) observer.unobserve(contactInfoElement);
    };
  }, []);

  return (
    <section id="contact" className="section py-20 px-6" ref={sectionRef}>
      <div className="container max-w-5xl mx-auto">
        <h2
          className="text-5xl font-bold text-center mb-8 gradient-text-blue animate-fadeInUp"
          ref={headingRef}
        >
          Let's Work Together
        </h2>
        
        <p className="text-xl text-gray-200 mb-12 text-center animate-fadeIn delay-200">
          Have a project in mind? Let's discuss how I can help bring your ideas to life.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slideInFromBottom delay-300" ref={formRef}>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleFormChange}
                className="w-full px-4 py-3 bg-bg-tertiary border border-blue-300 rounded-lg focus:outline-none focus:border-blue-300 focus:shadow-blue-light transition-all stagger-item"
              />
              
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleFormChange}
                className="w-full px-4 py-3 bg-bg-tertiary border border-blue-300 rounded-lg focus:outline-none focus:border-blue-300 focus:shadow-blue-light transition-all stagger-item delay-100"
              />
              
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleFormChange}
                rows={5}
                className="w-full px-4 py-3 bg-bg-tertiary border border-blue-300 rounded-lg focus:outline-none focus:border-blue-300 focus:shadow-blue-light transition-all stagger-item delay-200 resize-none"
              />
              
              <button
                onClick={handleSubmit}
                className="btn btn-primary w-full px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 stagger-item delay-300"
              >
                <Send className="w-5 h-5" /> Send Message
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-slideInRight delay-400" ref={contactInfoRef}>
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            
            {contactInfo.map((contact, idx) => (
              <div
                key={idx}
                className="contact-item flex items-center gap-4 p-4 card glass rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className={`p-3 rounded-lg ${contact.color}`}>
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-200">{contact.label}</div>
                  <div className="font-semibold text-blue-300">{contact.value}</div>
                </div>
              </div>
            ))}

            <div className="p-6 card glass rounded-xl border border-blue-300/20 mt-8">
              <Clock className="w-8 h-8 text-blue-300 mb-3" />
              <h4 className="font-bold mb-2">Availability</h4>
              <p className="text-gray-200">Open for freelance projects and full-time opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;