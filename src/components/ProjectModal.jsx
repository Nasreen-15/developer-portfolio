import React from 'react';
import { X, ExternalLink, Sparkles, CheckCircle2, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-[#0d0b0a] border-2 border-[#cf492c] rounded-lg shadow-2xl overflow-hidden hard-shadow glow-box flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="bg-[#13100e] px-5 py-4 border-b border-[#cf492c]/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#cf492c] animate-pulse" />
            <span className="font-mono text-xs font-bold text-gray-300 uppercase tracking-wider">
              {project.badge || "FEATURED SYSTEM"}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5 text-[#cf492c]" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 font-mono overflow-y-auto space-y-6">
          <div>
            <span className="text-xs text-[#cf492c] uppercase font-bold tracking-widest">// SYSTEM CASE STUDY</span>
            <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>
            <p className="text-sm text-gray-400">{project.subtitle}</p>
          </div>

          {/* Metric Highlight Card */}
          {project.metric && (
            <div className="p-4 bg-[#13100e] border border-[#cf492c]/40 rounded-lg flex items-center justify-between">
              <span className="text-xs text-gray-400">Key Performance Metric</span>
              <span className="text-sm font-bold text-[#cf492c] bg-[#cf492c]/10 px-3 py-1 rounded border border-[#cf492c]/30">
                {project.metric}
              </span>
            </div>
          )}

          {/* Deep Detailed Overview */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#cf492c]" />
              <span>Architectural Overview</span>
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-[#080706] p-4 rounded border border-white/10">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Tech Stack Used */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Technologies & Libraries</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="text-xs px-3 py-1 bg-[#13100e] text-gray-200 border border-[#cf492c]/30 rounded font-semibold"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links CTAs */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4">
            {project.demo && project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#cf492c] hover:bg-[#e65637] text-black font-bold text-xs rounded transition-all hard-shadow"
              >
                <span>Launch Live System Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#13100e] hover:bg-white/5 text-gray-200 border border-[#cf492c]/40 font-semibold text-xs rounded transition-all"
              >
                <GithubIcon className="w-4 h-4 text-[#cf492c]" />
                <span>View Source Repository</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
