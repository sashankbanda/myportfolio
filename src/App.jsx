// import { useState, useRef, useEffect } from 'react';
// import { Github, Linkedin, Mail, Code, Star, User, Home, Lightbulb, Send, Download ,Phone } from 'lucide-react';

// // Main App component
// export default function App() {
//   const [activeSection, setActiveSection] = useState('home');

//   const renderSection = () => {
//     switch (activeSection) {
//       case 'home':
//         return <HeroSection setActiveSection={setActiveSection} />;
//       case 'about':
//         return <AboutSection />;
//       case 'projects':
//         return <ProjectsSection />;
//       case 'contact':
//         return <ContactSection />;
//       default:
//         return <HeroSection setActiveSection={setActiveSection} />;
//     }
//   };

//   return (
//     <div className="relative min-h-screen bg-gray-950 text-gray-200 font-inter">
//       {/* Inject global styles using a dedicated component */}
//       <GlobalStyles />
//       {/* Background animation component */}
//       <ParticleBackground />
//       {/* Main content container */}
//       <main className="relative z-10 flex flex-col items-center justify-center px-4 py-12 min-h-screen">
//         {renderSection()}
//       </main>
//       {/* Navigation bar - now more responsive */}
//       <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
//     </div>
//   );
// }

// // Navbar component
// const Navbar = ({ activeSection, setActiveSection }) => {
//   const navItems = [
//     { name: 'home', icon: Home, label: 'Home' },
//     { name: 'about', icon: User, label: 'About' },
//     { name: 'projects', icon: Lightbulb, label: 'Projects' },
//     { name: 'contact', icon: Send, label: 'Contact' }
//   ];

//   const NavLink = ({ name, icon: Icon, label }) => (
//     <button
//       onClick={() => setActiveSection(name)}
//       className={`flex items-center px-4 py-2 mx-1 rounded-full transition-all duration-300
//         ${activeSection === name
//           ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg transform scale-105'
//           : 'bg-gray-800 hover:bg-gray-700 hover:text-white'
//         }
//       `}
//     >
//       <Icon size={20} className="mr-2" />
//       <span className="hidden sm:inline">{label}</span>
//     </button>
//   );

//   return (
//     <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 p-2 rounded-full bg-gray-900 shadow-xl">
//       <ul className="flex items-center space-x-2">
//         {navItems.map(item => (
//           <li key={item.name}>
//             <NavLink {...item} />
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// // Hero Section Component
// const HeroSection = ({ setActiveSection }) => {
//   return (
//     <div className="text-center p-6 md:p-16 rounded-2xl max-w-4xl w-full">
//       <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tighter animate-fade-in">
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
//           Hello, I'm Banda Sashank.
//         </span>
//       </h1>
//       <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in delay-200">
//         A B.Tech in Computer Science and Engineering student at Vellore Institute of Technology, Chennai.
//       </p>
//       <div className="flex justify-center space-x-4 mb-8">
//         <a href="https://in.linkedin.com/in/banda-sashank-578893320" target="_blank" rel="noopener noreferrer" className="social-link">
//           <Linkedin size={28} />
//         </a>
//         <a href="https://github.com/sashankbanda" target="_blank" rel="noopener noreferrer" className="social-link">
//           <Github size={28} />
//         </a>
//         <a href="mailto:sashankbanda@gmail.com" className="social-link">
//           <Mail size={28} />
//         </a>
//       </div>
//       <div className="flex flex-col sm:flex-row justify-center gap-4">
//         <button
//           onClick={() => setActiveSection('projects')}
//           className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full text-lg shadow-lg
//                      hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 animate-pulse-neon"
//         >
//           View My Work
//         </button>
//         <a 
//           href="/B_Sashank_Main_Resume.pdf" 
//           download 
//           className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-700 text-white font-bold rounded-full text-lg shadow-lg
//                      hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
//         >
//           <Download size={20} />
//           Download Resume
//         </a>
//       </div>
//     </div>
//   );
// };

