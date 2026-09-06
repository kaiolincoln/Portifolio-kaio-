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
    let saved;
    try { saved = localStorage.getItem('theme'); } catch { /* Storage may be unavailable. */ }
    if (saved === 'dark' || saved === 'light') return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Resolve mounted sections on each scroll, including sections loaded by Suspense.
  useEffect(() => {
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const sections = [...document.querySelectorAll('main section[id]')];
        const current = sections.filter(section => section.getBoundingClientRect().top <= 140).at(-1);
        if (current) setActiveSection(current.id);
      });
    };
    const mutation = new MutationObserver(update);
    mutation.observe(document.getElementById('root'), { childList: true, subtree: true });
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => { mutation.disconnect(); cancelAnimationFrame(frame); window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);

  // theme effect
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try { localStorage.setItem('theme', theme); } catch { /* Keep the theme in memory. */ }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark';
      return next;
    });
  };

  const Skeleton = () => (
    <div className="h-64 bg-slate-700 dark:bg-slate-600 animate-pulse rounded-lg my-8" />
  );

  return (
<div className="min-h-screen bg-gradient-to-br from-white via-gray-200 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-gray-900 dark:text-white">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] bg-white text-slate-900 p-3">Pular para o conteúdo</a>
      <Navbar
        isScrolled={isScrolled}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((v) => !v)}
        onNavigate={scrollToSection}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main id="conteudo" tabIndex={-1}>
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
      </main>
      <Suspense fallback={<Skeleton />}>
        <Footer />
      </Suspense>
    </div>
  );
}