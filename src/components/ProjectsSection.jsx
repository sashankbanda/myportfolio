import { useState, useRef, useEffect } from 'react';
import portfolioData from '../data.json';
import ProjectTimeline from '../ProjectTimeline';
import ProjectDetailModal from './ProjectDetailModal';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const projectRefs = useRef([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // This logic remains the same and will work with the new structure
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setActiveProjectIndex(index);
            }
          }
        });
      },
      {
        root: scrollContainerRef.current,
        rootMargin: '0px 0px -50% 0px',
        threshold: 0,
      }
    );

    const currentRefs = projectRefs.current;
    currentRefs.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      {/* This is the new, main "glassmorphism" container, styled like your Education section */}
      <div className="max-w-6xl w-full h-[90vh] p-6 md:p-12 rounded-2xl bg-gray-900/70 backdrop-blur-sm card-glow flex flex-col">
        
        {/* Title now lives inside the main card */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-8">
          My Projects
        </h2>

        {/* This is now the INNER scrollable area, which fills the rest of the card */}
        <div ref={scrollContainerRef} className="relative flex-grow overflow-y-scroll no-scrollbar pr-4">
          <div className="space-y-24">
            {portfolioData.projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => (projectRefs.current[index] = el)}
                className={`group flex flex-col md:flex-row items-center gap-8 md:gap-12 
                           ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* --- Image Section --- */}
                <div className="w-full md:w-1/2">
                  <a href={project.liveLink && project.liveLink !== "#" ? project.liveLink : project.githubLink} target="_blank" rel="noopener noreferrer">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="rounded-lg shadow-xl object-cover object-top w-full h-auto 
                                 transform transition-all duration-500 ease-in-out 
                                 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-pink-500/20"
                    />
                  </a>
                </div>

                {/* --- Content Section --- */}
                <div className="w-full md:w-1/2 flex flex-col">
                    <p className="text-sm font-bold text-pink-400 mb-2">Featured Project</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h3>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-6">
                        <p className="text-gray-300 text-base">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map(tech => (
                        <span key={tech} className="bg-gray-700/60 text-gray-300 text-sm font-medium px-3 py-1 rounded-full cursor-default transition-colors hover:bg-gray-700">
                            {tech}
                        </span>
                        ))}
                    </div>
                    <div className="mt-auto flex items-center gap-4 pt-4">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" title="View on GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35.0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35.0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
                        </a>
                        <button onClick={() => setSelectedProject(project)} className="px-4 py-2 text-sm font-semibold text-gray-300 border-2 border-gray-600 rounded-lg hover:bg-gray-700 hover:border-gray-500 transition-colors">
                            Read More
                        </button>
                        {project.liveLink && project.liveLink !== "#" && (
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="ml-auto px-4 py-2 text-sm font-semibold text-white bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors flex items-center gap-2" title="View Live Project">
                                Live Site
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                            </a>
                        )}
                    </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline now lives inside the INNER scrollable area to be positioned correctly */}
          <ProjectTimeline 
            projectRefs={projectRefs} 
            activeProjectIndex={activeProjectIndex} 
            scrollContainerRef={scrollContainerRef}
          />
        </div>
      </div>

      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
};

export default ProjectsSection;