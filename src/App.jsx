import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import ParticleBackground from './components/ParticleBackground';
import GlobalStyles from './components/GlobalStyles';

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
      case 'education':
        return <EducationSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-950 text-gray-200 font-inter">
      <GlobalStyles />
      <ParticleBackground />
      <main className="relative z-10 flex flex-col items-center justify-center px-4 py-12 min-h-screen">
        {renderSection()}
      </main>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
}