import React, { useEffect, useState, useRef } from 'react';
import { X } from 'lucide-react';

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef(null);

  // Handle entrance and exit animations
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      // Delay closing to allow exit animation
      const timer = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = 'unset';
      }, 300); // Match exit animation duration
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Intersection Observer for additional entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && isOpen) {
            entry.target.classList.add('animate-on-scroll', 'visible', 'animate-scaleIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentModal = modalRef.current;
    if (currentModal) observer.observe(currentModal);

    return () => {
      if (currentModal) observer.unobserve(currentModal);
    };
  }, [isOpen]);

  if (!isVisible) return null;

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-bg-overlay backdrop-blur-sm animate-${
          isOpen ? 'fadeIn' : 'fadeOut'
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className={`relative card glass shadow-blue-dark ${sizes[size]} w-full max-h-[90vh] overflow-y-auto animate-${
          isOpen ? 'slideInFromBottom' : 'slideOutToBottom'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-blue-300">
          <h3 className="text-2xl font-bold text-gray-100 animate-fadeInUp">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-200 hover:text-blue-300 hover:scale-110 transition-all duration-300 animate-pulseGlow"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 animate-fadeIn delay-100">{children}</div>
      </div>
    </div>
  );
};

export default Modal;