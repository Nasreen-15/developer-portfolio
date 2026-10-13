import React, { useState } from 'react';
import { User, GraduationCap, Cpu, ShieldCheck, Zap, Award, CheckCircle2, Code } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const [activeTab, setActiveTab] = useState('bio');

  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-[#cf492c] tracking-wider uppercase font-semibold">
            <User className="w-4 h-4" />
            <span>01. ABOUT & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
            Engineering Identity & Background
          </h2>
          <div className="w-20 h-1 bg-[#cf492c]" />
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-white/10 mb-8 overflow-x-auto pb-1 font-mono text-xs">
          <button
            onClick={() => setActiveTab('bio')}
            className={`px-4 py-2.5 rounded-t font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'bio'
                ? 'bg-[#13100e] text-[#cf492c] border-t-2 border-x border-[#cf492c]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Overview & Bio</span>
          </button>

          <button
            onClick={() => setActiveTab('philosophy')}
            className={`px-4 py-2.5 rounded-t font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'philosophy'
                ? 'bg-[#13100e] text-[#cf492c] border-t-2 border-x border-[#cf492c]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>Engineering Principles</span>
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`px-4 py-2.5 rounded-t font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'education'
                ? 'bg-[#13100e] text-[#cf492c] border-t-2 border-x border-[#cf492c]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Education & Degree</span>
          </button>
        </div>

        {/* Tab Content Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Info Box */}
          <div className="lg:col-span-8 bg-[#13100e] border border-[#cf492c]/30 rounded-lg p-6 sm:p-8 hard-shadow space-y-6">
            {activeTab === 'bio' && (
              <div className="space-y-4 font-mono text-sm sm:text-base text-gray-300 leading-relaxed">
                {personalInfo.bio.map((paragraph, index) => (
                  <p key={index} className="border-l-2 border-[#cf492c]/50 pl-4">
                    {paragraph}
                  </p>
                ))}

                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#090807] border border-white/10 rounded">
                    <span className="text-xs text-gray-500 uppercase block font-mono mb-1">Primary Focus</span>
                    <span className="text-sm font-bold text-white font-mono">Backend Microservices & Software Systems</span>
                  </div>
                  <div className="p-4 bg-[#090807] border border-white/10 rounded">
                    <span className="text-xs text-gray-500 uppercase block font-mono mb-1">Degree Focus</span>
                    <span className="text-sm font-bold text-white font-mono">Computer Engineering Student</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'philosophy' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono">
                <div className="p-4 bg-[#090807] border border-[#cf492c]/30 rounded space-y-2">
                  <div className="flex items-center gap-2 text-[#cf492c] font-bold">
                    <Zap className="w-5 h-5" />
                    <span>Robust Backend Design</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-normal">
                    Building structured RESTful APIs with Python (Django, FastAPI) integrated with normalized PostgreSQL schemas.
                  </p>
                </div>

                <div className="p-4 bg-[#090807] border border-[#cf492c]/30 rounded space-y-2">
                  <div className="flex items-center gap-2 text-[#cf492c] font-bold">
                    <Cpu className="w-5 h-5" />
                    <span>Core CS & Systems</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-normal">
                    Strengthening foundations in Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, and Computer Networks.
                  </p>
                </div>

                <div className="p-4 bg-[#090807] border border-[#cf492c]/30 rounded space-y-2">
                  <div className="flex items-center gap-2 text-[#cf492c] font-bold">
                    <ShieldCheck className="w-5 h-5" />
                    <span>Cross-Platform Integration</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-normal">
                    Connecting backend application services seamlessly to React web frontends and React Native / Android mobile interfaces.
                  </p>
                </div>

                <div className="p-4 bg-[#090807] border border-[#cf492c]/30 rounded space-y-2">
                  <div className="flex items-center gap-2 text-[#cf492c] font-bold">
                    <Code className="w-5 h-5" />
                    <span>Clean Engineering</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-normal">
                    Writing clean, maintainable code with strict adherence to database normalization, type safety, and debugging practices.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-6 font-mono">
                {personalInfo.education.map((edu, idx) => (
                  <div key={idx} className="p-5 bg-[#090807] border border-[#cf492c]/30 rounded-lg space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <span className="text-xs text-[#cf492c] bg-[#cf492c]/10 px-2.5 py-1 rounded border border-[#cf492c]/30">
                        {edu.year}
                      </span>
                    </div>
                    <div className="text-sm text-gray-300 font-semibold">{edu.institution}</div>
                    <p className="text-xs text-gray-400 leading-relaxed pt-2 border-t border-white/10">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Visual Highlights Card */}
          <div className="lg:col-span-4 bg-[#13100e] border border-[#cf492c]/30 rounded-lg p-6 hard-shadow space-y-4">
            <div className="font-mono text-xs text-[#cf492c] font-bold uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>KEY HIGHLIGHTS</span>
            </div>

            <ul className="space-y-3 font-mono text-xs text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#cf492c] shrink-0 mt-0.5" />
                <span>Python Developer experience building RFQ backend tools from scratch.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#cf492c] shrink-0 mt-0.5" />
                <span>Full-stack software engineering intern at Infosys Springboard.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#cf492c] shrink-0 mt-0.5" />
                <span>Assistive wearable technology developer (Android & Bluetooth STT).</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/10 text-center font-mono">
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-full inline-block py-2.5 bg-[#cf492c] hover:bg-[#e65637] text-black font-bold text-xs rounded transition-all hard-shadow"
              >
                Contact {personalInfo.name}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
