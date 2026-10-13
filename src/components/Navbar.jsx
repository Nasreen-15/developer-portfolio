import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Code2, Sparkles, ExternalLink } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Navbar({ onOpenTerminal }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#090807]/90 backdrop-blur-md border-b border-[#cf492c]/30 shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Developer Tag */}
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, '#hero')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-9 h-9 bg-[#13100e] border border-[#cf492c]/50 flex items-center justify-center rounded-sm hard-shadow-sm group-hover:border-[#cf492c] transition-all">
            <Code2 className="w-5 h-5 text-[#cf492c] group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm font-bold text-white tracking-wider group-hover:text-[#cf492c] transition-colors">
              {personalInfo.name}
            </span>
            <span className="font-mono text-[10px] text-gray-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              {personalInfo.status || "AVAILABLE FOR WORK"}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#13100e]/80 border border-[#cf492c]/20 rounded-md p-1 px-3 backdrop-blur-sm">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`font-mono text-xs px-3 py-1.5 rounded transition-all duration-150 ${
                  isActive
                    ? 'bg-[#cf492c] text-black font-semibold shadow-sm'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls: Interactive Terminal + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-2 font-mono text-xs px-3 py-1.5 bg-[#13100e] hover:bg-[#cf492c]/10 text-gray-200 border border-[#cf492c]/40 hover:border-[#cf492c] rounded transition-all hard-shadow-sm active:translate-y-0.5"
            title="Open Interactive Terminal (CMD)"
          >
            <Terminal className="w-3.5 h-3.5 text-[#cf492c]" />
            <span>CLI Terminal</span>
            <span className="bg-[#cf492c]/20 text-[#cf492c] text-[10px] px-1.5 py-0.5 rounded font-bold">Ctrl+K</span>
          </button>

          {personalInfo.resumeUrl && personalInfo.resumeUrl !== '#' ? (
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-3 py-1.5 bg-[#cf492c] hover:bg-[#e65637] text-black font-bold rounded transition-all hard-shadow active:translate-y-0.5"
            >
              Resume
            </a>
          ) : (
            <a
              href={`mailto:${personalInfo.email}?subject=Resume%20Request`}
              className="font-mono text-xs px-3 py-1.5 bg-[#cf492c] hover:bg-[#e65637] text-black font-bold rounded transition-all hard-shadow active:translate-y-0.5"
              title="Request Resume via Email"
            >
              Resume
            </a>
          )}
        </div>

        {/* Mobile Menu & Terminal Buttons */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenTerminal}
            className="p-2 bg-[#13100e] text-[#cf492c] border border-[#cf492c]/40 rounded"
            aria-label="Open Terminal"
          >
            <Terminal className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-[#13100e] text-white border border-[#cf492c]/40 rounded"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#cf492c]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090807]/95 border-b border-[#cf492c]/40 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="font-mono text-sm px-4 py-2.5 rounded text-gray-200 hover:text-white hover:bg-[#cf492c]/20 border border-transparent hover:border-[#cf492c]/30 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[#cf492c] font-bold">&gt;</span>
              </a>
            ))}

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="w-full flex items-center justify-center gap-2 font-mono text-xs py-2.5 bg-[#13100e] text-gray-200 border border-[#cf492c]/40 rounded"
              >
                <Terminal className="w-4 h-4 text-[#cf492c]" />
                Launch Interactive CLI
              </button>

              {personalInfo.resumeUrl && personalInfo.resumeUrl !== '#' ? (
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center font-mono text-xs py-2.5 bg-[#cf492c] text-black font-bold rounded"
                >
                  Download Resume PDF
                </a>
              ) : (
                <a
                  href={`mailto:${personalInfo.email}?subject=Resume%20Request`}
                  className="w-full text-center font-mono text-xs py-2.5 bg-[#cf492c] text-black font-bold rounded"
                >
                  Request Resume
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
