import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };


  const skills = {
    frontend: [
      { name: 'HTML5', level: 'Avançado' },
      { name: 'CSS3', level: 'Avançado' },
      { name: 'JavaScript (ES6+)', level: 'Intermediário' },
      { name: 'React', level: 'Intermediário' },
      { name: 'Bootstrap', level: 'Básico' },
      { name: 'Tailwind CSS', level: 'Básico' }
    ],
    backend: [
      { name: 'MySQL', level: 'Básico' },
      { name: 'SQL', level: 'Básico' },
      { name: 'Node.js', level: 'Básico' },
     { name: 'Supabase', level: 'Básico' }
    ],
    tools: [
      { name: 'Git/GitHub', level: 'Intermediário' },
      { name: 'VS Code', level: 'Avançado' },
      { name: 'Pacote Office', level: 'Avançado' },
      { name: 'IA', level: 'Intermediário' },
      { name: 'Ingles', level: 'Basico' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navbar
        isScrolled={isScrolled}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((v) => !v)}
        onNavigate={scrollToSection}
      />

      <Hero onContactClick={() => scrollToSection('contato')} />
      <About />
      <Skills skills={skills} />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
