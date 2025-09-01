import React from 'react';
import { Home, User, Lightbulb, GraduationCap, Send } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { name: 'home', icon: Home, label: 'Home' },
    { name: 'about', icon: User, label: 'About' },
    { name: 'projects', icon: Lightbulb, label: 'Projects' },
    { name: 'education', icon: GraduationCap, label: 'Education' },
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

export default Navbar;