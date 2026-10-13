import React from 'react';
import { ArrowUp, Terminal, Code2, Heart } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer({ onOpenTerminal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-[#070605] border-t border-[#cf492c]/30 py-12 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Brand & System Status */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#13100e] border border-[#cf492c]/40 rounded flex items-center justify-center">
              <Code2 className="w-4 h-4 text-[#cf492c]" />
            </div>
            <div>
              <span className="font-bold text-white text-sm block">
                {personalInfo.name}
              </span>
              <span className="text-gray-400 text-[10px] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                ALL SYSTEMS OPERATIONAL
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-4 text-gray-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#cf492c] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onOpenTerminal}
              className="text-[#cf492c] font-semibold hover:underline flex items-center gap-1"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>CLI Mode</span>
            </button>
          </div>

          {/* Back To Top Button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 bg-[#13100e] text-gray-300 hover:text-white border border-[#cf492c]/40 hover:border-[#cf492c] rounded transition-all hard-shadow-sm active:translate-y-0.5"
            title="Return to top of page"
          >
            <ArrowUp className="w-4 h-4 text-[#cf492c]" />
          </button>
        </div>

        {/* Copyright & Tech Stack Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. Designed & Engineered with clean code.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React, Vite & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
