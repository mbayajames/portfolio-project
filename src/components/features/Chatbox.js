import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, User } from 'lucide-react';
import '../../styles/Chatbot.css'; // Adjust path if needed (or rename to Chatbox.css if preferred)

const Chatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Hi! 👋 I\'m your virtual assistant. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const messageIdRef = useRef(2); // Start from 2 since initial message is id:1

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // Quick reply buttons
  const quickReplies = [
    'Tell me about your services',
    'View your projects',
    'Contact information',
    'Your skills'
  ];

  // Bot responses
  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase(); // Fixed typo: toesLowerCase -> toLowerCase

    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return 'Hello! How can I assist you today? Feel free to ask me about my services, projects, or skills.';
    } else if (message.includes('service') || message.includes('what do you do')) { // Fixed typo: fdo -> do
      return 'I offer Web Development, Mobile Development, Backend Development, Database Design, API Integration, and UI/UX Design services. Would you like to know more about any specific service?';
    } else if (message.includes('project') || message.includes('portfolio')) {
      return 'I have worked on various projects including E-Commerce Platforms, Real-time Chat Applications, Mobile Apps, and more. You can check out my Projects section for detailed information!';
    } else if (message.includes('skill') || message.includes('technology')) {
      return 'I specialize in JavaScript, Python, PHP, Laravel, React, Vue.js, Node.js, MySQL, Firebase, and many more technologies. I\'m always learning new skills!';
    } else if (message.includes('contact') || message.includes('reach')) {
      return 'You can contact me via the Contact section on this website, or email me at example@domain.com. I\'m looking forward to hearing from you!';
    } else {
      return 'I\'m sorry, I didn\'t quite understand that. You can ask about services, projects, skills, or contact info. Or try one of the quick replies!';
    }
  };

  // Handle sending message
  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMsg = {
      id: messageIdRef.current++,
      type: 'user',
      text: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = {
        id: messageIdRef.current++,
        type: 'bot',
        text: getBotResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2s. Fixed syntax: removed invalid 'budg =>'
  };

  // Handle quick reply click
  const handleQuickReply = (reply) => {
    setInputMessage(reply);
    handleSendMessage(); // Auto-send the quick reply
  };

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="chatbot-overlay">
      <div className="chatbot-container">
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header-title">
            <Bot className="chatbot-icon" />
            <span>Virtual Assistant</span>
          </div>
          <button onClick={onClose} className="chatbot-close-btn">
            <X size={24} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="chatbot-messages">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`message-wrapper ${msg.type === 'bot' ? 'bot-message' : 'user-message'}`}
            >
              <div className="message-bubble">
                {msg.type === 'bot' && <Bot className="message-icon bot-icon" size={20} />}
                {msg.type === 'user' && <User className="message-icon user-icon" size={20} />}
                <p>{msg.text}</p>
              </div>
              <span className="message-time">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          ))}
          {isTyping && (
            <div className="message-wrapper bot-message">
              <div className="message-bubble typing-bubble">
                <Bot className="message-icon bot-icon" size={20} />
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        {messages.length === 1 && (
          <div className="quick-replies">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                onClick={() => handleQuickReply(reply)}
                className="quick-reply-btn"
              >
                {reply}
              </button>
            ))}
          </div>
        )}

        {/* Input Area */}
        <div className="chatbot-input-area">
          <input
            ref={inputRef}
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="chatbot-input"
          />
          <button onClick={handleSendMessage} className="send-btn">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;