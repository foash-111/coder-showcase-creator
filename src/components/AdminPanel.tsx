
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { usePortfolio } from '../contexts/PortfolioContext';
import { PortfolioData, Project, Experience, Skill } from '../types/portfolio';
import { toast } from '@/hooks/use-toast';

const AdminPanel = () => {
  const { portfolioData, updatePortfolioData } = usePortfolio();
  const [editData, setEditData] = useState<PortfolioData>(portfolioData);

  const handlePersonalInfoChange = (field: string, value: string) => {
    setEditData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const handleSkillChange = (skillId: string, field: string, value: any) => {
    setEditData(prev => ({
      ...prev,
      skills: prev.skills.map(skill =>
        skill.id === skillId ? { ...skill, [field]: value } : skill
      )
    }));
  };

  const handleProjectChange = (projectId: string, field: string, value: any) => {
    setEditData(prev => ({
      ...prev,
      projects: prev.projects.map(project =>
        project.id === projectId ? { ...project, [field]: value } : project
      )
    }));
  };

  const handleExperienceChange = (expId: string, field: string, value: string) => {
    setEditData(prev => ({
      ...prev,
      experience: prev.experience.map(exp =>
        exp.id === expId ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const addNewProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: 'New Project',
      description: 'Project description',
      technologies: [],
      githubUrl: '',
      liveUrl: '',
      imageUrl: ''
    };
    setEditData(prev => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }));
  };

  const addNewExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      title: 'New Position',
      company: 'Company Name',
      duration: '2023 - Present',
      description: 'Job description'
    };
    setEditData(prev => ({
      ...prev,
      experience: [...prev.experience, newExperience]
    }));
  };

  const saveChanges = () => {
    updatePortfolioData(editData);
    toast({
      title: "Changes saved successfully!",
      description: "Your portfolio has been updated.",
    });
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="container mx-auto px-6 py-8">
        <Card className="bg-gray-800 border-gray-700 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Admin Panel</CardTitle>
            <CardDescription className="text-gray-400">
              Edit your portfolio content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-gray-700">
                <TabsTrigger value="personal" className="data-[state=active]:bg-blue-600">Personal</TabsTrigger>
                <TabsTrigger value="skills" className="data-[state=active]:bg-blue-600">Skills</TabsTrigger>
                <TabsTrigger value="projects" className="data-[state=active]:bg-blue-600">Projects</TabsTrigger>
                <TabsTrigger value="experience" className="data-[state=active]:bg-blue-600">Experience</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-4 mt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Name</Label>
                    <Input
                      id="name"
                      value={editData.personalInfo.name}
                      onChange={(e) => handlePersonalInfoChange('name', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="title" className="text-white">Title</Label>
                    <Input
                      id="title"
                      value={editData.personalInfo.title}
                      onChange={(e) => handlePersonalInfoChange('title', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      value={editData.personalInfo.email}
                      onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white">Phone</Label>
                    <Input
                      id="phone"
                      value={editData.personalInfo.phone}
                      onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="github" className="text-white">GitHub URL</Label>
                    <Input
                      id="github"
                      value={editData.personalInfo.githubUrl}
                      onChange={(e) => handlePersonalInfoChange('githubUrl', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="linkedin" className="text-white">LinkedIn URL</Label>
                    <Input
                      id="linkedin"
                      value={editData.personalInfo.linkedinUrl}
                      onChange={(e) => handlePersonalInfoChange('linkedinUrl', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="bio" className="text-white">Bio</Label>
                  <Textarea
                    id="bio"
                    value={editData.personalInfo.bio}
                    onChange={(e) => handlePersonalInfoChange('bio', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="profileImage" className="text-white">Profile Image URL</Label>
                  <Input
                    id="profileImage"
                    value={editData.personalInfo.profileImageUrl}
                    onChange={(e) => handlePersonalInfoChange('profileImageUrl', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </TabsContent>

              <TabsContent value="projects" className="space-y-4 mt-6">
                <Button onClick={addNewProject} className="bg-blue-600 hover:bg-blue-700">
                  Add New Project
                </Button>
                {editData.projects.map((project, index) => (
                  <Card key={project.id} className="bg-gray-700 border-gray-600">
                    <CardHeader>
                      <CardTitle className="text-white text-lg">Project {index + 1}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Input
                        placeholder="Project Title"
                        value={project.title}
                        onChange={(e) => handleProjectChange(project.id, 'title', e.target.value)}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                      <Textarea
                        placeholder="Project Description"
                        value={project.description}
                        onChange={(e) => handleProjectChange(project.id, 'description', e.target.value)}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                      <Input
                        placeholder="Technologies (comma separated)"
                        value={project.technologies.join(', ')}
                        onChange={(e) => handleProjectChange(project.id, 'technologies', e.target.value.split(', '))}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                      <Input
                        placeholder="GitHub URL"
                        value={project.githubUrl || ''}
                        onChange={(e) => handleProjectChange(project.id, 'githubUrl', e.target.value)}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                      <Input
                        placeholder="Live URL"
                        value={project.liveUrl || ''}
                        onChange={(e) => handleProjectChange(project.id, 'liveUrl', e.target.value)}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="experience" className="space-y-4 mt-6">
                <Button onClick={addNewExperience} className="bg-blue-600 hover:bg-blue-700">
                  Add New Experience
                </Button>
                {editData.experience.map((exp, index) => (
                  <Card key={exp.id} className="bg-gray-700 border-gray-600">
                    <CardHeader>
                      <CardTitle className="text-white text-lg">Experience {index + 1}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Input
                        placeholder="Job Title"
                        value={exp.title}
                        onChange={(e) => handleExperienceChange(exp.id, 'title', e.target.value)}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                      <Input
                        placeholder="Company"
                        value={exp.company}
                        onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                      <Input
                        placeholder="Duration"
                        value={exp.duration}
                        onChange={(e) => handleExperienceChange(exp.id, 'duration', e.target.value)}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                      <Textarea
                        placeholder="Job Description"
                        value={exp.description}
                        onChange={(e) => handleExperienceChange(exp.id, 'description', e.target.value)}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="skills" className="space-y-4 mt-6">
                <div className="grid gap-4">
                  {editData.skills.map((skill) => (
                    <Card key={skill.id} className="bg-gray-700 border-gray-600">
                      <CardContent className="pt-6">
                        <div className="grid grid-cols-3 gap-4">
                          <Input
                            placeholder="Skill Name"
                            value={skill.name}
                            onChange={(e) => handleSkillChange(skill.id, 'name', e.target.value)}
                            className="bg-gray-600 border-gray-500 text-white"
                          />
                          <Input
                            type="number"
                            min="1"
                            max="5"
                            placeholder="Level (1-5)"
                            value={skill.level}
                            onChange={(e) => handleSkillChange(skill.id, 'level', parseInt(e.target.value))}
                            className="bg-gray-600 border-gray-500 text-white"
                          />
                          <select
                            value={skill.category}
                            onChange={(e) => handleSkillChange(skill.id, 'category', e.target.value)}
                            className="bg-gray-600 border-gray-500 text-white rounded-md px-3 py-2"
                          >
                            <option value="frontend">Frontend</option>
                            <option value="backend">Backend</option>
                            <option value="tools">Tools</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-end gap-4 mt-8">
              <Button onClick={saveChanges} className="bg-green-600 hover:bg-green-700">
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPanel;
