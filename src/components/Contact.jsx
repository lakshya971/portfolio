// src/components/Contact.js
import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Phone, MapPin, Send, MessageCircle, Clock, Star, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

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
      emailjs.send(
        'service_dhareqf', // Service ID
        'template_359t16b', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        '9_pHeAViKRBpfApYw' // Public Key
      )
      .then(() => {
        setSubmitSuccess(true);
        setIsSubmitting(false);
        setTimeout(() => {
          setFormData({ name: '', email: '', subject: '', message: '' });
          setSubmitSuccess(false);
        }, 2000);
      })
      .catch(() => {
        setIsSubmitting(false);
        alert('Failed to send message. Please try again later.');
      });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'asthanalakshya2005@gmail.com',
      link: 'https://mail.google.com/mail/u/0/#inbox',
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
      link: 'https://www.linkedin.com/in/lakshya-asthana/',
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
    <section id="contact" className="py-24 bg-black relative overflow-hidden font-mono font-roboto">
      {/* Plain black background, no dots or overlays */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 font-mono font-roboto">
        {/* Header */}        <div className="text-center mb-20 font-mono font-roboto">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-gray-300 bg-white/10 px-4 py-2 rounded-full border border-white/20 font-mono font-roboto">
              Get in touch
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent font-mono font-roboto">
            Let's Talk
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed max-w-3xl mx-auto font-mono font-roboto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20 font-mono font-roboto">
          {/* Contact Information - Left Column */}
          <div className="lg:col-span-1 space-y-8">
            {/* Quick Stats */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 font-mono font-roboto">
              <h3 className="text-xl font-bold text-white mb-4 font-mono font-roboto">Response Time</h3>
              <div className="space-y-3">                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono font-roboto">Email</span>
                  <span className="text-gray-300 font-medium font-mono font-roboto">{responseTime.email}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono font-roboto">Phone</span>
                  <span className="text-gray-300 font-medium font-mono font-roboto">{responseTime.phone}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono font-roboto">LinkedIn</span>
                  <span className="text-gray-300 font-medium font-mono font-roboto">{responseTime.linkedin}</span>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4 font-mono font-roboto">
              <p className="text-lg text-gray-300 leading-relaxed font-mono font-roboto">
                You can reach out to me through any of the following channels. I look forward to connecting with you!
              </p>
              
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div
                    key={index}                    className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10 ${
                      animateCards ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-4">                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-black" size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white group-hover:text-gray-300 transition-colors">
                          {contact.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-1">{contact.description}</p>
                        <a 
                          href={contact.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-gray-200 transition-colors text-sm"
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
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 font-mono font-roboto">
              <div className="mb-8 font-mono font-roboto">
                <h3 className="text-3xl font-bold text-white mb-4 font-mono font-roboto">Send a Message</h3>
                <p className="text-gray-400 font-mono font-roboto">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 font-mono font-roboto">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 font-mono font-roboto">
                      Full Name *
                    </label>                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-white/40 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm font-mono font-roboto"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 font-mono font-roboto">
                      Email Address *
                    </label>                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-white/40 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm font-mono font-roboto"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-mono font-roboto">
                    Subject
                  </label>                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-white/40 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm font-mono font-roboto"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-mono font-roboto">
                    Message *
                  </label>                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-white/40 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 resize-none backdrop-blur-sm font-mono font-roboto"
                    placeholder="Tell me about your project or question..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || submitSuccess}                  className={`group relative w-full px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 overflow-hidden font-mono font-roboto ${
                    submitSuccess
                      ? 'bg-green-500 text-white'
                      : 'bg-white text-black hover:scale-105 hover:bg-gray-200 shadow-lg hover:shadow-white/25'
                  }`}
                >
                  {!submitSuccess && (
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono font-roboto"></div>
                  )}
                  
                  <span className="relative flex items-center justify-center gap-3 font-mono font-roboto">
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

                <p className="text-gray-400 text-sm text-center font-mono font-roboto">
                  * Required fields. Your information is safe and will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>        {/* CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-gray-300/5 to-gray-400/5 rounded-3xl blur-xl"></div>
          
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 text-center font-mono font-roboto">
            <div className="mb-6">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent font-mono font-roboto">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto font-mono font-roboto">
                Whether you have a clear vision or just an idea, I'm here to help bring it to life. 
                Let's schedule a call to discuss your project requirements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={() => window.open('mailto:lakshya@example.com?subject=Project Discussion', '_blank')}
                className="group relative px-8 py-4 bg-white text-black rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 overflow-hidden hover:bg-gray-200"
              >
                <span className="relative flex items-center gap-3 font-mono font-roboto">
                  <MessageCircle size={20} />
                  Schedule a Call
                </span>
              </button>

              <button 
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="px-8 py-4 border border-white/30 text-gray-300 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:bg-white/10 backdrop-blur-sm hover:text-white"
              >
                View Resume
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex justify-center items-center gap-8 text-sm text-gray-400 font-mono font-roboto">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-gray-300" />
                100% Client Satisfaction
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gray-300" />
                50+ Projects Delivered
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-300" />
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