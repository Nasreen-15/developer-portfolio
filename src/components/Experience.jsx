import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 border-t border-white/5 bg-[#090807]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-[#cf492c] tracking-wider uppercase font-semibold">
            <Briefcase className="w-4 h-4" />
            <span>02. CAREER TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
            Work Experience & Contributions
          </h2>
          <div className="w-20 h-1 bg-[#cf492c]" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#cf492c]/40 pl-6 sm:pl-10 space-y-12 ml-2 sm:ml-6">
          {experienceData.map((exp, index) => (
            <div key={exp.id || index} className="relative group">
              
              {/* Timeline Node Icon Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 bg-[#13100e] border-2 border-[#cf492c] rounded-full flex items-center justify-center group-hover:bg-[#cf492c] transition-all">
                <div className="w-2 h-2 rounded-full bg-white group-hover:bg-black" />
              </div>

              {/* Experience Card */}
              <div className="bg-[#13100e] border border-[#cf492c]/30 hover:border-[#cf492c] rounded-lg p-6 sm:p-8 hard-shadow transition-all space-y-4 glow-box">
                
                {/* Role Header & Metadata */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-mono text-white flex items-center gap-2">
                      <span>{exp.role}</span>
                      <span className="text-sm font-normal text-[#cf492c]">@ {exp.company}</span>
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#cf492c]" />
                        {exp.location}
                      </span>
                      <span className="bg-[#cf492c]/10 text-[#cf492c] px-2 py-0.5 rounded border border-[#cf492c]/30 font-semibold">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Date Badge */}
                  <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-[#cf492c] bg-[#1a1512] px-3 py-1.5 rounded border border-[#cf492c]/40 self-start md:self-auto">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Brief Summary */}
                <p className="font-mono text-sm text-gray-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2.5 font-mono text-xs text-gray-300 pt-2">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-[#cf492c] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Stack Chips */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="font-mono text-[11px] px-2.5 py-1 bg-[#090807] text-gray-300 border border-white/10 rounded hover:border-[#cf492c]/50 transition-colors"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