// // About Section Component
// const AboutSection = () => {
//   const allSkills = [
//     'Java', 'Python', 'Html', 'CSS', 'React', 'JavaScript', 'Node.js', 'Express.js',
//     'Spring Boot', 'Tailwind CSS', 'Flutter', 'Next.js', 'MySQL', 'Firebase',
//     'PostgreSQL', 'MongoDB', 'Windows', 'Linux', 'Git'
//   ];

//   return (
//     <div className="max-w-4xl w-full p-6 md:p-12 rounded-2xl bg-gray-900 bg-opacity-70 backdrop-blur-sm card-glow">
//       <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center">About Me</h2>
//       <div className="space-y-6 text-base md:text-lg text-gray-300">
//         <p>
//           I am an enthusiastic and motivated computer science and engineering student with a strong passion for technology. My academic journey has provided me with a solid foundation in programming and software development. I am always looking for opportunities to apply my skills to real-world problems and contribute to innovative projects.
//         </p>
//         <p>
//           My technical expertise spans across various domains, from full-stack development to mobile applications. I am particularly interested in AI and machine learning applications, having developed projects using tools like OpenAI Whisper and GROQ APIs. I thrive in collaborative environments and enjoy leading teams to create engaging content and effective solutions.
//         </p>
//       </div>
//       <div className="mt-8">
//         <h3 className="text-2xl font-bold text-white mb-4">My Skills</h3>
//         <div className="flex flex-wrap gap-3 md:gap-4">
//           {allSkills.map(skill => (
//             <span key={skill} className="bg-gray-800 text-purple-400 px-4 py-2 rounded-full font-medium transition-colors duration-300 hover:bg-purple-900 hover:text-white">
//               {skill}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Projects Section Component
// const ProjectsSection = () => {
//   const projects = [
//     {
//       title: '📍Speak to Learn – Turn Audio into Smart Study Material',
//       description: 'I built this project during my internship at SASNEVI. It takes spoken audio, turns it into a PDF, and uploads it to an AI tool. Users can ask questions or get multiple-choice quizzes based on the content. It helps make learning from audio easier and more interactive.',
//       tech: ['Python', 'Html', 'CSS', 'React', 'JavaScript'],
//       githubLink: 'https://github.com/sashankbanda/Audio-to-text-pdf', // Placeholder
//       githubLink: 'https://github.com/sashankbanda/Query-PDF', // Placeholder
//     },
//     {
//       title: 'YouTube Auto Uploader',
//       description: 'Built an automated uploader to schedule and publish videos to YouTube using the YouTube Data API. Prevents duplicate uploads by verifying filenames against existing video titles.',
//       tech: ['Node.js', 'OAuth 2.0', 'YouTube Data API'],
//       githubLink: 'https://github.com/sashankbanda/youtube-auto-uploader', // Placeholder
//     },
//     {
//       title: 'Audio to Text PDF Converter',
//       description: 'A full-stack app to convert audio files to text using OpenAI Whisper with real-time transcription. Features live SSE updates, progress bars, and PDF generation post transcription.',
//       tech: ['Flask', 'React.js', 'OpenAI Whisper', 'SSE'],
//       githubLink: 'https://github.com/sashankbanda/Audio-to-text-pdf', // Placeholder
//     },
//     {
//       title: 'QueryPDF (AI PDF Question Answering)',
//       description: 'Developed a tool to query PDF content using LLMs via GROQ and Google APIs. Supports secure API-based interaction, a modular Flask backend, and a React frontend.',
//       tech: ['Python', 'React.js', 'GROQ API', 'Google API'],
//       githubLink: 'https://github.com/sashankbanda/Query-PDF', // Placeholder
//     },
//     {
//       title: 'Audio to Text PDF to query solver',
//       description: 'Intenship: Contributed to a client project at SASNEVI Startup Company by developing a tool to convert audio to text and generate PDFs. This was part of a larger project including a Query PDF Bot.',
//       tech: ['Flask', 'React.js', 'OpenAI Whisper', 'Python'],
//       githubLink: 'https://github.com/sashankbanda/Audio-to-text-pdf', // Placeholder
//     },
//   ];

