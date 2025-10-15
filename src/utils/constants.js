export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const ROUTES = {
  HOME: '/',
  ABOUT: '#about',
  SERVICES: '#services',
  PROJECTS: '#projects',
  TESTIMONIALS: '#testimonials',
  CONTACT: '#contact'
};

export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/yourusername',
  LINKEDIN: 'https://linkedin.com/in/yourusername',
  TWITTER: 'https://twitter.com/yourusername',
  EMAIL: 'mailto:your@email.com'
};

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1280
};

export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500
};

export const COLORS = {
  primary: {
    light: '#06b6d4',
    DEFAULT: '#0891b2',
    dark: '#0e7490'
  },
  secondary: {
    light: '#a855f7',
    DEFAULT: '#9333ea',
    dark: '#7e22ce'
  },
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6'
};

export const CONTACT_INFO = {
  email: 'your@email.com',
  phone: '+254 700 000 000',
  location: 'Nairobi, Kenya',
  availability: 'Open for freelance and full-time opportunities'
};

export const SKILLS = {
  FRONTEND: ['JavaScript', 'React', 'Vue.js', 'Tailwind CSS', 'Bootstrap'],
  BACKEND: ['Node.js', 'PHP', 'Laravel', 'Python', 'API Design'],
  DATABASE: ['MySQL', 'Firebase', 'MongoDB', 'PostgreSQL'],
  TOOLS: ['Git', 'Docker', 'AWS', 'XAMPP', 'PHPMyAdmin']
};

export const PROJECT_CATEGORIES = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Applications' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'backend', name: 'Backend Systems' },
  { id: 'ai', name: 'AI/ML Projects' }
];

export const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error'
};