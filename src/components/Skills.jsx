import React, { useState } from 'react';
import { 
  Cpu, Search, Filter, Code2, Zap, Server, Database, 
  HardDrive, Layers, Lock, Boxes, Container, Terminal,
  FileCode, Globe, Layout, FileJson, Smartphone, Network, GitBranch 
} from 'lucide-react';
import { skillsData, skillsCategories } from '../data/portfolioData';

// Helper map to render crisp Lucide icons dynamically
const iconMap = {
  Code2,
  Zap,
  Server,
  Cpu,
  Lock,
  Boxes,
  Database,
  HardDrive,
  Layers,
  Search,
  Container,
  Terminal,
  FileCode,
  Globe,
  Layout,
  FileJson,
  Smartphone,
  Network,
  GitBranch
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-[#cf492c] tracking-wider uppercase font-semibold">
              <Cpu className="w-4 h-4" />
              <span>03. TECHNICAL MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
              Skills & Tech Stack
            </h2>
            <div className="w-20 h-1 bg-[#cf492c]" />
          </div>

          {/* Search Filter Input */}
          <div className="relative w-full md:w-64 font-mono text-xs">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Python, FastAPI)..."
              className="w-full bg-[#13100e] text-white pl-9 pr-4 py-2.5 border border-[#cf492c]/30 focus:border-[#cf492c] rounded focus:outline-none placeholder-gray-500"
            />
          </div>
        </div>

        {/* Category Selector Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 font-mono text-xs scrollbar-none">
          <Filter className="w-4 h-4 text-[#cf492c] shrink-0 mr-1" />
          {skillsCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded transition-all shrink-0 border ${
                selectedCategory === cat.id
                  ? 'bg-[#cf492c] text-black font-bold border-[#cf492c] hard-shadow-sm'
                  : 'bg-[#13100e] text-gray-300 border-white/10 hover:border-[#cf492c]/40 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div 
                key={index}
                className={`bg-[#13100e] border ${
                  skill.highlight ? 'border-[#cf492c]/60' : 'border-white/10'
                } hover:border-[#cf492c] rounded-lg p-4 sm:p-5 hard-shadow transition-all group hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#090807] border border-[#cf492c]/40 rounded flex items-center justify-center group-hover:border-[#cf492c] transition-colors">
                      <IconComponent className="w-5 h-5 text-[#cf492c]" />
                    </div>
                    <div>
                      <h4 className="font-mono text-sm font-bold text-white group-hover:text-[#cf492c] transition-colors">
                        {skill.name}
                      </h4>
                      <span className="font-mono text-[10px] text-gray-400">
                        {skillsCategories.find(c => c.id === skill.category)?.label || skill.category}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono text-xs text-[#cf492c] font-semibold bg-[#cf492c]/10 px-2 py-0.5 rounded border border-[#cf492c]/20">
                    {skill.exp}
                  </span>
                </div>

                {/* Qualitative Proficiency Badge */}
                <div className="pt-2 border-t border-white/5 flex items-center justify-between font-mono text-xs">
                  <span className="text-[11px] text-gray-400">Proficiency</span>
                  <span className={`px-2 py-0.5 rounded text-[11px] font-semibold tracking-wide ${
                    skill.proficiency === 'Core'
                      ? 'bg-[#cf492c]/20 text-[#cf492c] border border-[#cf492c]/40'
                      : skill.proficiency === 'Proficient'
                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                      : 'bg-white/10 text-gray-300 border border-white/10'
                  }`}>
                    {skill.proficiency || 'Proficient'}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 font-mono text-sm text-gray-400 bg-[#13100e] border border-dashed border-white/10 rounded-lg">
            No matching skills found for "{searchQuery}".
          </div>
        )}

      </div>
    </section>
  );
}
