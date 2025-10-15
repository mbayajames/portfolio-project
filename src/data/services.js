import { Code2, Smartphone, Server, Database, Zap, Palette } from 'lucide-react';

export const services = [
  {
    id: 1,
    icon: Code2,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern frameworks like React, Vue.js, and Angular. Responsive design, SEO optimization, and performance tuning.',
    shortDesc: 'Custom websites and web applications built with modern frameworks',
    color: 'from-cyan-400 to-blue-600',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Performance Tuning',
      'Cross-browser Compatibility'
    ]
  },
  {
    id: 2,
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android using React Native and Flutter. App Store deployment, push notifications, and offline functionality.',
    shortDesc: 'Native and cross-platform mobile apps for iOS and Android',
    color: 'from-pink-400 to-purple-600',
    features: [
      'iOS & Android Apps',
      'Cross-platform Development',
      'Push Notifications',
      'Offline Support'
    ]
  },
  {
    id: 3,
    icon: Server,
    title: 'Backend Development',
    description: 'Scalable server-side solutions with Node.js, Laravel, and Django. RESTful APIs, microservices architecture, and database optimization.',
    shortDesc: 'Scalable server-side solutions and API development',
    color: 'from-green-400 to-teal-600',
    features: [
      'RESTful APIs',
      'Microservices',
      'Authentication & Authorization',
      'Server Optimization'
    ]
  },
  {
    id: 4,
    icon: Database,
    title: 'Database Design',
    description: 'Efficient database architecture with MySQL, PostgreSQL, MongoDB, and Firebase. Data modeling, query optimization, and migration strategies.',
    shortDesc: 'Efficient database architecture and optimization',
    color: 'from-orange-400 to-red-600',
    features: [
      'Database Modeling',
      'Query Optimization',
      'Data Migration',
      'Backup Strategies'
    ]
  },
  {
    id: 5,
    icon: Zap,
    title: 'API Integration',
    description: 'Seamless third-party service integration including payment gateways, social media APIs, and cloud services. Custom API development and documentation.',
    shortDesc: 'Seamless third-party service integration and REST APIs',
    color: 'from-yellow-400 to-orange-600',
    features: [
      'Third-party APIs',
      'Payment Integration',
      'Social Media APIs',
      'API Documentation'
    ]
  },
  {
    id: 6,
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces with modern design principles. User research, wireframing, prototyping, and usability testing.',
    shortDesc: 'Beautiful, intuitive interfaces with modern design principles',
    color: 'from-purple-400 to-pink-600',
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Usability Testing'
    ]
  }
];