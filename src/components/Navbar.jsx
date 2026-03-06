import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({
  isScrolled,
  activeSection,
  isMenuOpen,
  onToggleMenu,
  onNavigate,
  theme,
  onToggleTheme,
}) {
  const sections = ['home', 'sobre', 'habilidades', 'projetos', 'experiencia', 'contato'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            KL
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => onNavigate(section)}
                className={`capitalize transition-colors ${
                  activeSection === section
                    ? 'text-cyan-400 font-semibold'
                    : 'text-black dark:text-white hover:text-cyan-400'
                }`}
              >
                {section}
              </button>
            ))}

            <button
              onClick={onToggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Alternar tema"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <button className="md:hidden flex items-center space-x-2 text-black dark:text-white" onClick={onToggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => onNavigate(section)}
                className={`block w-full text-left py-2 capitalize transition-colors ${
                  activeSection === section
                    ? 'text-cyan-400 font-semibold'
                    : 'text-black dark:text-white hover:text-cyan-400'
                }`}
              >
                {section}
              </button>
            ))}
            <div className="mt-2 border-t border-gray-300 dark:border-slate-700 pt-2">
              <button
                onClick={onToggleTheme}
                className="flex items-center space-x-2 py-2 w-full text-black dark:text-white hover:text-cyan-400 transition-colors"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                <span>Theme</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}



