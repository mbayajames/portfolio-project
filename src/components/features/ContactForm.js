import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Button from '../common/Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll', 'visible');
            entry.target.querySelectorAll('.form-field').forEach((field, idx) => {
              field.classList.add('stagger-item', `delay-${100 * (idx + 1)}`);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const element = formRef.current;
    if (element) observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Add your email service integration here
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4 animate-fadeInUp" ref={formRef}>
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="form-field"
      />

      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="form-field"
      />

      <Textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        rows={5}
        required
        className="form-field"
      />

      {error && (
        <div
          className="text-blue-300 text-sm animate-slideInFromBottom"
          key={error}
        >
          {error}
        </div>
      )}

      {success && (
        <div
          className="text-gray-100 text-sm animate-slideInFromBottom"
          key="success"
        >
          Message sent successfully!
        </div>
      )}

      <Button
        onClick={handleSubmit}
        disabled={loading}
        icon={Send}
        className="w-full form-field"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
    </div>
  );
};

export default ContactForm;