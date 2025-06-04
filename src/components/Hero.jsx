// src/components/Hero.js
import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const roles = [
    'Full-Stack Developer',
    'UI/UX Enthusiast', 
    'React Specialist',
    'Problem Solver',
    'Tech Innovator'
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Typewriter effect - Fixed variable naming
    let typewriterTimeout;
    let currentText = '';
    let charIndex = 0;
    let isDeleting = false;

    const typeWriter = () => {
      const currentRoleText = roles[currentRole % roles.length]; // Fixed variable name
      
      if (!isDeleting && charIndex < currentRoleText.length) {
        // Typing
        currentText = currentRoleText.substring(0, charIndex + 1);
        setDisplayText(currentText);
        charIndex++;
        typewriterTimeout = setTimeout(typeWriter, 100); // Typing speed
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        currentText = currentRoleText.substring(0, charIndex - 1);
        setDisplayText(currentText);
        charIndex--;
        typewriterTimeout = setTimeout(typeWriter, 50); // Deleting speed
      } else if (!isDeleting && charIndex === currentRoleText.length) {
        // Pause before deleting
        setIsTyping(false);
        typewriterTimeout = setTimeout(() => {
          isDeleting = true;
          setIsTyping(true);
          typeWriter();
        }, 2000); // Pause duration
      } else if (isDeleting && charIndex === 0) {
        // Move to next role
        isDeleting = false;
        setCurrentRole((prev) => (prev + 1) % roles.length);
        typewriterTimeout = setTimeout(typeWriter, 500); // Pause before next word
      }
    };

    // Start typewriter effect
    typeWriter();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(typewriterTimeout);
    };
  }, [currentRole]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen mt-20 rounded-[50px] flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/nirvobg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Enhanced video overlay with gradient */}
        <div className="absolute" />
      </div>

      {/* Background overlays */}
      <div className="absolute inset-0 z-10">
        <div 
          className="absolute w-96 h-96 bg-white/8 rounded-full blur-3xl transition-all duration-[2000ms] ease-out animate-pulse"
          style={{
            left: `${20 + mousePosition.x * 0.15}%`,
            top: `${10 + mousePosition.y * 0.12}%`,
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gray-300/6 rounded-full blur-3xl transition-all duration-[1500ms] ease-out animate-pulse"
          style={{
            right: `${15 + mousePosition.x * 0.10}%`,
            bottom: `${20 + mousePosition.y * 0.10}%`,
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gray-400/4 rounded-full blur-3xl transition-all duration-[1800ms] ease-out animate-pulse"
          style={{
            left: `${60 + mousePosition.x * 0.08}%`,
            top: `${60 + mousePosition.y * 0.08}%`,
            animationDelay: '2s'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
      </div>

      <div className="absolute inset-0 opacity-20 z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '60px 60px',
          animation: 'float 20s ease-in-out infinite'
        }} />
      </div>

      <div className="relative z-20 text-center max-w-6xl mx-auto px-6" style={{
        transform: `translateY(${scrollY * 0.3}px)`,
        transition: 'transform 0.1s ease-out'
      }}>
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>          {/* Enhanced main heading */}
          <h1 className="text-6xl md:text-8xl font-bold font-[Poppins] mb-6 leading-tight tracking-tight">
            <span className="block text-gray-300 transform transition-all duration-1000 hover:scale-105">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Lakshya Asthana
            </span>
          </h1>

          {/* Typewriter Effect */}
          <div className="mb-10">
            <div className="text-2xl md:text-3xl font-semibold font-[Poppins] text-white mb-2 min-h-[1.2em] flex justify-center items-center">
              <span className="relative">
                {displayText}
                <span className={`inline-block w-0.5 h-8 bg-white ml-1 ${isTyping ? 'animate-pulse' : 'animate-blink'}`}></span>
              </span>
            </div>
            <p className="text-sm md:text-base text-gray-400 mb-6">
              I'm a {displayText || roles[0]}
            </p>
          </div>

          {/* Enhanced elegant separator */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-10 animate-pulse"></div>

          {/* Main description */}
          <div className="mb-10">
            <p className="text-lg md:text-xl text-gray-300 font-[Poppins] max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences with cutting-edge technologies. 
              Passionate about creating scalable applications that solve real-world problems 
              and deliver exceptional user experiences.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="text-3xl font-bold text-white group-hover:text-gray-200">3+</div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300">Years Experience</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="text-3xl font-bold text-white group-hover:text-gray-200">30+</div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="text-3xl font-bold text-white group-hover:text-gray-200">100%</div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300">Client Satisfaction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 bg-white text-black rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-white/25 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3">
                Get In Touch
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            
            <button 
              onClick={() => window.open('/Lakshya Asthana resume.pdf', '_blank')}
              className="group px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3">
                <Download size={20} className="transition-transform group-hover:scale-110 group-hover:rotate-12" />
                Download Resume
              </span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://github.com/lakshya971" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} className="text-gray-300 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/lakshya-asthana-132941292/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} className="text-gray-300 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="mailto:asthanalakshya2005@gmail.com"
              className="group p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} className="text-gray-300 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-2 text-white/60 hover:text-white transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-ping opacity-60 z-20"></div>
      <div className="absolute top-32 right-20 w-1 h-1 bg-gray-300 rounded-full animate-pulse opacity-40 z-20" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-white rounded-full animate-bounce opacity-50 z-20" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-32 w-2 h-2 bg-gray-200 rounded-full animate-ping opacity-30 z-20" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/2 left-16 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-70 z-20" style={{animationDelay: '4s'}}></div>
      <div className="absolute top-3/4 right-16 w-2.5 h-2.5 bg-gray-300 rounded-full animate-bounce opacity-40 z-20" style={{animationDelay: '5s'}}></div>
      
      <div className="absolute top-40 right-40 w-4 h-4 border border-white/30 rotate-45 animate-spin z-20" style={{animationDuration: '8s'}}></div>
      <div className="absolute bottom-32 left-40 w-3 h-3 border border-gray-300/40 rounded-full animate-pulse z-20" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Hero;
