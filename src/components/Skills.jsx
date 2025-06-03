// src/components/Skills.js
import React, { useState, useEffect } from 'react';
import { Code, Palette, Database, Globe, Zap, Star, TrendingUp, Award, Target, Layers, Monitor, Server } from 'lucide-react';

const Skills = () => {
  const [animateCards, setAnimateCards] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateCards(true);
        }
      },
      { threshold: 0.2 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: <Layers className="w-4 h-4" /> },
    { id: 'frontend', name: 'Frontend', icon: <Monitor className="w-4 h-4" /> },
    { id: 'backend', name: 'Backend', icon: <Server className="w-4 h-4" /> },
    { id: 'design', name: 'Design', icon: <Palette className="w-4 h-4" /> },
    { id: 'tools', name: 'Tools', icon: <Zap className="w-4 h-4" /> }
  ];

  const skills = [
    // Frontend Skills
    {
      name: 'React',
      level: 95,
      category: 'frontend',
      icon: '⚛️',
      description: 'Building dynamic and interactive user interfaces',
      projects: 25,
      experience: '3+ years'
    },
    {
      name: 'TypeScript',
      level: 90,
      category: 'frontend',
      icon: '🔷',
      description: 'Type-safe JavaScript development',
      projects: 20,
      experience: '2+ years'
    },
    {
      name: 'Next.js',
      level: 88,
      category: 'frontend',
      icon: '▲',
      description: 'Full-stack React framework',
      projects: 15,
      experience: '2+ years'
    },
    {
      name: 'TailwindCSS',
      level: 92,
      category: 'frontend',
      icon: '🎨',
      description: 'Utility-first CSS framework',
      projects: 30,
      experience: '3+ years'
    },
    {
      name: 'JavaScript',
      level: 93,
      category: 'frontend',
      icon: '🟨',
      description: 'Modern ES6+ JavaScript development',
      projects: 35,
      experience: '3+ years'
    },

    // Backend Skills
    {
      name: 'Node.js',
      level: 80,
      category: 'backend',
      icon: '🟢',
      description: 'Server-side JavaScript runtime',
      projects: 22,
      experience: '3+ years'
    },
    {
      name: 'Python',
      level: 85,
      category: 'backend',
      icon: '🐍',
      description: 'Backend development and automation',
      projects: 18,
      experience: '2+ years'
    },
    {
      name: 'MongoDB',
      level: 78,
      category: 'backend',
      icon: '🍃',
      description: 'NoSQL document database',
      projects: 16,
      experience: '2+ years'
    },
    {
      name: 'Express.js',
      level: 78,
      category: 'backend',
      icon: '🚀',
      description: 'Fast Node.js web framework',
      projects: 25,
      experience: '3+ years'
    },
    // Design Skills
    {
      name: 'Figma',
      level: 85,
      category: 'design',
      icon: '🎨',
      description: 'UI/UX design and prototyping',
      projects: 20,
      experience: '2+ years'
    },
    {
      name: 'Photoshop',
      level: 80,
      category: 'design',
      icon: '🖼️',
      description: 'Image editing and manipulation',
      projects: 15,
      experience: '2+ years'
    },

    // Tools & Technologies
    {
      name: 'Git',
      level: 94,
      category: 'tools',
      icon: '📝',
      description: 'Version control and collaboration',
      projects: 40,
      experience: '3+ years'
    },
    {
      name: 'Docker',
      level: 50,
      category: 'tools',
      icon: '🐳',
      description: 'Containerization and deployment',
      projects: 15,
      experience: '2+ years'
    },
    {
      name: 'AWS',
      level: 81,
      category: 'tools',
      icon: '☁️',
      description: 'Cloud computing services',
      projects: 12,
      experience: '1+ years'
    },
    
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getSkillLevelColor = (level) => {
    if (level >= 90) return 'from-green-500 to-emerald-600';
    if (level >= 80) return 'from-blue-500 to-cyan-600';
    if (level >= 70) return 'from-purple-500 to-violet-600';
    return 'from-yellow-500 to-orange-600';
  };

  const getSkillLevelText = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  const skillStats = {
    totalSkills: skills.length,
    averageLevel: Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length),
    totalProjects: skills.reduce((acc, skill) => acc + skill.projects, 0),
    categories: skillCategories.length - 1
  };

  return (
    <section id="skills" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-purple-400 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
              Technical Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed max-w-3xl mx-auto">
            Mastering cutting-edge technologies to build exceptional digital experiences
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm ${
                activeCategory === category.id
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30 shadow-lg shadow-purple-500/20'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-purple-300 border border-white/10 hover:border-purple-400/30'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:bg-white/10 cursor-pointer ${
                animateCards ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{skill.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className={`text-sm font-medium bg-gradient-to-r ${getSkillLevelColor(skill.level)} bg-clip-text text-transparent`}>
                      {getSkillLevelText(skill.level)}
                    </span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-400">{skill.level}%</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${getSkillLevelColor(skill.level)} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: animateCards ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100 + 500}ms`
                    }}
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {skill.description}
              </p>

              {/* Stats */}
              <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <div className="text-xs text-gray-400">
                  <span className="text-purple-300 font-medium">{skill.projects}</span> projects
                </div>
                <div className="text-xs text-gray-400">
                  <span className="text-purple-300 font-medium">{skill.experience}</span> experience
                </div>
              </div>

              {/* Hover Effect Overlay */}
              {hoveredSkill === skill.name && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-2xl pointer-events-none transition-opacity duration-300" />
              )}
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Always Learning
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to continuous learning and staying current with industry trends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Staying Current</h4>
              <p className="text-gray-400">Regularly updating skills with the latest technologies and best practices</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Community</h4>
              <p className="text-gray-400">Active in developer communities and contributing to open-source projects</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Innovation</h4>
              <p className="text-gray-400">Exploring emerging technologies and implementing creative solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;