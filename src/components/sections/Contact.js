import React, { useState } from 'react';
import { Mail, Github, Linkedin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Demo mode)');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@developer.com', color: 'from-red-400 to-pink-400' },
    { icon: Github, label: 'GitHub', value: 'github.com/developer', color: 'from-gray-400 to-gray-600' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/developer', color: 'from-blue-400 to-blue-600' }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 text-center">
          Have a project in mind? Let's discuss how I can help bring your ideas to life.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleFormChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
              />
              
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleFormChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
              />
              
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleFormChange}
                rows={5}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-
                cyan-400 transition-colors resize-none"
              />
              
              <button
                onClick={handleSubmit}
                className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" /> Send Message
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            
            {contactInfo.map((contact, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className={`p-3 rounded-lg bg-gradient-to-r ${contact.color}`}>
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">{contact.label}</div>
                  <div className="font-semibold">{contact.value}</div>
                </div>
              </div>
            ))}

            <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-xl border border-cyan-500/20 mt-8">
              <Clock className="w-8 h-8 text-cyan-400 mb-3" />
              <h4 className="font-bold mb-2">Availability</h4>
              <p className="text-gray-400">Open for freelance projects and full-time opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;