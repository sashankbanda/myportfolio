import React, { useEffect, useState } from 'react';

const ProjectTimeline = ({ projectRefs, activeProjectIndex, scrollContainerRef }) => {
  const [ballPosition, setBallPosition] = useState(0);
  const [nodePositions, setNodePositions] = useState([]);
  const [lineTop, setLineTop] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);

  // This is the array of colors the ball will cycle through.
  const accentColors = [
    '59 130 246',   // Cool Blue
    '22 163 74',    // Vibrant Green
    '245 158 11',   // Amber Gold
    '219 39 119',   // Hot Pink
  ];

  // The active color is selected based on the current project index.
  const activeColor = accentColors[activeProjectIndex % accentColors.length];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const updateTimeline = () => {
      if (projectRefs.current.length === 0) return;

      const firstProject = projectRefs.current[0];
      const lastProject = projectRefs.current[projectRefs.current.length - 1];
      
      const pathStart = firstProject.offsetTop + firstProject.clientHeight / 2;
      const pathEnd = lastProject.offsetTop + lastProject.clientHeight / 2;
      const pathHeight = pathEnd - pathStart;

      setLineTop(pathStart);
      setLineHeight(pathHeight);

      const positions = projectRefs.current.map(ref => ref ? ref.offsetTop + ref.clientHeight / 2 : 0);
      setNodePositions(positions);
      
      const scrollMax = container.scrollHeight - container.clientHeight;
      const scrollProgress = scrollMax > 0 ? container.scrollTop / scrollMax : 0;
      const clampedScrollProgress = Math.max(0, Math.min(scrollProgress, 1));
      const newBallPosition = pathStart + (pathHeight * clampedScrollProgress);
      setBallPosition(newBallPosition);
    };
    
    updateTimeline();
    container.addEventListener('scroll', updateTimeline);
    window.addEventListener('resize', updateTimeline);

    return () => {
      container.removeEventListener('scroll', updateTimeline);
      window.removeEventListener('resize', updateTimeline);
    };
  }, [projectRefs, scrollContainerRef, activeProjectIndex]);


  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full z-10 hidden md:block pointer-events-none">
      {/* Dotted Vertical Line */}
      <div 
        className="absolute left-1/2 border-l-2 border-dashed border-gray-600 opacity-30"
        style={{
          transform: 'translateX(-50%)',
          top: `${lineTop}px`,
          height: `${lineHeight}px`,
        }}
      ></div>

      {/* Background Static Nodes */}
      {nodePositions.map((pos, index) => (
        <div
          key={index}
          style={{
            top: `${pos}px`,
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          className="w-3 h-3 rounded-full bg-gray-700 border-2 border-gray-600"
        />
      ))}

      {/* The Moving Ball */}
      <div
        style={{
          '--ball-color': activeColor, // The active color is passed as a CSS variable
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: `translate(-50%, ${ballPosition}px) translateZ(0)`,
          transition: 'transform 0.1s linear',
        }}
      >
        <div 
          className="w-6 h-6 rounded-full border-2 border-white transition-colors duration-300"
          style={{ 
            backgroundColor: `rgb(var(--ball-color))`, // The ball's color is set here
            boxShadow: `0 0 6px rgb(var(--ball-color)), 0 0 12px rgb(var(--ball-color))` // The glow color is set here
          }}
        />
      </div>
    </div>
  );
};

export default ProjectTimeline;