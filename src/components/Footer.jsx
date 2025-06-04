// src/components/Footer.js
import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp, Code, Coffee, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/lakshyaasthana',
      label: 'GitHub',
      username: '@lakshyaasthana'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/lakshyaasthana',
      label: 'LinkedIn',
      username: 'Lakshya Asthana'
    },
    {
      icon: Mail,
      href: 'mailto:lakshya@example.com',
      label: 'Email',
      username: 'lakshya@example.com'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const skills = [
    'React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'MongoDB'
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent mb-4">
                  Lakshya Asthana
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                  Full-Stack Developer passionate about creating exceptional digital experiences
                  with modern technologies and clean, scalable code.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin size={16} className="text-gray-300" />
                  <span>Lucknow, India</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone size={16} className="text-gray-300" />
                  <span>+91 700-799-2086</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail size={16} className="text-gray-300" />
                  <span>asthanalakshya2005@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-gray-400 hover:text-gray-200 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                ))}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-gray-200 transition-colors duration-300"
                >
                  Resume
                </a>
              </div>
            </div>

            {/* Skills & Technologies */}
            <div>              <h4 className="text-white font-semibold mb-6 text-lg flex items-center gap-2">
                <Code className="w-5 h-5 text-gray-300" />
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm border border-white/20 hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Availability Status */}
              <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">Available for Work</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Open to new opportunities and exciting projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>© 2025 Lakshya Asthana. Made with</span>
                <Heart size={16} className="text-red-400 animate-pulse" />
                <span>in Lucknow</span>
              </div>

              <div className="flex items-center gap-6">
                <span className="text-gray-400 text-sm">
                  Built with React & TailwindCSS
                </span>

                {/* Scroll to Top Button */}                <button
                  onClick={scrollToTop}
                  className="group p-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110"
                  aria-label="Scroll to top"
                >
                  <ArrowUp size={16} className="text-gray-400 group-hover:text-gray-200 transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;