//   return (
//     <div className="max-w-4xl w-full p-6 md:p-12 rounded-2xl bg-gray-900 bg-opacity-70 backdrop-blur-sm card-glow">
//       <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center">My Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//         {projects.map((project, index) => (
//           <div key={index} className="bg-gray-800 p-6 rounded-xl transition-all duration-300 hover:bg-gray-700 hover:scale-105 transform">
//             <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
//             <p className="text-gray-400 mb-4 text-sm md:text-base">{project.description}</p>
//             <div className="flex flex-wrap gap-2 mb-4">
//               {project.tech.map(tech => (
//                 <span key={tech} className="bg-gray-700 text-pink-400 text-xs md:text-sm px-3 py-1 rounded-full">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//             {project.githubLink && (
//               <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300">
//                 <Code size={18} className="mr-2" />
//                 View Project on GitHub
//               </a>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Contact Section Component
// // import { Phone } from 'lucide-react';

// const ContactSection = () => {
//   return (
//     <div className="max-w-4xl w-full p-6 md:p-12 rounded-2xl bg-gray-900 bg-opacity-70 backdrop-blur-sm card-glow">
//       <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center">Get in Touch</h2>

//       <div className="text-center text-base md:text-lg text-gray-300 space-y-4">
//         <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>

//         {/* Email */}
//         <div className="flex justify-center items-center space-x-2">
//           <Mail size={24} className="text-purple-400" />
//           <a
//             href="mailto:sashankbanda@gmail.com"
//             className="text-pink-400 hover:underline transition-colors duration-300"
//           >
//             sashankbanda@gmail.com
//           </a>
//         </div>

//         {/* Phone */}
//         <div className="flex justify-center items-center space-x-2">
//           <Phone size={24} className="text-green-400" />
//           <a
//             href="tel:+918074782067"
//             className="text-blue-400 hover:underline transition-colors duration-300"
//           >
//             +91 8074782067
//           </a>
//         </div>
//       </div>

//       {/* Social Links */}
//       <div className="flex justify-center space-x-6 mt-8">
//         <a
//           href="https://github.com/sashankbanda"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="social-link group"
//         >
//           <Github size={36} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
//         </a>
//         <a
//           href="https://in.linkedin.com/in/banda-sashank-578893320"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="social-link group"
//         >
//           <Linkedin size={36} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
//         </a>
//         <a href="#" className="social-link group">
//           <Star size={36} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
//         </a>
//       </div>
//     </div>
//   );
// };

// // export default ContactSection;


// // ParticleBackground Component using Three.js
// const ParticleBackground = () => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     const THREE = window.THREE;
//     if (!THREE) {
//       console.error("Three.js not loaded. Please ensure the library is included via a script tag.");
//       return;
//     }

//     const currentMount = mountRef.current;
    
//     if (!currentMount) return;

//     // Set up Three.js scene, camera, and renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     currentMount.appendChild(renderer.domElement);

//     camera.position.z = 50;

//     // Handle window resizing
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener('resize', handleResize);

//     // Create particles geometry
//     const particlesGeometry = new THREE.BufferGeometry();
//     const particlesCount = 2000;
//     const positions = new Float32Array(particlesCount * 3);
//     for (let i = 0; i < particlesCount * 3; i++) {
//       positions[i] = (Math.random() - 0.5) * 200;
//     }
//     particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

//     // Create particles material
//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.1,
//       color: new THREE.Color('#f472b6'), // Neon pink color
//       transparent: true,
//       opacity: 0.8
//     });

//     const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
//     scene.add(particlesMesh);

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       particlesMesh.rotation.y += 0.0005;
//       particlesMesh.rotation.x += 0.0002;
//       renderer.render(scene, camera);
//     };
//     animate();

