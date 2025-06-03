import React, { useState, useEffect } from 'react';
import { Code, Palette, Database, Globe, Trophy, Heart, Calendar, MapPin, Coffee, Zap } from 'lucide-react';



const About = () => {
  const [animateCards, setAnimateCards] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateCards(true);
        }
      },
      { threshold: 0.2 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "50+ Projects Delivered",
      description: "Successfully completed projects across various industries"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "100% Client Satisfaction",
      description: "Maintaining excellent relationships with all clients"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "3+ Years Experience",
      description: "Continuous learning and growth in web development"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "1000+ Cups of Coffee",
      description: "Fueling countless coding sessions and creative breakthroughs"
    }
  ];

  const personalInfo = [
    { label: "Based in", value: "Lucknow, India", icon: <MapPin className="w-4 h-4" /> },
    { label: "Experience", value: "3+ Years", icon: <Calendar className="w-4 h-4" /> },
    { label: "Availability", value: "Open to opportunities", icon: <Zap className="w-4 h-4" /> },
  ];

  const tabContent = {
    overview: {
      title: "About Me",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate Full-Stack Developer with over 3 years of experience creating digital solutions 
            that make a difference. My journey in tech started with curiosity and has evolved into a deep 
            commitment to crafting exceptional user experiences.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I specialize in modern web technologies, with expertise spanning from frontend frameworks 
            like React and Vue.js to backend technologies including Node.js and Python. I believe in 
            writing clean, maintainable code and following best practices for scalable applications.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
            projects, or sharing knowledge with the developer community. I'm always excited about the 
            next challenge and opportunity to learn something new.
          </p>
        </div>
      )
    },
    journey: {
      title: "My Journey",
      content: (
        <div className="space-y-8">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 to-violet-500"></div>
            
            <div className="space-y-8">
              <div className="relative flex items-start space-x-6">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">2025 - Present</h4>
                  <h5 className="text-lg font-medium text-purple-300 mb-2">Senior Full-Stack Developer</h5>
                  <p className="text-gray-400">Leading development of complex web applications and mentoring junior developers.</p>
                </div>
              </div>
              
              <div className="relative flex items-start space-x-6">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">2023 - 2024</h4>
                  <h5 className="text-lg font-medium text-purple-300 mb-2">Full-Stack Developer</h5>
                  <p className="text-gray-400">Developed scalable web applications using React, Node.js, and cloud technologies.</p>
                </div>
              </div>
              
              <div className="relative flex items-start space-x-6">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">2022 - 2023</h4>
                  <h5 className="text-lg font-medium text-purple-300 mb-2">Frontend Developer</h5>
                  <p className="text-gray-400">Started my professional journey focusing on React and modern frontend technologies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    values: {
      title: "Values & Approach",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-purple-300">Code Quality</h4>
            <p className="text-gray-400">I believe in writing clean, maintainable code that stands the test of time. Every line should have a purpose.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-purple-300">User-Centric Design</h4>
            <p className="text-gray-400">Every decision I make is guided by how it will impact the end user's experience and satisfaction.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-purple-300">Continuous Learning</h4>
            <p className="text-gray-400">Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-purple-300">Collaboration</h4>
            <p className="text-gray-400">Great products are built by great teams. I value open communication and shared knowledge.</p>
          </div>
        </div>
      )
    }
  };

  return (
    <section id="about" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-purple-400 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
              Get to know me
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed max-w-3xl mx-auto">
            Passionate developer creating meaningful digital experiences through code and design
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-fit sticky top-8">
              {/* Profile Image */}
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                  LA
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-600/20 rounded-full blur-xl"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-white text-center mb-2">Lakshya Asthana</h3>
              <p className="text-purple-300 text-center mb-6">Full-Stack Developer</p>
              
              {/* Personal Info */}
              <div className="space-y-4 mb-8">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-purple-400">{info.icon}</div>
                    <div>
                      <span className="text-gray-400 text-sm">{info.label}: </span>
                      <span className="text-white">{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact */}
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                Let's Connect
              </button>
            </div>
          </div>

          {/* Right Column - Tabbed Content */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-purple-300 border border-white/10'
                  }`}
                >
                  {tabContent[tab].title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 min-h-[400px]">
              <h3 className="text-3xl font-bold text-white mb-6">{tabContent[activeTab].title}</h3>
              {tabContent[activeTab].content}
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:bg-white/10 ${
                animateCards ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 4) * 150}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">{achievement.icon}</div>
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {achievement.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;