
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { usePortfolio } from '../contexts/PortfolioContext';

const ExperienceSection = () => {
  const { portfolioData } = usePortfolio();
  const { experience } = portfolioData;

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Professional Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <Card key={exp.id} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-blue-400 text-lg font-medium">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <span className="text-gray-400 text-sm">{exp.duration}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
