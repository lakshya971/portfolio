import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code, Star, Eye, Calendar, Filter } from 'lucide-react';

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

  const categories = ['All', 'Featured', 'Full-Stack', 'Frontend', 'Backend', 'Mobile'];

  const filteredProjects = projects.filter(project => {
    if (filter === 'All') return true;
    if (filter === 'Featured') return project.featured;
    return project.category === filter;
  });
  // Initialize animation when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateCards(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const getTechColor = (tech) => {
    const colors = {
      'React': 'bg-white/20 text-gray-300 border-white/30',
      'Node.js': 'bg-gray-400/20 text-gray-300 border-gray-400/30',
      'MongoDB': 'bg-white/20 text-gray-300 border-white/30',
      'Firebase': 'bg-gray-300/20 text-gray-300 border-gray-400/30',
      'TypeScript': 'bg-white/20 text-gray-300 border-white/30',
      'Next.js': 'bg-gray-500/20 text-gray-300 border-gray-400/30',
      'TailwindCSS': 'bg-white/20 text-gray-300 border-white/30',
      'Express': 'bg-gray-400/20 text-gray-300 border-gray-400/30',
      'PostgreSQL': 'bg-white/20 text-gray-300 border-white/30',
      'React Native': 'bg-gray-300/20 text-gray-300 border-gray-400/30'
    };
    return colors[tech] || 'bg-white/20 text-gray-300 border-white/30';
  };
  return (
    <section id="projects" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-gray-300 bg-white/10 px-4 py-2 rounded-full border border-white/20">
              Portfolio
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
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
                  ? 'bg-white/20 text-white border border-white/30 shadow-lg shadow-white/20'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-300 border border-white/10 hover:border-white/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/8 group-hover:scale-[1.02]">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-white text-black px-3 py-1 rounded-full text-xs font-bold flex items-center">
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
                <div className="relative overflow-hidden h-56">                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-white hover:text-gray-300 hover:bg-white/20 transition-all duration-200 transform hover:scale-105 border border-white/20"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-all duration-200 transform hover:scale-105 border border-white/30"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Title and Year */}
                  <div className="flex items-start justify-between mb-3">                    <h3 className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors duration-200">
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
                    
                    <div className="flex items-center gap-3">                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
                        title="View Code"
                      >
                        <Code size={16} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
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
      </div>
    </section>
  );
};

export default Projects;
