import React from 'react';
import { Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react';
import portfolioData from '../data.json';
import ContactForm from './ContactForm';
const ContactSection = () => {
  return (
    <div className="max-w-4xl w-full p-6 md:p-12 rounded-2xl bg-gray-900 bg-opacity-70 backdrop-blur-sm card-glow">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center">Get in Touch</h2>
      <div className="text-center text-base md:text-lg text-gray-300 space-y-4">
        <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* <div className="flex items-center space-x-2">
            <Mail size={24} className="text-purple-400" />
            <a href={`mailto:${portfolioData.contact.email}`} className="text-pink-400 hover:underline transition-colors duration-300">
              {portfolioData.contact.email}
            </a>
          </div> */}
        <div className="flex items-center space-x-2">
            <Mail size={24} className="text-purple-400" />
            <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-pink-400 hover:underline transition-colors duration-300"
                aria-label="Scroll to Contact Form"
            >
                Contact Form
            </button>
        </div>
          <div className="flex items-center space-x-2">
            <Phone size={24} className="text-green-400" />
            <a href={`tel:${portfolioData.contact.phone}`} className="text-blue-400 hover:underline transition-colors duration-300">
              {portfolioData.contact.phone}
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-6 mt-8">
        <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="social-link group">
          <Github size={36} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
        </a>
        <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-link group">
          <Linkedin size={36} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
        </a>
        <a href={portfolioData.contact.instagram} target="_blank" rel="noopener noreferrer" className="social-link group">
          <Instagram size={36} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
        </a>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactSection;