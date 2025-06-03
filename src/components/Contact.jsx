// src/components/Contact.js
import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Phone, MapPin, Send, MessageCircle, Clock, Star, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [animateCards, setAnimateCards] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateCards(true);
        }
      },
      { threshold: 0.2 }
    );

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setSubmitSuccess(true);
        setIsSubmitting(false);
        
        // Reset form after success
        setTimeout(() => {
          setFormData({ name: '', email: '', subject: '', message: '' });
          setSubmitSuccess(false);
        }, 2000);
      }, 1500);
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'asthanalakshya2005@gmail.com',
      link: 'asthanalakshya2005@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '+91 700-799-2086',
      link: 'tel:+91-7007992086',
      description: 'Available Mon-Fri 9AM-6PM'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      info: 'linkedin.com/in/Lakshya Asthana',
      link: 'https://www.linkedin.com/in/lakshya-asthana-132941292/',
      description: 'Let\'s connect professionally'
    },
    {
      icon: Github,
      title: 'GitHub',
      info: 'github.com/lakshya971',
      link: 'https://github.com/lakshya971',
      description: 'Check out my repositories'
    }
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Emergency only' }
  ];

  const responseTime = {
    email: '< 24 hours',
    phone: '< 2 hours',
    linkedin: '< 12 hours'
  };

  return (
    <section id="contact" className="py-24 bg-gray-950 relative overflow-hidden">
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
              Let's Connect
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Information - Left Column */}
          <div className="lg:col-span-1 space-y-8">
            {/* Quick Stats */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Response Time</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Email</span>
                  <span className="text-purple-300 font-medium">{responseTime.email}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Phone</span>
                  <span className="text-purple-300 font-medium">{responseTime.phone}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">LinkedIn</span>
                  <span className="text-purple-300 font-medium">{responseTime.linkedin}</span>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div
                    key={index}
                    className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:bg-white/10 ${
                      animateCards ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {contact.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-1">{contact.description}</p>
                        <a 
                          href={contact.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-300 hover:text-purple-200 transition-colors text-sm"
                        >
                          {contact.info}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form - Right Column */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Send a Message</h3>
                <p className="text-gray-400">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-purple-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-purple-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-purple-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-purple-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 resize-none backdrop-blur-sm"
                    placeholder="Tell me about your project or question..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || submitSuccess}
                  className={`group relative w-full px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 overflow-hidden ${
                    submitSuccess
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-purple-500 to-violet-600 text-white hover:scale-105 shadow-lg hover:shadow-purple-500/25'
                  }`}
                >
                  {!submitSuccess && (
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                  
                  <span className="relative flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : submitSuccess ? (
                      <>
                        <CheckCircle size={20} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send size={20} className="transition-transform group-hover:translate-x-1" />
                        Send Message
                      </>
                    )}
                  </span>
                </button>

                <p className="text-gray-400 text-sm text-center">
                  * Required fields. Your information is safe and will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-fuchsia-500/10 rounded-3xl blur-xl"></div>
          
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 text-center">
            <div className="mb-6">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                Whether you have a clear vision or just an idea, I'm here to help bring it to life. 
                Let's schedule a call to discuss your project requirements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={() => window.open('mailto:lakshya@example.com?subject=Project Discussion', '_blank')}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-3">
                  <MessageCircle size={20} />
                  Schedule a Call
                </span>
              </button>

              <button 
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="px-8 py-4 border border-purple-400/30 text-purple-300 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:bg-purple-500/10 backdrop-blur-sm"
              >
                View Resume
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex justify-center items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                100% Client Satisfaction
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                50+ Projects Delivered
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-400" />
                Fast Response Time
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;