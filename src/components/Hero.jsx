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
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center font-mono font-roboto bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Hero background image with opacity overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      
      <div className="w-full max-w-7xl mx-auto px-6 py-24 flex flex-col items-center justify-center relative z-10 font-mono font-roboto">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>          {/* Enhanced main heading */}
          <h1 className="text-6xl md:text-8xl font-bold font-mono font-roboto mb-6 leading-tight tracking-tight text-center">
            <span className="block text-gray-300 transform transition-all duration-1000 hover:scale-105 font-mono font-roboto">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent font-mono font-roboto">
              Lakshya Asthana
            </span>
          </h1>

          {/* Typewriter Effect */}
          <div className="mb-10">
            <div className="text-2xl md:text-3xl font-semibold font-mono font-roboto text-white mb-2 min-h-[1.2em] flex justify-center items-center">
              <span className="relative">
                {displayText}
                <span className={`inline-block w-0.5 h-8 bg-white ml-1 ${isTyping ? 'animate-pulse' : 'animate-blink'}`}></span>
              </span>
            </div>
          </div>

          {/* Enhanced elegant separator */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-10 animate-pulse"></div>

          {/* Main description */}
          <div className="mb-10">
            <p className="text-lg md:text-xl text-gray-300 font-mono font-roboto max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences with cutting-edge technologies.
              Passionate about creating scalable applications that solve real-world problems
              and deliver exceptional user experiences.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto font-mono font-roboto">
            <div className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="text-3xl font-bold text-white group-hover:text-gray-200 font-mono font-roboto">3+</div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 font-mono font-roboto">Years Experience</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="text-3xl font-bold text-white group-hover:text-gray-200 font-mono font-roboto">30+</div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 font-mono font-roboto">Projects Completed</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="text-3xl font-bold text-white group-hover:text-gray-200 font-mono font-roboto">100%</div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 font-mono font-roboto">Client Satisfaction</div>
            </div>
          </div>

          {/* CTA Buttons - below stats, spaced and wrapped properly */}
          <div className="w-full flex justify-between items-center px-8 md:px-24 mt-20 mb-12">
            {/* Left Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-6 md:px-8 py-4 bg-white text-black rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-white/25 overflow-hidden font-mono font-roboto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3 font-mono font-roboto whitespace-nowrap">
                Get In Touch
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            {/* Right Button */}
            <button
              onClick={() => window.open('/Lakshya_Asthana_Resume.pdf', '_blank')}
              className="group px-6 md:px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm relative overflow-hidden font-mono font-roboto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3 font-mono font-roboto whitespace-nowrap">
                <Download size={20} className="transition-transform group-hover:scale-110 group-hover:rotate-12" />
                Download Resume
              </span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8 font-mono font-roboto">
            <a
              href="https://github.com/lakshya971"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-110 font-mono font-roboto"
            >
              <Github size={24} className="text-gray-300 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/lakshya-asthana-132941292/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-110 font-mono font-roboto"
            >
              <Linkedin size={24} className="text-gray-300 group-hover:text-white transition-colors" />
            </a>
            <a
              href="mailto:asthanalakshya2005@gmail.com"
              className="group p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-110 font-mono font-roboto"
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
    </section>
  );
};

export default Hero;
