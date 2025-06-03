import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code, Star, Eye, Calendar, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with payment integration, real-time inventory management, and admin dashboard. Features include user authentication, shopping cart, order tracking, and responsive design.",
    image: "https://placehold.co/600x400/8b5cf6/ffffff?text=E-Commerce+Platform",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
    category: "Full-Stack",
    github: "https://github.com/lakshyaasthana/ecommerce-platform",
    live: "https://ecommerce-demo.vercel.app",
    featured: true,
    status: "Completed",
    year: "2024",
    stats: { stars: 45, views: 2.1 }
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and advanced filtering options.",
    image: "https://placehold.co/600x400/a855f7/ffffff?text=Task+Manager",
    tech: ["React", "Firebase", "Redux", "Framer Motion"],
    category: "Frontend",
    github: "https://github.com/lakshyaasthana/task-manager",
    live: "https://taskflow-demo.vercel.app",
    featured: true,
    status: "Completed",
    year: "2024",
    stats: { stars: 32, views: 1.8 }
  },
  {
    id: 3,
    title: "Weather Analytics Dashboard",
    description: "A comprehensive weather analytics dashboard with interactive charts, location-based forecasts, historical data analysis, and customizable alerts.",
    image: "https://placehold.co/600x400/c084fc/ffffff?text=Weather+Dashboard",
    tech: ["React", "Chart.js", "OpenWeather API", "TypeScript"],
    category: "Frontend",
    github: "https://github.com/lakshyaasthana/weather-dashboard",
    live: "https://weather-analytics.vercel.app",
    featured: false,
    status: "Completed",
    year: "2024",
    stats: { stars: 28, views: 1.2 }
  },
  {
    id: 4,
    title: "AI Chat Application",
    description: "An intelligent chat application powered by AI with natural language processing, context awareness, and multi-language support. Built with modern chat UI patterns.",
    image: "https://placehold.co/600x400/d946ef/ffffff?text=AI+Chat+App",
    tech: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
    category: "Full-Stack",
    github: "https://github.com/lakshyaasthana/ai-chat-app",
    live: "https://ai-chat-demo.vercel.app",
    featured: true,
    status: "In Progress",
    year: "2025",
    stats: { stars: 67, views: 3.4 }
  },
  {
    id: 5,
    title: "Portfolio CMS",
    description: "A headless CMS built specifically for portfolio websites with drag-and-drop page builder, SEO optimization, and performance analytics.",
    image: "https://placehold.co/600x400/f97316/ffffff?text=Portfolio+CMS",
    tech: ["Node.js", "Express", "MongoDB", "React Admin"],
    category: "Backend",
    github: "https://github.com/lakshyaasthana/portfolio-cms",
    live: "https://portfolio-cms-demo.vercel.app",
    featured: false,
    status: "Completed",
    year: "2023",
    stats: { stars: 19, views: 0.9 }
  },
  {
    id: 6,
    title: "Fitness Tracker Mobile App",
    description: "A React Native mobile application for fitness tracking with workout plans, progress monitoring, social features, and integration with wearable devices.",
    image: "https://placehold.co/600x400/06b6d4/ffffff?text=Fitness+Tracker",
    tech: ["React Native", "Firebase", "HealthKit", "Redux"],
    category: "Mobile",
    github: "https://github.com/lakshyaasthana/fitness-tracker",
    live: "https://fitness-app-demo.expo.dev",
    featured: false,
    status: "Completed",
    year: "2024",
    stats: { stars: 41, views: 2.7 }
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [animateCards, setAnimateCards] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ['All', 'Featured', 'Full-Stack', 'Frontend', 'Backend', 'Mobile'];

  const filteredProjects = projects.filter(project => {
    if (filter === 'All') return true;
    if (filter === 'Featured') return project.featured;
    return project.category === filter;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateCards(true);
        }
      },
      { threshold: 0.2 }
    );

    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= filteredProjects.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [filteredProjects.length]);

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex >= filteredProjects.length - 1 ? 0 : currentIndex + 1);
  };

  const getTechColor = (tech) => {
    const colors = {
      'React': 'bg-purple-500/20 text-purple-300 border-purple-400/30',
      'Node.js': 'bg-violet-500/20 text-violet-300 border-violet-400/30',
      'MongoDB': 'bg-purple-600/20 text-purple-300 border-purple-400/30',
      'Firebase': 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-400/30',
      'TypeScript': 'bg-indigo-500/20 text-indigo-300 border-indigo-400/30',
      'Next.js': 'bg-gray-500/20 text-gray-300 border-gray-400/30',
      'TailwindCSS': 'bg-purple-500/20 text-purple-300 border-purple-400/30',
      'Express': 'bg-violet-600/20 text-violet-300 border-violet-400/30',
      'PostgreSQL': 'bg-indigo-600/20 text-indigo-300 border-indigo-400/30',
      'React Native': 'bg-purple-400/20 text-purple-300 border-purple-400/30'
    };
    return colors[tech] || 'bg-purple-500/20 text-purple-300 border-purple-400/30';
  };

  return (
    <section id="projects" className="py-24 bg-gray-950 relative overflow-hidden">
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
              Portfolio
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed max-w-3xl mx-auto">
            Crafting digital experiences with cutting-edge technologies and innovative solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm ${
                filter === category
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30 shadow-lg shadow-purple-500/20'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-purple-300 border border-white/10 hover:border-purple-400/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative ${
                animateCards ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:bg-white/10 group-hover:scale-105">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <Star size={12} className="mr-1" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                  }`}>
                    {project.status}
                  </div>
                </div>

                {/* Image Section */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent" />
                  
                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-white hover:text-purple-300 hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-110 border border-white/20"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-500/20 backdrop-blur-sm p-3 rounded-full text-purple-300 hover:bg-purple-500/30 transition-all duration-300 transform hover:scale-110 border border-purple-400/30"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Title and Year */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-400 flex items-center ml-2">
                      <Calendar size={14} className="mr-1" />
                      {project.year}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${getTechColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-xs border border-white/10">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Star size={14} className="mr-1 text-yellow-400" />
                        {project.stats.stars}
                      </div>
                      <div className="flex items-center">
                        <Eye size={14} className="mr-1" />
                        {project.stats.views}k
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-300 transition-colors duration-300"
                        title="View Code"
                      >
                        <Code size={16} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-300 transition-colors duration-300"
                        title="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-fuchsia-500/10 rounded-3xl blur-xl"></div>
          
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 text-center">
            <div className="mb-6">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                Let's Create Something Amazing
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                Ready to bring your ideas to life? I'm passionate about creating innovative solutions 
                that make a difference. Let's collaborate and build the future together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Start a Project
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>

              <button 
                onClick={() => window.open('mailto:lakshya@example.com', '_blank')}
                className="px-8 py-4 border border-purple-400/30 text-purple-300 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:bg-purple-500/10 backdrop-blur-sm"
              >
                <span className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Email
                </span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex justify-center items-center gap-8 flex-wrap text-sm text-gray-400">
                <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-purple-300 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 (234) 567-890
                </a>
                <a href="https://linkedin.com/in/lakshyaasthana" className="flex items-center gap-2 hover:text-purple-300 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="https://github.com/lakshyaasthana" className="flex items-center gap-2 hover:text-purple-300 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
