
import React from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';

const SkillsSection = () => {
  const { portfolioData } = usePortfolio();
  const { skills } = portfolioData;

  const skillCategories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
    other: skills.filter(skill => skill.category === 'other')
  };

  const renderSkillBar = (skill: any) => (
    <div key={skill.id} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300">{skill.name}</span>
        <span className="text-blue-400">{skill.level}/5</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(skill.level / 5) * 100}%` }}
        />
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            categorySkills.length > 0 && (
              <div key={category} className="bg-gray-800 rounded-lg p-6 shadow-xl">
                <h3 className="text-xl font-semibold text-blue-400 mb-6 capitalize">
                  {category}
                </h3>
                {categorySkills.map(renderSkillBar)}
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
