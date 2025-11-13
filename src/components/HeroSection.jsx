import { Download, Eye, Github, Linkedin, Mail } from 'lucide-react';
import portfolioData from '../data.json';
const HeroSection = ({ setActiveSection }) => {
  return (
    <div className="text-center p-6 md:p-16 rounded-2xl max-w-4xl w-full">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tighter animate-fade-in">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Hello, I'm {portfolioData.name}.
        </span>
        <br /> {/* Add a line break */}
        <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 tracking-small">
          {portfolioData.title} {/* Display the new title */}
        </span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in delay-200">
        {portfolioData.bio}
      </p>
      <div className="flex justify-center space-x-4 mb-8">
        <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
          <Linkedin size={28} />
        </a>
        <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="social-link">
          <Github size={28} />
        </a>
        <a href={`mailto:${portfolioData.contact.email}`} className="social-link">
          <Mail size={28} />
        </a>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button
          onClick={() => setActiveSection('projects')}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full shadow-lg
                     hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 animate-pulse-neon"
        >
          View My Work
        </button>
        <div className="flex items-center gap-4">
          <a
            href="/B_SASHANK_RESUME_u_v1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 text-white font-bold rounded-full shadow-lg
                       hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
          >
            <Eye size={20} />
            View Resume
          </a>
          <a
            href="/B_SASHANK_RESUME_u_v1.pdf"
            download
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 text-white font-bold rounded-full shadow-lg
                       hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
          >
            <Download size={20} />
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;