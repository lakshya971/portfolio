// src/components/Skills.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Code, Palette, Database, Globe, Zap, Star, TrendingUp, Award, Target, Layers, Monitor, Server, BookOpen, Users, Lightbulb, Rocket, Brain, Trophy, Timer, CheckCircle, ArrowUp } from 'lucide-react';

const Skills = () => {
  const [animateCards, setAnimateCards] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInSection, setIsMouseInSection] = useState(false);
  const [skillAnimations, setSkillAnimations] = useState({});
  const [particles, setParticles] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleStats, setVisibleStats] = useState([]);
  const [torchPosition, setTorchPosition] = useState({ x: 0, y: 0 });
  const [activeSkillDetails, setActiveSkillDetails] = useState(null);
  const [skillProgress, setSkillProgress] = useState({});
  const sectionRef = useRef(null);
  const skillsGridRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  // Smooth hover handlers with debouncing
  const handleSkillHover = useCallback((skill) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    setHoveredSkill(skill.name);
    // Remove the modal trigger on hover - it's too aggressive
  }, []);

  const handleSkillLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredSkill(null);
      setActiveSkillDetails(null);
    }, 150); // Small delay to prevent flickering
  }, []);
  const handleSkillClick = useCallback((skill) => {
    setActiveSkillDetails(skill);
  }, []);

  // Enhanced particle system
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 100 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.6 + 0.1,
        life: Math.random() * 100 + 50,
        maxLife: Math.random() * 100 + 50,
      }));
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.speedX + 100) % 100,
        y: (particle.y + particle.speedY + 100) % 100,
        life: particle.life - 1,
        opacity: (particle.life / particle.maxLife) * 0.6 + 0.1,
      })).filter(p => p.life > 0));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: <Layers className="w-4 h-4" />, count: 0 },
    { id: 'frontend', name: 'Frontend', icon: <Monitor className="w-4 h-4" />, count: 0 },
    { id: 'backend', name: 'Backend', icon: <Server className="w-4 h-4" />, count: 0 },
    { id: 'design', name: 'Design', icon: <Palette className="w-4 h-4" />, count: 0 },
    { id: 'tools', name: 'Tools', icon: <Zap className="w-4 h-4" />, count: 0 }
  ];

  const skills = [
    // Frontend Skills
    {
      name: 'React',
      level: 95,
      category: 'frontend',
      icon: '⚛️',
      description: 'Building dynamic and interactive user interfaces with hooks and context',
      projects: 25,
      experience: '3+ years',
      trending: true,
      certifications: ['React Developer Certification'],
      strengths: ['Component Architecture', 'State Management', 'Performance Optimization'],
      recentProjects: ['E-commerce Platform', 'Social Media Dashboard', 'Real-time Chat App']
    },
    {
      name: 'TypeScript',
      level: 90,
      category: 'frontend',
      icon: '🔷',
      description: 'Type-safe JavaScript development with advanced type systems',
      projects: 20,
      experience: '2+ years',
      trending: true,
      certifications: ['TypeScript Advanced Certification'],
      strengths: ['Type Safety', 'Generic Programming', 'Interface Design'],
      recentProjects: ['TypeScript API', 'Type-safe Forms', 'Generic Components']
    },
    {
      name: 'Next.js',
      level: 88,
      category: 'frontend',
      icon: '▲',
      description: 'Full-stack React framework with SSR and SSG capabilities',
      projects: 15,
      experience: '2+ years',
      trending: true,
      certifications: ['Next.js Expert'],
      strengths: ['Server-side Rendering', 'API Routes', 'Performance'],
      recentProjects: ['Portfolio Website', 'Blog Platform', 'E-commerce Store']
    },
    {
      name: 'TailwindCSS',
      level: 92,
      category: 'frontend',
      icon: '🎨',
      description: 'Utility-first CSS framework for rapid UI development',
      projects: 30,
      experience: '3+ years',
      trending: false,
      certifications: ['TailwindCSS Master'],
      strengths: ['Responsive Design', 'Custom Components', 'Design Systems'],
      recentProjects: ['Design System', 'Landing Pages', 'Mobile Apps']
    },
    {
      name: 'JavaScript',
      level: 93,
      category: 'frontend',
      icon: '🟨',
      description: 'Modern ES6+ JavaScript with advanced patterns and async programming',
      projects: 35,
      experience: '3+ years',
      trending: false,
      certifications: ['JavaScript Expert'],
      strengths: ['Async Programming', 'Functional Programming', 'DOM Manipulation'],
      recentProjects: ['SPA Applications', 'Game Development', 'Animation Libraries']
    },

    // Backend Skills
    {
      name: 'Node.js',
      level: 80,
      category: 'backend',
      icon: '🟢',
      description: 'Server-side JavaScript runtime with Express and microservices',
      projects: 22,
      experience: '3+ years',
      trending: true,
      certifications: ['Node.js Certified Developer'],
      strengths: ['API Development', 'Microservices', 'Real-time Applications'],
      recentProjects: ['REST APIs', 'WebSocket Server', 'Microservice Architecture']
    },
    {
      name: 'Python',
      level: 85,
      category: 'backend',
      icon: '🐍',
      description: 'Backend development, automation, and data processing',
      projects: 18,
      experience: '2+ years',
      trending: true,
      certifications: ['Python Professional'],
      strengths: ['Web Development', 'Data Analysis', 'Automation'],
      recentProjects: ['Django API', 'Data Pipeline', 'ML Model Deployment']
    },
    {
      name: 'MongoDB',
      level: 78,
      category: 'backend',
      icon: '🍃',
      description: 'NoSQL document database with aggregation and indexing',
      projects: 16,
      experience: '2+ years',
      trending: false,
      certifications: ['MongoDB Developer'],
      strengths: ['Schema Design', 'Aggregation', 'Performance Tuning'],
      recentProjects: ['User Management', 'Analytics Dashboard', 'Content Management']
    },
    {
      name: 'Express.js',
      level: 78,
      category: 'backend',
      icon: '🚀',
      description: 'Fast Node.js web framework for building robust APIs',
      projects: 25,
      experience: '3+ years',
      trending: false,
      certifications: ['Express.js Expert'],
      strengths: ['Middleware', 'Routing', 'Security'],
      recentProjects: ['Authentication API', 'Payment Gateway', 'File Upload Service']
    },

    // Design Skills
    {
      name: 'Figma',
      level: 85,
      category: 'design',
      icon: '🎨',
      description: 'UI/UX design, prototyping, and design system creation',
      projects: 20,
      experience: '2+ years',
      trending: true,
      certifications: ['Figma Professional'],
      strengths: ['Prototyping', 'Design Systems', 'Collaboration'],
      recentProjects: ['Mobile App Design', 'Web Dashboard', 'Design System']
    },
    {
      name: 'Photoshop',
      level: 80,
      category: 'design',
      icon: '🖼️',
      description: 'Advanced image editing, manipulation, and digital art creation',
      projects: 15,
      experience: '2+ years',
      trending: false,
      certifications: ['Adobe Certified'],
      strengths: ['Photo Editing', 'Digital Art', 'UI Assets'],
      recentProjects: ['Brand Assets', 'Social Media Graphics', 'Web Graphics']
    },

    // Tools & Technologies
    {
      name: 'Git',
      level: 94,
      category: 'tools',
      icon: '📝',
      description: 'Advanced version control, branching strategies, and collaboration',
      projects: 40,
      experience: '3+ years',
      trending: false,
      certifications: ['Git Professional'],
      strengths: ['Branching Strategies', 'Merge Conflicts', 'CI/CD Integration'],
      recentProjects: ['Team Collaboration', 'Release Management', 'Code Reviews']
    },
    {
      name: 'Docker',
      level: 50,
      category: 'tools',
      icon: '🐳',
      description: 'Containerization, orchestration, and deployment automation',
      projects: 15,
      experience: '2+ years',
      trending: true,
      certifications: ['Docker Certified'],
      strengths: ['Containerization', 'Orchestration', 'CI/CD'],
      recentProjects: ['App Containerization', 'Microservices', 'Development Environment']
    },
    {
      name: 'AWS',
      level: 81,
      category: 'tools',
      icon: '☁️',
      description: 'Cloud computing, serverless architecture, and scalable infrastructure',
      projects: 12,
      experience: '1+ years',
      trending: true,
      certifications: ['AWS Certified Developer'],
      strengths: ['Serverless', 'Infrastructure', 'Security'],
      recentProjects: ['Serverless API', 'Static Hosting', 'Database Migration']
    }
  ];

  // Update category counts
  skillCategories.forEach(category => {
    if (category.id === 'all') {
      category.count = skills.length;
    } else {
      category.count = skills.filter(skill => skill.category === category.id).length;
    }
  });

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getSkillLevelColor = (level) => {
    if (level >= 90) return 'from-white to-gray-200';
    if (level >= 80) return 'from-gray-200 to-gray-300';
    if (level >= 70) return 'from-gray-300 to-gray-400';
    return 'from-gray-400 to-gray-500';
  };

  const getSkillLevelText = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  const getSkillLevelIcon = (level) => {
    if (level >= 90) return <Trophy className="w-4 h-4" />;
    if (level >= 80) return <Award className="w-4 h-4" />;
    if (level >= 70) return <Target className="w-4 h-4" />;
    return <BookOpen className="w-4 h-4" />;
  };

  const skillStats = {
    totalSkills: skills.length,
    averageLevel: Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length),
    totalProjects: skills.reduce((acc, skill) => acc + skill.projects, 0),
    expertSkills: skills.filter(skill => skill.level >= 90).length,
    trendingSkills: skills.filter(skill => skill.trending).length,
    totalExperience: '3+'
  };
  // Data for Always Learning section
  const alwaysLearningData = [
    {
      icon: <TrendingUp className="w-8 h-8 text-black" />,
      title: 'Staying Current',
      description: 'Regularly updating skills with the latest technologies and best practices',
      bgColor: 'bg-white',
      metrics: ['50+ courses completed', '100+ hours/month learning']
    },
    {
      icon: <Users className="w-8 h-8 text-black" />,
      title: 'Community',
      description: 'Active in developer communities and contributing to open-source projects',
      bgColor: 'bg-gray-300',
      metrics: ['15+ open source contributions', '5+ community projects']
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-black" />,
      title: 'Innovation',
      description: 'Exploring emerging technologies and implementing creative solutions',
      bgColor: 'bg-white',
      metrics: ['3+ experimental projects', '2+ tech talks given']
    }
  ];

  // Enhanced intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateCards(true);
          // Animate skill progress bars with staggered delays
          setTimeout(() => {
            filteredSkills.forEach((skill, index) => {
              setTimeout(() => {
                setSkillProgress(prev => ({
                  ...prev,
                  [skill.name]: skill.level
                }));
                setSkillAnimations(prev => ({
                  ...prev,
                  [skill.name]: true
                }));
              }, index * 150);
            });
          }, 500);
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          Object.keys(skillStats).forEach((_, index) => {
            setTimeout(() => {
              setVisibleStats(prev => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (skillsGridRef.current) statsObserver.observe(skillsGridRef.current);

    return () => {
      observer.disconnect();
      statsObserver.disconnect();
    };
  }, [filteredSkills, skillStats]);

  // Enhanced mouse tracking with torch effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const skillsSection = sectionRef.current;
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
        setTorchPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    };

    const handleScroll = () => {
      const element = sectionRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        setScrollProgress(progress);
      }
    };

    const skillsSection = sectionRef.current;
    if (skillsSection) {
      skillsSection.addEventListener('mousemove', handleMouseMove);
      skillsSection.addEventListener('mouseenter', () => setIsMouseInSection(true));
      skillsSection.addEventListener('mouseleave', () => {
        setIsMouseInSection(false);
        setActiveSkillDetails(null);
      });
    }

    window.addEventListener('scroll', handleScroll);    return () => {
      if (skillsSection) {
        skillsSection.removeEventListener('mousemove', handleMouseMove);
        skillsSection.removeEventListener('mouseenter', () => setIsMouseInSection(true));
        skillsSection.removeEventListener('mouseleave', () => setIsMouseInSection(false));
      }
      window.removeEventListener('scroll', handleScroll);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 bg-black relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute bg-white rounded-full pointer-events-none"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animation: `float ${3 + particle.size}s ease-in-out infinite`,
              animationDelay: `${particle.id * 0.1}s`
            }}
          />
        ))}

        {/* Enhanced background orbs */}
        <div 
          className="absolute w-96 h-96 bg-white/8 rounded-full blur-3xl transition-all duration-1000"
          style={{
            top: '10%',
            left: `${20 + mousePosition.x * 0.15}%`,
            transform: `scale(${1 + scrollProgress * 0.3})`,
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-gray-400/12 rounded-full blur-3xl transition-all duration-1000"
          style={{
            bottom: '10%',
            right: `${20 + mousePosition.y * 0.15}%`,
            transform: `scale(${1 + scrollProgress * 0.2})`,
          }}
        />        {/* Torch effect spotlight */}
        {isMouseInSection && (
          <div
            className="absolute pointer-events-none z-20 transition-opacity duration-300"
            style={{
              left: torchPosition.x - 150,
              top: torchPosition.y - 150,
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 30%, transparent 70%)',
              borderRadius: '50%',
              transition: 'all 0.2s ease-out',
              filter: 'blur(15px)',
              opacity: hoveredSkill ? 0.5 : 1,
            }}
          />
        )}

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-gray-300 bg-white/10 px-6 py-3 rounded-full border border-white/20 backdrop-blur-sm">
              ⚡ Technical Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed max-w-4xl mx-auto mb-8">
            Mastering cutting-edge technologies to build exceptional digital experiences that solve real-world problems
          </p>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {Object.entries(skillStats).map(([key, value], index) => (
              <div 
                key={key}
                className={`text-center group cursor-pointer transition-all duration-500 ${
                  visibleStats.includes(index) ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl md:text-3xl font-bold text-white group-hover:text-gray-300 transition-colors">
                  {typeof value === 'number' ? value : value}
                  {key === 'averageLevel' && '%'}
                  {key === 'totalExperience' && ' Years'}
                </div>
                <div className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {skillCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center gap-2 px-6 py-4 rounded-2xl text-sm font-medium transition-all duration-300 backdrop-blur-sm relative overflow-hidden ${
                activeCategory === category.id
                  ? 'bg-white/20 text-white border border-white/30 shadow-lg shadow-white/20 scale-105'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-300 border border-white/10 hover:border-white/30 hover:scale-105'
              }`}
            >
              <div className={`transition-transform duration-300 ${activeCategory === category.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                {category.icon}
              </div>
              <span>{category.name}</span>
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                activeCategory === category.id 
                  ? 'bg-white/20 text-white' 
                  : 'bg-white/10 text-gray-400 group-hover:bg-white/20 group-hover:text-gray-300'
              }`}>
                {category.count}
              </span>
              
              {/* Shimmer effect */}
              {activeCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer" />
              )}
            </button>
          ))}
        </div>        {/* Enhanced Skills Grid */}
        <div ref={skillsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10 cursor-pointer overflow-hidden ${
                animateCards ? 'animate-fade-in-up' : 'opacity-0'
              } ${hoveredSkill === skill.name ? 'scale-[1.02] shadow-xl shadow-white/10' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => handleSkillHover(skill)}
              onMouseLeave={handleSkillLeave}
              onClick={() => handleSkillClick(skill)}
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors">
                        {skill.name}
                      </h3>
                      {skill.trending && (
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" title="Trending" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium bg-gradient-to-r ${getSkillLevelColor(skill.level)} bg-clip-text text-transparent`}>
                        {getSkillLevelText(skill.level)}
                      </span>
                      <div className="text-gray-400">
                        {getSkillLevelIcon(skill.level)}
                      </div>
                    </div>
                  </div>
                </div>                
                <div className="text-right">
                  <div className="text-3xl font-bold text-white group-hover:text-gray-200 transition-colors">
                    {skill.level}%
                  </div>
                  <div className="text-xs text-gray-400">{skill.experience}</div>
                </div>
              </div>

              {/* Enhanced Progress Bar */}
              <div className="mb-4 relative">
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden relative">
                  <div 
                    className={`h-full bg-gradient-to-r ${getSkillLevelColor(skill.level)} transition-all duration-1000 ease-out relative overflow-hidden`}
                    style={{ 
                      width: skillProgress[skill.name] ? `${skillProgress[skill.name]}%` : '0%',
                      transitionDelay: `${index * 100 + 500}ms`
                    }}
                  >
                    {/* Shimmer effect on progress bar */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer" />
                  </div>
                </div>
                
                {/* Progress percentage indicator */}
                <div 
                  className="absolute top-0 text-xs text-white font-medium transition-all duration-1000"
                  style={{ 
                    left: `${Math.min(skillProgress[skill.name] || 0, 90)}%`,
                    transitionDelay: `${index * 100 + 800}ms`
                  }}
                >
                  {skillProgress[skill.name] && `${skill.level}%`}
                </div>
              </div>

              {/* Enhanced Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed group-hover:text-gray-300 transition-colors">
                {skill.description}
              </p>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="text-center">
                  <div className="text-lg font-bold text-white group-hover:text-gray-200 transition-colors">
                    {skill.projects}
                  </div>
                  <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                    Projects
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-white group-hover:text-gray-200 transition-colors">
                    {skill.experience.split('+')[0]}+
                  </div>
                  <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                    Years
                  </div>
                </div>
              </div>              {/* Enhanced Hover Effect Overlay */}
              {hoveredSkill === skill.name && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-gray-400/5 rounded-2xl pointer-events-none transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -skew-x-12 animate-shimmer" />
                </div>
              )}

              {/* Skill level indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`w-3 h-3 rounded-full ${skill.level >= 90 ? 'bg-white' : skill.level >= 80 ? 'bg-gray-300' : 'bg-gray-400'}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Skill Details Modal */}
        {activeSkillDetails && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-2xl w-full border border-white/20 relative">
              <button
                onClick={() => setActiveSkillDetails(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                ✕
              </button>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{activeSkillDetails.icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{activeSkillDetails.name}</h3>
                  <p className="text-gray-300">{getSkillLevelText(activeSkillDetails.level)} • {activeSkillDetails.level}%</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Core Strengths</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeSkillDetails.strengths.map((strength, index) => (
                      <span key={index} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Recent Projects</h4>
                  <div className="space-y-2">
                    {activeSkillDetails.recentProjects.map((project, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}        {/* Enhanced Always Learning Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Always Learning
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to continuous learning and staying current with industry trends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {alwaysLearningData.map((item, index) => (
              <div key={index} className="group text-center relative overflow-hidden bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10">
                <div className={`w-16 h-16 mx-auto mb-4 ${item.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-white/20`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
                
                <div className="space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-xs text-gray-400 flex items-center justify-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      {metric}
                    </div>
                  ))}
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;