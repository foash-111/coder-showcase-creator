
import React from 'react';
import { PortfolioProvider } from '../contexts/PortfolioContext';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import Footer from '../components/Footer';
import AdminPanel from '../components/AdminPanel';
import { usePortfolio } from '../contexts/PortfolioContext';

const PortfolioContent = () => {
  const { isAdmin } = usePortfolio();

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <Footer />
      {isAdmin && <AdminPanel />}
    </div>
  );
};

const Index = () => {
  return (
    <PortfolioProvider>
      <PortfolioContent />
    </PortfolioProvider>
  );
};

export default Index;
