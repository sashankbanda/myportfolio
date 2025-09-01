import React from 'react';
import portfolioData from '../data.json';
const EducationSection = () => {
  return (
    <div className="max-w-4xl w-full p-6 md:p-12 rounded-2xl bg-gray-900 bg-opacity-70 backdrop-blur-sm card-glow">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center">Education</h2>
      <div className="space-y-8">
        {portfolioData.education.map((edu, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-purple-500/30">
            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-pink-500 rounded-full border-4 border-gray-900 animate-pulse-neon"></div>
            
            <h3 className="text-xl md:text-2xl font-bold text-white">{edu.institution}</h3>
            <p className="text-md text-gray-400 mt-1">{edu.degree}</p>
            <p className="text-sm text-gray-500 mt-1">{edu.duration}</p>
            <p className="text-lg font-semibold text-purple-400 mt-2">{edu.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;