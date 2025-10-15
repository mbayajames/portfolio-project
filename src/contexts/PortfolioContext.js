import React, { createContext, useContext, useState } from 'react';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { timeline } from '../data/timeline';

const PortfolioContext = createContext();

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within PortfolioProvider');
  }
  return context;
};

export const PortfolioProvider = ({ children }) => {
  const [activeProject, setActiveProject] = useState(null);
  const [projectFilter, setProjectFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const filteredProjects = projectFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === projectFilter);

  const featuredProjects = projects.filter(p => p.featured);

  const value = {
    // Data
    projects,
    services,
    testimonials,
    timeline,
    
    // Filtered data
    filteredProjects,
    featuredProjects,
    
    // State
    activeProject,
    setActiveProject,
    projectFilter,
    setProjectFilter,
    isLoading,
    setIsLoading
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};