//     // Cleanup function to remove event listener and Three.js elements
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (currentMount && renderer.domElement) {
//         currentMount.removeChild(renderer.domElement);
//       }
//     };
//   }, []);

//   return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full z-0" />;
// };

// // This component encapsulates the logic for injecting global styles
// const GlobalStyles = () => {
//   useEffect(() => {
//     const customStyles = `
//       @keyframes fade-in {
//         from { opacity: 0; transform: translateY(20px); }
//         to { opacity: 1; transform: translateY(0); }
//       }

//       .animate-fade-in {
//         animation: fade-in 0.8s ease-out forwards;
//         opacity: 0;
//       }

//       .delay-200 { animation-delay: 0.2s; }

//       @keyframes pulse-neon {
//         0%, 100% { box-shadow: 0 0 5px #f472b6, 0 0 10px #f472b6; }
//         50% { box-shadow: 0 0 10px #f472b6, 0 0 20px #f472b6; }
//       }
//       .animate-pulse-neon {
//         animation: pulse-neon 2s infinite;
//       }
      
//       .card-glow {
//           box-shadow: 0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.2);
//       }

//       .social-link {
//         transition: transform 0.3s ease-in-out;
//       }
//       .social-link:hover {
//         transform: scale(1.1);
//       }
//     `;
//     const style = document.createElement('style');
//     style.innerHTML = customStyles;
//     document.head.appendChild(style);
//     return () => {
//       document.head.removeChild(style);
//     };
//   }, []);
//   return null;
// };

import { useState, useRef, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Star, User, Home, Lightbulb, Send, Download, Phone } from 'lucide-react';
import portfolioData from './data.json'; // Import the JSON data

// Main App component
export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection setActiveSection={setActiveSection} />;
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-950 text-gray-200 font-inter">
      {/* Inject global styles using a dedicated component */}
      <GlobalStyles />
      {/* Background animation component */}
      <ParticleBackground />
      {/* Main content container */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 py-12 min-h-screen">
        {renderSection()}
      </main>
      {/* Navigation bar - now more responsive */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
}

// Navbar component
const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { name: 'home', icon: Home, label: 'Home' },
    { name: 'about', icon: User, label: 'About' },
    { name: 'projects', icon: Lightbulb, label: 'Projects' },
    { name: 'contact', icon: Send, label: 'Contact' }
  ];

  const NavLink = ({ name, icon: Icon, label }) => (
    <button
      onClick={() => setActiveSection(name)}
      className={`flex items-center px-4 py-2 mx-1 rounded-full transition-all duration-300
        ${activeSection === name
          ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg transform scale-105'
          : 'bg-gray-800 hover:bg-gray-700 hover:text-white'
        }
      `}
    >
      <Icon size={20} className="mr-2" />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 p-2 rounded-full bg-gray-900 shadow-xl">
      <ul className="flex items-center space-x-2">
        {navItems.map(item => (
          <li key={item.name}>
            <NavLink {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Hero Section Component
const HeroSection = ({ setActiveSection }) => {
  return (
    <div className="text-center p-6 md:p-16 rounded-2xl max-w-4xl w-full">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tighter animate-fade-in">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Hello, I'm {portfolioData.name}.
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
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={() => setActiveSection('projects')}
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full text-lg shadow-lg
                     hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 animate-pulse-neon"
        >
          View My Work
        </button>
        <a
          href="/B_Sashank_Main_Resume.pdf"
          download
          className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-700 text-white font-bold rounded-full text-lg shadow-lg
                     hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
        >
          <Download size={20} />
          Download Resume
        </a>
      </div>
    </div>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <div className="max-w-4xl w-full p-6 md:p-12 rounded-2xl bg-gray-900 bg-opacity-70 backdrop-blur-sm card-glow">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center">About Me</h2>
      <div className="space-y-6 text-base md:text-lg text-gray-300">
        <p>
          {portfolioData.about.intro}
        </p>
        <p>
          {portfolioData.about.expertise}
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-white mb-4">My Skills</h3>
        <div className="flex flex-wrap gap-3 md:gap-4">
          {portfolioData.skills.map(skill => (
            <span key={skill} className="bg-gray-800 text-purple-400 px-4 py-2 rounded-full font-medium transition-colors duration-300 hover:bg-purple-900 hover:text-white">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Projects Section Component
const ProjectsSection = () => {
  return (
    <div className="max-w-4xl w-full p-6 md:p-12 rounded-2xl bg-gray-900 bg-opacity-70 backdrop-blur-sm card-glow">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl transition-all duration-300 hover:bg-gray-700 hover:scale-105 transform">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4 text-sm md:text-base">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map(tech => (
                <span key={tech} className="bg-gray-700 text-pink-400 text-xs md:text-sm px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300">
                <Code size={18} className="mr-2" />
                View Project on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending...');

    try {
      // In a real application, you would replace this URL with your backend API endpoint.
      // For now, this is a placeholder to demonstrate the form's front-end functionality.
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        setFormStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-lg text-white placeholder-gray-500
                   focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-lg text-white placeholder-gray-500
                   focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="4"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-lg text-white placeholder-gray-500
                   focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
      ></textarea>
      <button
        type="submit"
        className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full text-lg shadow-lg
                   hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
      >
        Send Message
      </button>
      {formStatus && (
        <p className="mt-4 text-center text-sm font-medium">
          {formStatus}
        </p>
      )}
    </form>
  );
};


// Contact Section Component
const ContactSection = () => {
  return (
    <div className="max-w-4xl w-full p-6 md:p-12 rounded-2xl bg-gray-900 bg-opacity-70 backdrop-blur-sm card-glow">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center">Get in Touch</h2>
      <div className="text-center text-base md:text-lg text-gray-300 space-y-4">
        <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <div className="flex items-center space-x-2">
            <Mail size={24} className="text-purple-400" />
            <a href={`mailto:${portfolioData.contact.email}`} className="text-pink-400 hover:underline transition-colors duration-300">
              {portfolioData.contact.email}
            </a>
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
        <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-link group">
          <Star size={36} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
        </a>
      </div>
      <ContactForm />
    </div>
  );
};

// ParticleBackground Component using Three.js
const ParticleBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const THREE = window.THREE;
    if (!THREE) {
      console.error("Three.js not loaded. Please ensure the library is included via a script tag.");
      return;
    }

    const currentMount = mountRef.current;
    
    if (!currentMount) return;

    // Set up Three.js scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMount.appendChild(renderer.domElement);

    camera.position.z = 50;

    // Handle window resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Create particles geometry
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 200;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Create particles material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: new THREE.Color('#f472b6'), // Neon pink color
      transparent: true,
      opacity: 0.8
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.0005;
      particlesMesh.rotation.x += 0.0002;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup function to remove event listener and Three.js elements
    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full z-0" />;
};

// This component encapsulates the logic for injecting global styles
const GlobalStyles = () => {
  useEffect(() => {
    const customStyles = `
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .animate-fade-in {
        animation: fade-in 0.8s ease-out forwards;
        opacity: 0;
      }

      .delay-200 { animation-delay: 0.2s; }

      @keyframes pulse-neon {
        0%, 100% { box-shadow: 0 0 5px #f472b6, 0 0 10px #f472b6; }
        50% { box-shadow: 0 0 10px #f472b6, 0 0 20px #f472b6; }
      }
      .animate-pulse-neon {
        animation: pulse-neon 2s infinite;
      }
      
      .card-glow {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.2);
      }

      .social-link {
        transition: transform 0.3s ease-in-out;
      }
      .social-link:hover {
        transform: scale(1.1);
      }
    `;
    const style = document.createElement('style');
    style.innerHTML = customStyles;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return null;
};
