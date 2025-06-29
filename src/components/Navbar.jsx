// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Zap } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setIsScrolled(scrollTop > 50);
      setScrollProgress(scrollPercent);
      
      // Hide/Show navbar based on scroll direction
      if (scrollTop > lastScrollY && scrollTop > 100) {
        // Scrolling down & past 100px - hide navbar
        setIsVisible(false);
        setIsMenuOpen(false); // Close mobile menu when hiding
      } else if (scrollTop < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      // Always show at top of page
      if (scrollTop < 50) {
        setIsVisible(true);
      }
      
      setLastScrollY(scrollTop);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = scrollTop + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'hero', icon: '🏠' },
    { name: 'About', id: 'about', icon: '👨‍💻' },
    { name: 'Skills', id: 'skills', icon: '⚡' },
    { name: 'Projects', id: 'projects', icon: '🚀' },
    { name: 'Contact', id: 'contact', icon: '📧' }
  ];

  return (
    <nav className="bg-black bg-opacity-90 backdrop-blur-md shadow-lg fixed w-full z-50 font-mono font-roboto">
      {/* Plain black background, no dots or overlays */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Enhanced Logo */}
        <div 
          onClick={() => scrollToSection('hero')}
          className="cursor-pointer group font-mono font-roboto"
        >
          <div className="flex items-center gap-3 font-mono font-roboto">
            <div className="relative font-mono font-roboto">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg font-mono font-roboto">
                <span className="text-black font-bold text-lg font-mono font-roboto">LA</span>
              </div>
              <div className="absolute -inset-1 bg-white rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 font-mono font-roboto"></div>
            </div>
            <div className="text-xl font-bold font-mono font-roboto">
              <div className="text-white tracking-wider text-4xl font-mono font-roboto">
                LAKSHYA
              </div>
            </div>
          </div>
        </div>
          {/* Enhanced Desktop Menu */}
        <div className="hidden lg:flex items-center px-2 py-2 font-mono font-roboto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-6 py-2 font-medium text-sm transition-all duration-300 group flex rounded-2xl items-center gap-2 font-mono font-roboto ${
                activeSection === item.id
                  ? 'text-black bg-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <span className="text-xs font-mono font-roboto">{item.icon}</span>
              {item.name}
              {activeSection === item.id && (
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full font-mono font-roboto"></div>
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden relative p-3 rounded-xl bg-gray-800 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110 font-mono font-roboto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-6 relative font-mono font-roboto">
            <div className={`absolute inset-0 transition-all duration-300 font-mono font-roboto ${isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}> 
              <Menu size={24} className="text-gray-300" />
            </div>
            <div className={`absolute inset-0 transition-all duration-300 font-mono font-roboto ${isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`}> 
              <X size={24} className="text-gray-300" />
            </div>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden font-mono font-roboto ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="py-6 border-t border-white/10 bg-gray-800 rounded-b-3xl font-mono font-roboto">
          {/* Mobile Navigation */}
          <div className="space-y-2 mb-6 font-mono font-roboto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-300 font-mono font-roboto ${
                  activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-purple-500 to-violet-600 border-l-4 border-purple-300 shadow-lg'
                    : 'text-gray-300 hover:text-purple-300 hover:bg-gray-700'
                }`}
              >
                <span className="text-lg mr-3 font-mono font-roboto">{item.icon}</span>
                <span className="flex-1 font-mono font-roboto">{item.name}</span>
                {activeSection === item.id && (
                  <div className="w-2 h-2 bg-white rounded-full font-mono font-roboto"></div>
                )}
              </button>
            ))}
          </div>

          {/* Quick Links */}
          <div className="px-6 font-mono font-roboto">
            <div className="text-gray-400 text-sm mb-3 px-2 font-mono font-roboto">Quick Actions</div>
            <div className="grid grid-cols-2 gap-3 font-mono font-roboto">
              <button 
                onClick={() => scrollToSection('projects')}
                className="flex items-center gap-2 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors font-mono font-roboto"
              >
                <Code size={16} className="text-purple-400" />
                <span className="text-sm text-gray-300 font-mono font-roboto">Projects</span>
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="flex items-center gap-2 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors font-mono font-roboto"
              >
                <Zap size={16} className="text-violet-400" />
                <span className="text-sm text-gray-300 font-mono font-roboto">Skills</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;