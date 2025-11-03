import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ isScrolled, activeSection, isMenuOpen, onToggleMenu, onNavigate }) {
  const sections = ['home', 'sobre', 'habilidades', 'projetos', 'experiencia', 'contato'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            KL
          </div>

          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => onNavigate(section)}
                className={`capitalize hover:text-cyan-400 transition-colors ${activeSection === section ? 'text-cyan-400' : ''}`}
              >
                {section}
              </button>
            ))}
          </div>

          <button className="md:hidden" onClick={onToggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => onNavigate(section)}
                className="block w-full text-left py-2 capitalize hover:text-cyan-400 transition-colors"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}



