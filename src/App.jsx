import React, { useState, useEffect } from 'react';
import BackgroundGlow from './components/BackgroundGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalModal from './components/TerminalModal';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Keyboard shortcut listener for Ctrl+K or Cmd+K to trigger Terminal Modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#090807] text-[#f3f4f6] relative font-mono selection:bg-[#cf492c] selection:text-black overflow-x-hidden">
      {/* Background ambient lighting and grid overlay */}
      <BackgroundGlow />

      {/* Navigation Bar */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Publications />
        <Contact />
      </main>

      {/* System Footer */}
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Command Line Interface Terminal Overlay */}
      <TerminalModal 
        isOpen={terminalOpen} 
        onClose={() => setTerminalOpen(false)} 
      />
    </div>
  );
}
