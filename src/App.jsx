import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
const About = lazy(() => import('./components/About.jsx'));
const Skills = lazy(() => import('./components/Skills.jsx'));
const Projects = lazy(() => import('./components/Projects.jsx'));
const Experience = lazy(() => import('./components/Experience.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));
import { skills } from './data/skills.js';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // scroll spy: update activeSection based on visibility
  useEffect(() => {
    const ids = ['home', 'sobre', 'habilidades', 'projetos', 'experiencia', 'contato'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // theme effect
  useEffect(() => {
    console.log('🎨 aplicando tema:', theme);
    console.log('🏷️ classe dark no <html> antes:', document.documentElement.classList.contains('dark'));
    document.documentElement.classList.toggle('dark', theme === 'dark');
    console.log('🏷️ classe dark no <html> depois:', document.documentElement.classList.contains('dark'));
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark';
      console.log('🔄 tema mudou de', t, 'para', next);
      return next;
    });
  };

  const Skeleton = () => (
    <div className="h-64 bg-slate-700 dark:bg-slate-600 animate-pulse rounded-lg my-8" />
  );

  return (
    // ✅ CORRETO — só precisa trocar as cores, o gradient-to-br já se aplica nos dois
<div className="min-h-screen bg-gradient-to-br from-white via-gray-200 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-gray-900 dark:text-white">
      <Navbar
        isScrolled={isScrolled}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((v) => !v)}
        onNavigate={scrollToSection}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <Hero onContactClick={() => scrollToSection('contato')} />
      <Suspense fallback={<Skeleton />}>
        <About />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <Skills skills={skills} />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <Footer />
      </Suspense>
    </div>
  );
}