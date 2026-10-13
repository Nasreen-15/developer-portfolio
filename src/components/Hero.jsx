import React from 'react';
import { Terminal, ArrowRight, Download, Mail, Sparkles, Server, Cpu, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenTerminal }) {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text & Key CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#13100e] border border-[#cf492c]/40 rounded-full text-xs font-mono text-gray-300 hard-shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#cf492c] animate-ping" />
              <span className="w-2 h-2 rounded-full bg-[#cf492c] absolute" />
              <span className="text-[#cf492c] font-bold">SYSTEM STATUS:</span>
              <span>{personalInfo.status || "AVAILABLE FOR WORK"}</span>
            </div>

            {/* Main Title & Headline */}
            <div className="space-y-2">
              <span className="font-mono text-sm text-[#cf492c] tracking-widest uppercase block font-semibold">
                // COMPUTER ENGINEERING STUDENT
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-mono text-white tracking-tight leading-none">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-300 font-mono font-medium leading-snug pt-2">
                {personalInfo.role}
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl font-mono leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#cf492c] hover:bg-[#e65637] text-black font-mono text-sm font-bold rounded hard-shadow transition-all hover:-translate-y-0.5 active:translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#13100e] hover:bg-[#cf492c]/10 text-white border border-[#cf492c]/50 hover:border-[#cf492c] font-mono text-sm font-semibold rounded hard-shadow transition-all hover:-translate-y-0.5 active:translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-[#cf492c]" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-[#13100e] hover:bg-white/5 text-gray-300 border border-white/10 hover:border-white/20 font-mono text-sm rounded transition-all active:translate-y-0.5"
                title="Launch Interactive Terminal"
              >
                <Terminal className="w-4 h-4 text-[#cf492c]" />
                <span className="hidden sm:inline">Launch CLI</span>
              </button>
            </div>

            {/* Social Links & Quick Badge */}
            <div className="pt-4 flex items-center gap-6 text-gray-400 font-mono text-xs">
              <span className="text-gray-500 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-4">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#cf492c] transition-colors p-1"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#cf492c] transition-colors p-1"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="hover:text-[#cf492c] transition-colors p-1"
                  title="Direct Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Code Window / Developer Card Feature */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#13100e] border border-[#cf492c]/40 rounded-lg overflow-hidden hard-shadow glow-box">
              
              {/* Terminal Window Bar */}
              <div className="bg-[#090807] px-4 py-3 border-b border-[#cf492c]/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                </div>
                <div className="font-mono text-xs text-gray-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#cf492c]" />
                  <span>developer_config.json</span>
                </div>
                <span className="font-mono text-[10px] text-[#cf492c]">v2.4.0</span>
              </div>

              {/* Terminal Code Body */}
              <div className="p-5 font-mono text-xs sm:text-sm space-y-3 leading-relaxed overflow-x-auto bg-[#0d0b0a]">
                <div className="text-gray-500">// Initialize Developer Object</div>
                <div>
                  <span className="text-[#cf492c]">const</span> <span className="text-yellow-400">engineer</span> = &#123;
                </div>
                
                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-purple-400">name</span>: <span className="text-emerald-400">"{personalInfo.name}"</span>,
                  </div>
                  <div>
                    <span className="text-purple-400">role</span>: <span className="text-emerald-400">"{personalInfo.role}"</span>,
                  </div>
                  <div>
                    <span className="text-purple-400">coreStack</span>: [
                  </div>
                  <div className="pl-4 text-emerald-300 grid grid-cols-2 gap-x-2 gap-y-1">
                    <span>"C++ / Python"</span>
                    <span>"Java / SQL"</span>
                    <span>"Django / FastAPI"</span>
                    <span>"React / JavaScript"</span>
                    <span>"PostgreSQL / MySQL"</span>
                    <span>"Android / React Native"</span>
                  </div>
                  <div>],</div>
                  <div>
                    <span className="text-purple-400">architectureFocus</span>: <span className="text-emerald-400">"Backend Systems, Core CS & Full-Stack Development"</span>,
                  </div>
                  <div>
                    <span className="text-purple-400">status</span>: <span className="text-emerald-400">"Ready for impact"</span>
                  </div>
                </div>

                <div>&#125;;</div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-gray-400 text-xs">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" /> BUILD STATUS: READY
                  </span>
                  <span className="text-gray-500">UTF-8 | JSON</span>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid underneath */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {personalInfo.stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#13100e] border border-[#cf492c]/30 rounded p-3 text-center hard-shadow-sm hover:border-[#cf492c] transition-all"
                >
                  <div className="font-mono text-lg font-bold text-[#cf492c]">{stat.value}</div>
                  <div className="font-mono text-[10px] text-gray-400 uppercase tracking-tight">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
