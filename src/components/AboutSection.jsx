import React from 'react';
import portfolioData from '../data.json';
const AboutSection = () => {
  return (
    <div className="max-w-4xl w-full p-6 md:p-12 rounded-2xl bg-gray-900 bg-opacity-70 backdrop-blur-sm card-glow">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center">About Me</h2>
      <div className="space-y-6 text-base md:text-lg text-gray-300">
        <p>
          {portfolioData.about.intro}
        </p>
        <div className="space-y-4">
          {portfolioData.about.expertise.split('\n\n').map((paragraph, index) => {
            const colonIndex = paragraph.indexOf(':');
            if (colonIndex !== -1) {
              const heading = paragraph.substring(0, colonIndex + 1);
              const description = paragraph.substring(colonIndex + 1);
              return (
                <p key={index}>
                  <strong className="font-bold text-pink-400">{heading}</strong>
                  {description}
                </p>
              );
            }
            return <p key={index}>{paragraph}</p>;
          })}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">My Skills</h3>
        <div className="space-y-10">
          {/* Main category loop (e.g., "Web Development") */}
          {Object.entries(portfolioData.skills).map(([mainCategory, subCategories]) => (
            <div key={mainCategory}>
              <h4 className="text-2xl font-bold text-white mb-6">{mainCategory}</h4>
              
              {/* Sub-category loop (e.g., "Backend") */}
              {Object.entries(subCategories).map(([subCategory, details]) => (
                <div key={subCategory} className="mb-6 last:mb-0">
                  <h5 className="text-xl font-semibold text-pink-400 mb-4">{subCategory}</h5>
                  <div className="pl-4 space-y-4">
                    
                    {/* Skill type loop using a Grid layout for alignment */}
                    {Object.entries(details).map(([type, list]) => (
                      <div key={type} className="grid grid-cols-[140px_1fr] items-start gap-x-5">
                        <div className="text-right font-medium text-purple-400 pt-1">
                          {type.replace(' & Markup', '')}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {list.map(item => (
                            <span 
                              key={item} 
                              className="bg-gray-800/70 border border-white/10 text-gray-200 px-3 py-1 text-sm rounded-full 
                                         font-medium transition-all duration-200 cursor-default
                                         hover:bg-purple-600 hover:border-purple-500 hover:scale-105"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AboutSection;