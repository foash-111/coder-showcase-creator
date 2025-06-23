
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PortfolioData } from '../types/portfolio';

// Default portfolio data
const defaultPortfolioData: PortfolioData = {
  personalInfo: {
    name: "John Developer",
    title: "Full Stack Developer",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    linkedinUrl: "https://linkedin.com/in/johndeveloper",
    githubUrl: "https://github.com/johndeveloper",
    bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. I love creating efficient solutions and learning new technologies.",
    profileImageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  skills: [
    { id: '1', name: 'JavaScript', level: 5, category: 'frontend' },
    { id: '2', name: 'TypeScript', level: 4, category: 'frontend' },
    { id: '3', name: 'React', level: 5, category: 'frontend' },
    { id: '4', name: 'Node.js', level: 4, category: 'backend' },
    { id: '5', name: 'Python', level: 3, category: 'backend' },
    { id: '6', name: 'PostgreSQL', level: 4, category: 'backend' },
    { id: '7', name: 'Git', level: 5, category: 'tools' },
    { id: '8', name: 'Docker', level: 3, category: 'tools' }
  ],
  experience: [
    {
      id: '1',
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      duration: '2021 - Present',
      description: 'Lead development of enterprise web applications using React, Node.js, and PostgreSQL. Mentored junior developers and improved deployment processes.'
    },
    {
      id: '2',
      title: 'Frontend Developer',
      company: 'Digital Agency Co.',
      duration: '2019 - 2021',
      description: 'Developed responsive web applications and collaborated with designers to create pixel-perfect user interfaces.'
    }
  ],
  projects: [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: 'https://github.com/johndeveloper/ecommerce',
      liveUrl: 'https://myecommerce.demo.com',
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop'
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
      githubUrl: 'https://github.com/johndeveloper/taskmanager',
      liveUrl: 'https://taskmanager.demo.com',
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop'
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful data visualization.',
      technologies: ['React', 'Chart.js', 'Weather API'],
      githubUrl: 'https://github.com/johndeveloper/weather-dashboard',
      liveUrl: 'https://weather.demo.com',
      imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop'
    }
  ]
};

interface PortfolioContextType {
  portfolioData: PortfolioData;
  updatePortfolioData: (data: PortfolioData) => void;
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(defaultPortfolioData);
  const [isAdmin, setIsAdmin] = useState(false);

  const updatePortfolioData = (data: PortfolioData) => {
    setPortfolioData(data);
    // In a real app, this would save to a database
    localStorage.setItem('portfolioData', JSON.stringify(data));
  };

  // Load data from localStorage on mount
  React.useEffect(() => {
    const savedData = localStorage.getItem('portfolioData');
    if (savedData) {
      try {
        setPortfolioData(JSON.parse(savedData));
      } catch (error) {
        console.error('Error loading portfolio data:', error);
      }
    }
  }, []);

  return (
    <PortfolioContext.Provider value={{
      portfolioData,
      updatePortfolioData,
      isAdmin,
      setIsAdmin
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
