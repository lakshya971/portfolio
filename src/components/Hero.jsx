// src/components/Hero.js
import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';


const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen mt-10 rounded-[50px] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/nirvobg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-gray-950/70" />
      </div>

      {/* Animated Background Overlays */}
      <div className="absolute inset-0 z-10">
        {/* Floating gradient orbs */}
        <div 
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${20 + mousePosition.x * 0.1}%`,
            top: `${10 + mousePosition.y * 0.1}%`,
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-violet-500/15 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            right: `${15 + mousePosition.x * 0.08}%`,
            bottom: `${20 + mousePosition.y * 0.08}%`,
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${60 + mousePosition.x * 0.05}%`,
            top: `${60 + mousePosition.y * 0.05}%`,
          }}
        />
        
        {/* Additional overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/45 via-transparent to-gray-950/20" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-20 text-center max-w-6xl mx-auto px-6">
        {/* Main Content */}
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-800 font-[Poppins] mb-8 leading-tight">
            <span className="block text-gray-500">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Lakshya Asthana
            </span>
          </h1>

          {/* Subtitle */}
          <div className="mb-8">
            <p className="text-2xl md:text-3xl font-700 font-[Poppins] text-gray-300 mb-4">
              Full-Stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-lg md:text-xl text-gray-400 font-[Poppins] max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences with cutting-edge technologies. 
              Passionate about creating scalable applications that solve real-world problems 
              and deliver exceptional user experiences.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">3+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-400">30+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-fuchsia-400">100%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 overflow-hidden shadow-lg hover:shadow-purple-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-3">
                Get In Touch
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            
            <button 
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="group px-8 py-4 border border-purple-400/30 text-purple-300 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:bg-purple-500/10 backdrop-blur-sm"
            >
              <span className="flex items-center gap-3">
                <Download size={20} className="transition-transform group-hover:scale-110" />
                Download Resume
                <a href='/Lakshya Asthana resume.pdf'></a>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60 z-20"></div>
      <div className="absolute top-32 right-20 w-1 h-1 bg-violet-400 rounded-full animate-pulse opacity-40 delay-300 z-20"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-fuchsia-400 rounded-full animate-pulse opacity-50 delay-700 z-20"></div>
      <div className="absolute bottom-20 right-32 w-2 h-2 bg-purple-300 rounded-full animate-pulse opacity-30 delay-1000 z-20"></div>
    </section>
  );
};

export default Hero;
