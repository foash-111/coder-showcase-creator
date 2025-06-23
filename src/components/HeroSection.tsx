
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import { usePortfolio } from '../contexts/PortfolioContext';

const HeroSection = () => {
  const { portfolioData } = usePortfolio();
  const { personalInfo } = portfolioData;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <img
            src={personalInfo.profileImageUrl}
            alt={personalInfo.name}
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-blue-400 shadow-2xl"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            {personalInfo.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <a href={`mailto:${personalInfo.email}`}>
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
