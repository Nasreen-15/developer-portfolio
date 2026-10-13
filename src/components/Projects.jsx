import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Sparkles, Filter, Terminal, Code2, Info, Star } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter((proj) => {
    if (filter === 'featured') return proj.featured;
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-white/5 bg-[#090807]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-[#cf492c] tracking-wider uppercase font-semibold">
              <FolderGit2 className="w-4 h-4" />
              <span>04. FEATURED WORK & SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
              Software Engineering Showcase
            </h2>
            <div className="w-20 h-1 bg-[#cf492c]" />
          </div>

          {/* Filter Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 font-mono text-xs">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'featured', label: 'Featured', icon: true },
              { id: 'fullstack', label: 'Full-Stack Platform' },
              { id: 'mobile', label: 'Mobile & Assistive Tech' },
              { id: 'ai', label: 'AI & Document NLP' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-all shrink-0 border ${
                  filter === tab.id
                    ? 'bg-[#cf492c] text-black font-bold border-[#cf492c] hard-shadow-sm'
                    : 'bg-[#13100e] text-gray-300 border-white/10 hover:border-[#cf492c]/40'
                }`}
              >
                {tab.icon && (
                  <Star className={`w-3.5 h-3.5 ${filter === tab.id ? 'fill-black text-black' : 'fill-yellow-400 text-yellow-400'}`} />
                )}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#13100e] border border-[#cf492c]/30 hover:border-[#cf492c] rounded-lg overflow-hidden hard-shadow transition-all group flex flex-col justify-between glow-box hover:-translate-y-1.5"
            >
              <div>
                {/* Visual Terminal Card Header */}
                <div className="bg-[#090807] px-4 py-3 border-b border-[#cf492c]/30 flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#cf492c]/80" />
                    <span className="text-gray-400 font-bold truncate max-w-[150px]">{project.title.toLowerCase()}</span>
                  </div>
                  {project.metric && (
                    <span className="bg-[#cf492c]/10 text-[#cf492c] text-[10px] px-2 py-0.5 rounded border border-[#cf492c]/30 font-semibold">
                      {project.metric}
                    </span>
                  )}
                </div>

                {/* Card Main Info */}
                <div className="p-6 space-y-4 font-mono">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] text-[#cf492c] uppercase font-bold tracking-wider">
                        {project.badge}
                      </span>
                      {project.featured && (
                        <span className="text-[10px] text-yellow-400 font-bold flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span>FEATURED</span>
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#cf492c] transition-colors mt-0.5">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-1">{project.subtitle}</p>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed line-clamp-3 bg-[#090807] p-3 rounded border border-white/5">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] px-2 py-0.5 bg-[#090807] text-gray-300 border border-white/10 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 font-mono text-xs flex items-center justify-between gap-3 border-t border-white/5 mt-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 text-gray-300 hover:text-[#cf492c] transition-colors p-1"
                >
                  <Info className="w-4 h-4 text-[#cf492c]" />
                  <span>Details</span>
                </button>

                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#090807] hover:bg-[#cf492c]/20 text-gray-300 hover:text-white border border-white/10 hover:border-[#cf492c] rounded transition-all"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}

                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#cf492c] hover:bg-[#e65637] text-black font-bold rounded transition-all hard-shadow-sm active:translate-y-0.5"
                      title="Live Demo Link"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
