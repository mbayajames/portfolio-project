export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack marketplace with Laravel backend and React frontend. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard.',
    shortDesc: 'Full-stack marketplace with Laravel backend and React frontend',
    image: '🛒',
    tech: ['Laravel', 'React', 'MySQL', 'Tailwind', 'Stripe', 'Redux'],
    gradient: 'from-purple-500 to-pink-500',
    demoUrl: 'https://demo-ecommerce.com',
    githubUrl: 'https://github.com/username/ecommerce',
    featured: true,
    category: 'web',
    date: '2024-01'
  },
  {
    id: 2,
    title: 'Real-time Chat Application',
    description: 'WebSocket-based messaging system with Firebase integration. Supports private messaging, group chats, file sharing, typing indicators, and read receipts.',
    shortDesc: 'WebSocket-based messaging system with Firebase integration',
    image: '💬',
    tech: ['Node.js', 'React', 'Firebase', 'Socket.io', 'API Design'],
    gradient: 'from-blue-500 to-cyan-500',
    demoUrl: 'https://demo-chat.com',
    githubUrl: 'https://github.com/username/chat-app',
    featured: true,
    category: 'web',
    date: '2024-02'
  },
  {
    id: 3,
    title: 'Mobile Fitness Tracker',
    description: 'Cross-platform mobile app with Python ML backend. Tracks workouts, calories, provides personalized recommendations using machine learning algorithms.',
    shortDesc: 'Cross-platform mobile app with Python ML backend',
    image: '💪',
    tech: ['React Native', 'Python', 'Firebase', 'TensorFlow', 'Mobile'],
    gradient: 'from-green-500 to-teal-500',
    demoUrl: 'https://demo-fitness.com',
    githubUrl: 'https://github.com/username/fitness-tracker',
    featured: true,
    category: 'mobile',
    date: '2023-11'
  },
  {
    id: 4,
    title: 'CMS Dashboard',
    description: 'Content Management System admin panel with Vue.js and PHP backend. Manage posts, users, media library, and site settings with intuitive interface.',
    shortDesc: 'Admin panel with Vue.js and PHP backend',
    image: '📊',
    tech: ['Vue.js', 'PHP', 'MySQL', 'Bootstrap', 'REST API'],
    gradient: 'from-orange-500 to-red-500',
    demoUrl: 'https://demo-cms.com',
    githubUrl: 'https://github.com/username/cms-dashboard',
    featured: false,
    category: 'web',
    date: '2023-09'
  },
  {
    id: 5,
    title: 'Payment Gateway Integration',
    description: 'Secure payment processing system supporting multiple providers including Stripe, PayPal, and M-Pesa. Features fraud detection and transaction management.',
    shortDesc: 'Secure payment processing system with multiple providers',
    image: '💳',
    tech: ['Node.js', 'Laravel', 'API Design', 'MySQL', 'Stripe', 'PayPal'],
    gradient: 'from-yellow-500 to-orange-500',
    demoUrl: 'https://demo-payment.com',
    githubUrl: 'https://github.com/username/payment-gateway',
    featured: false,
    category: 'backend',
    date: '2023-10'
  },
  {
    id: 6,
    title: 'AI Content Generator',
    description: 'Machine learning powered content creation platform. Generates blog posts, social media content, and marketing copy using advanced NLP models.',
    shortDesc: 'Machine learning powered content creation platform',
    image: '🤖',
    tech: ['Python', 'React', 'Firebase', 'API Design', 'OpenAI', 'NLP'],
    gradient: 'from-indigo-500 to-purple-500',
    demoUrl: 'https://demo-ai-content.com',
    githubUrl: 'https://github.com/username/ai-content-generator',
    featured: true,
    category: 'ai',
    date: '2024-03'
  }
];

export const projectCategories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Apps' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'backend', name: 'Backend' },
  { id: 'ai', name: 'AI/ML' }
];