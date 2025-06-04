import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Code, Palette, Database, Globe, Trophy, Heart, Calendar, MapPin, Coffee, Zap, Star, Award, Target, Users, BookOpen, Lightbulb, Rocket, Shield, ArrowRight, Download, ExternalLink, ChevronRight } from 'lucide-react';


const About = () => {
  const [animateCards, setAnimateCards] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleStats, setVisibleStats] = useState([]);
  const [typedText, setTypedText] = useState('');
  const [particles, setParticles] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [profileRotation, setProfileRotation] = useState({ x: 0, y: 0 });
  const [skillProgress, setSkillProgress] = useState({});
  const [activeSkill, setActiveSkill] = useState(null);
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const profileRef = useRef(null);

  const introText = "Transforming ideas into exceptional digital experiences";

  // Enhanced typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    const typeTimer = setInterval(() => {
      if (!isDeleting && currentIndex <= introText.length) {
        setTypedText(introText.slice(0, currentIndex));
        currentIndex++;
      } else if (isDeleting && currentIndex >= 0) {
        setTypedText(introText.slice(0, currentIndex));
        currentIndex--;
      }
      
      if (currentIndex === introText.length + 1) {
        setTimeout(() => isDeleting = true, 2000);
      }
      if (currentIndex === 0 && isDeleting) {
        isDeleting = false;
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(typeTimer);
  }, []);

  // Particle system
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      }));
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.speedX + 100) % 100,
        y: (particle.y + particle.speedY + 100) % 100,
      })));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Advanced intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateCards(true);
          // Animate skill progress bars
          setTimeout(() => {
            topSkills.forEach((skill, index) => {
              setTimeout(() => {
                setSkillProgress(prev => ({
                  ...prev,
                  [skill.name]: skill.level
                }));
              }, index * 200);
            });
          }, 500);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          achievements.forEach((_, index) => {
            setTimeout(() => {
              setVisibleStats(prev => [...prev, index]);
            }, index * 300);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (statsRef.current) statsObserver.observe(statsRef.current);

    return () => {
      observer.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  // Mouse tracking and scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const element = sectionRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        setScrollProgress(progress);
      }
    };    const handleMouseMove = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
        
        // Profile card rotation removed - keeping it static
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "50+ Projects Delivered",
      description: "Successfully completed projects across various industries",
      metric: "50+",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "100% Client Satisfaction",
      description: "Maintaining excellent relationships with all clients",
      metric: "100%",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "3+ Years Experience",
      description: "Continuous learning and growth in web development",
      metric: "3+",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "1000+ Cups of Coffee",
      description: "Fueling countless coding sessions and creative breakthroughs",
      metric: "1000+",
      color: "from-amber-600 to-yellow-500"
    }
  ];

  const topSkills = [
    { name: "React/Next.js", level: 95, icon: <Code className="w-5 h-5" /> },
    { name: "Node.js/Express", level: 90, icon: <Database className="w-5 h-5" /> },
    { name: "TypeScript", level: 88, icon: <Zap className="w-5 h-5" /> },
    { name: "UI/UX Design", level: 85, icon: <Palette className="w-5 h-5" /> },
    { name: "MongoDB/SQL", level: 82, icon: <Shield className="w-5 h-5" /> },
    { name: "Cloud Services", level: 78, icon: <Globe className="w-5 h-5" /> }
  ];

  const personalInfo = [
    { label: "Based in", value: "Lucknow, India", icon: <MapPin className="w-4 h-4" />, color: "text-blue-400" },
    { label: "Experience", value: "3+ Years", icon: <Calendar className="w-4 h-4" />, color: "text-green-400" },
    { label: "Availability", value: "Open to opportunities", icon: <Zap className="w-4 h-4" />, color: "text-yellow-400" },
    { label: "Focus", value: "Full-Stack Development", icon: <Target className="w-4 h-4" />, color: "text-purple-400" },
  ];

  // Journey timeline data
  const journeyData = [
    {
      year: "2025 - Present",
      title: "Senior Full-Stack Developer",
      description: "Leading development of complex web applications and mentoring junior developers.",
      achievements: ["Led 5+ major projects", "Mentored 3 junior developers", "Improved code quality by 40%"],
      tech: ["React", "Node.js", "TypeScript", "AWS"]
    },
    {
      year: "2023 - 2024",
      title: "Full-Stack Developer",
      description: "Developed scalable web applications using React, Node.js, and cloud technologies.",
      achievements: ["Built 20+ applications", "Reduced load times by 60%", "Implemented CI/CD pipelines"],
      tech: ["React", "Express", "MongoDB", "Docker"]
    },
    {
      year: "2022 - 2023",
      title: "Frontend Developer",
      description: "Started my professional journey focusing on React and modern frontend technologies.",
      achievements: ["Mastered React ecosystem", "Created 15+ UI components", "Learned backend technologies"],
      tech: ["React", "JavaScript", "CSS3", "Git"]
    }
  ];

  // Values data
  const valuesData = [
    {
      title: "Code Quality",
      description: "I believe in writing clean, maintainable code that stands the test of time. Every line should have a purpose.",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "User-Centric Design",
      description: "Every decision I make is guided by how it will impact the end user's experience and satisfaction.",
      icon: <Heart className="w-6 h-6" />,
      color: "from-red-400 to-pink-500"
    },
    {
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices.",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Collaboration",
      description: "Great products are built by great teams. I value open communication and shared knowledge.",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-400 to-violet-500"
    }
  ];

  const tabContent = {
    overview: {
      title: "About Me",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-300 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-black" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white">Hello, I'm Lakshya!</h4>
              <p className="text-gray-400">
                {typedText}<span className="animate-pulse">|</span>
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Full-Stack Developer with over 3 years of experience creating digital solutions 
                that make a difference. My journey in tech started with curiosity and has evolved into a deep 
                commitment to crafting exceptional user experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in modern web technologies, with expertise spanning from frontend frameworks 
                like React and Vue.js to backend technologies including Node.js and Python.
              </p>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h5 className="text-lg font-semibold text-white mb-4">Quick Facts</h5>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Rocket className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300">Passionate about innovation</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Continuous learner</span>
                </div>
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-300">Problem solver at heart</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      )
    },
    journey: {
      title: "My Journey",
      icon: <Calendar className="w-5 h-5" />,
      content: (
        <div className="space-y-8">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-white via-gray-400 to-transparent"></div>
            
            <div className="space-y-12">
              {journeyData.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-white/20">
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white/5 rounded-xl p-6 border border-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:bg-white/10">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-1">{item.year}</h4>
                          <h5 className="text-lg font-medium text-gray-300 mb-2">{item.title}</h5>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.tech.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-400 mb-4">{item.description}</p>
                      <div className="space-y-2">
                        {item.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    values: {
      title: "Values & Approach",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {valuesData.map((value, index) => (
            <div key={index} className="group relative bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-black">{value.icon}</div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors">
                  {value.title}
                </h4>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )
    }
  };

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              transform: `scale(${particle.size})`,
            }}
          />
        ))}
        
        {/* Interactive background orbs */}
        <div 
          className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl transition-all duration-1000"
          style={{
            top: '10%',
            right: `${25 + mousePosition.x * 0.1}%`,
            transform: `scale(${1 + scrollProgress * 0.2})`,
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-gray-400/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            bottom: '10%',
            left: `${25 + mousePosition.y * 0.1}%`,
            transform: `scale(${1 + scrollProgress * 0.3})`,
          }}
        />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-gray-300 bg-white/10 px-6 py-3 rounded-full border border-white/20 backdrop-blur-sm">
              ✨ Get to know me
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-400 text-xl leading-relaxed mb-4">
              Passionate developer creating meaningful digital experiences through code and design
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto rounded-full" />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Enhanced Left Column - Profile Info */}
          <div className="lg:col-span-1">            <div 
              ref={profileRef}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-fit sticky top-8 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              {/* Enhanced Profile Image */}
              <div className="w-40 h-40 mx-auto mb-6 relative group">
                <div className="w-full h-full bg-gradient-to-br from-white to-gray-400 rounded-full flex items-center justify-center text-5xl font-bold text-black relative z-10 group-hover:scale-105 transition-transform duration-300">
                  LA
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-gray-400/30 rounded-full blur-xl animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-gray-400/10 rounded-full blur-2xl scale-110" />
              </div>
              
              <h3 className="text-3xl font-bold text-white text-center mb-2">Lakshya Asthana</h3>
              <p className="text-gray-300 text-center mb-2">Full-Stack Developer</p>
              <p className="text-gray-400 text-center mb-8 text-sm">Building the future, one line at a time</p>
              
              {/* Enhanced Personal Info */}
              <div className="space-y-4 mb-8">
                {personalInfo.map((info, index) => (
                  <div key={index} className="group flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                    <div className={`${info.color} group-hover:scale-110 transition-transform`}>{info.icon}</div>
                    <div>
                      <span className="text-gray-400 text-sm">{info.label}: </span>
                      <span className="text-white group-hover:text-gray-200 transition-colors">{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Enhanced Right Column - Tabbed Content */}
          <div className="lg:col-span-2">
            {/* Enhanced Tab Navigation */}
            <div className="flex flex-wrap gap-3 mb-8">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`group px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-white/20 text-white border border-white/30 shadow-lg'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-300 border border-white/10'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <div className={`transition-transform duration-300 ${activeTab === tab ? 'scale-110' : 'group-hover:scale-105'}`}>
                      {tabContent[tab].icon}
                    </div>
                    {tabContent[tab].title}
                  </span>
                </button>
              ))}
            </div>

            {/* Enhanced Tab Content */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 min-h-[500px] transition-all duration-500 hover:border-white/20 hover:bg-white/8">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-white">{tabContent[activeTab].icon}</div>
                <h3 className="text-3xl font-bold text-white">{tabContent[activeTab].title}</h3>
              </div>
              <div className="transition-all duration-500">
                {tabContent[activeTab].content}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Achievements Grid */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group relative text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/10 cursor-pointer overflow-hidden ${
                animateCards && visibleStats.includes(index) ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Floating metric */}
              <div className="absolute top-4 right-4 text-3xl font-bold text-white/20 group-hover:text-white/40 transition-colors duration-300">
                {achievement.metric}
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-white/20">
                  <div className="text-black">{achievement.icon}</div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                  {achievement.title}
                </h4>
                
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {achievement.description}
                </p>
                
                {/* Hover indicator */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-1 bg-white rounded-full mx-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;