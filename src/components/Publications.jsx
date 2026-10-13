import React, { useEffect, useRef, useState } from 'react';
import { 
  BookOpen, 
  Award, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  Calendar, 
  ShieldCheck, 
  Users, 
  Building2,
  Terminal,
  Check
} from 'lucide-react';
import { publicationsData, certificationsData, credlyBadgeData } from '../data/portfolioData';

/**
 * Robust Credly Badge Embed Component
 * Loads https://cdn.credly.com/assets/utilities/embed.js once safely.
 * Fallback ensures the verified embedded badge or link renders reliably even if
 * third-party script loading is blocked or delayed.
 */
function CredlyEmbedCard() {
  const containerRef = useRef(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    const SCRIPT_ID = 'credly-embed-script';
    const SCRIPT_SRC = 'https://cdn.credly.com/assets/utilities/embed.js';

    // 1. Check if the script tag already exists in the document
    let script = document.getElementById(SCRIPT_ID);
    if (!script) {
      script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }

    // 2. Fallback timer: If embed.js doesn't populate an iframe (e.g. adblocker, React lifecycle),
    // inject the official Credly embedded badge iframe directly
    const timer = setTimeout(() => {
      if (containerRef.current) {
        const hasIframe = containerRef.current.querySelector('iframe');
        if (!hasIframe) {
          const fallbackIframe = document.createElement('iframe');
          fallbackIframe.src = `https://www.credly.com/embedded_badge/${credlyBadgeData.badgeId}`;
          fallbackIframe.width = '150';
          fallbackIframe.height = '270';
          fallbackIframe.style.border = '0';
          fallbackIframe.title = 'Verified Credly Digital Badge';
          fallbackIframe.onload = () => setIframeLoaded(true);
          containerRef.current.appendChild(fallbackIframe);
        } else {
          setIframeLoaded(true);
        }
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#13100e] border border-[#cf492c]/40 hover:border-[#cf492c] rounded-lg p-5 hard-shadow glow-box transition-all flex flex-col justify-between">
      <div>
        {/* Terminal Header */}
        <div className="bg-[#090807] -mx-5 -mt-5 px-4 py-3 border-b border-[#cf492c]/30 rounded-t-lg flex items-center justify-between font-mono text-xs mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#cf492c] animate-pulse" />
            <span className="text-[#cf492c] font-bold tracking-wider uppercase text-[11px]">
              DIGITAL BADGE
            </span>
          </div>
          <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" />
            <span>VERIFIED</span>
          </span>
        </div>

        {/* Credly Embed Badge Container */}
        <div className="flex flex-col items-center justify-center py-2 min-h-[280px]">
          <div
            ref={containerRef}
            data-iframe-width={credlyBadgeData.iframeWidth}
            data-iframe-height={credlyBadgeData.iframeHeight}
            data-share-badge-id={credlyBadgeData.badgeId}
            data-share-badge-host={credlyBadgeData.badgeHost}
            className="flex items-center justify-center"
          />
        </div>
      </div>

      {/* Direct Verification Link CTA */}
      <div className="pt-4 border-t border-white/10 mt-3 font-mono">
        <a
          href={credlyBadgeData.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-[#090807] hover:bg-[#cf492c]/15 text-gray-300 hover:text-white border border-[#cf492c]/40 hover:border-[#cf492c] rounded text-xs transition-all hard-shadow-sm active:translate-y-0.5"
          title="Verify Credly Badge Details"
        >
          <span>Verify Credly Credential</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#cf492c]" />
        </a>
      </div>
    </div>
  );
}

export default function Publications() {
  return (
    <section id="publications" className="py-24 relative z-10 border-t border-white/5 bg-[#090807]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#cf492c] tracking-wider uppercase font-semibold">
            <BookOpen className="w-4 h-4" />
            <span>05. PUBLICATIONS & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
            Research & Verified Credentials
          </h2>
          <div className="w-20 h-1 bg-[#cf492c]" />
        </div>

        {/* SUBSECTION 1: PUBLICATIONS */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-white/10 pb-3">
            <div className="w-8 h-8 bg-[#13100e] border border-[#cf492c]/40 rounded flex items-center justify-center">
              <FileText className="w-4 h-4 text-[#cf492c]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-mono text-white">
                Academic & Technical Publications
              </h3>
              <p className="font-mono text-xs text-gray-400">
                Peer-reviewed research and scholarly contributions in assistive technology and voice systems.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {publicationsData.map((pub) => (
              <div
                key={pub.id}
                className="bg-[#13100e] border border-[#cf492c]/30 hover:border-[#cf492c] rounded-lg overflow-hidden hard-shadow glow-box transition-all flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Card Header Bar */}
                  <div className="bg-[#090807] px-4 py-3 border-b border-[#cf492c]/30 flex items-center justify-between font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#cf492c]/80" />
                      <span className="text-gray-300 font-semibold truncate max-w-[200px] sm:max-w-[260px]">
                        {pub.journal || pub.institution}
                      </span>
                    </div>
                    {(pub.issue || pub.date) && (
                      <span className="bg-[#cf492c]/10 text-[#cf492c] text-[10px] px-2 py-0.5 rounded border border-[#cf492c]/30 font-semibold shrink-0">
                        {pub.issue || pub.date}
                      </span>
                    )}
                  </div>

                  {/* Card Main Info */}
                  <div className="p-6 space-y-4 font-mono">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#cf492c] transition-colors">
                        {pub.title}
                      </h4>
                      {pub.journal && (
                        <p className="text-xs text-[#cf492c] mt-1 font-semibold">
                          {pub.journal}
                        </p>
                      )}
                      {pub.institution && (
                        <p className="text-xs text-gray-400 mt-1 flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-[#cf492c]" />
                          <span>{pub.institution}</span>
                        </p>
                      )}
                    </div>

                    {/* Authors list if provided */}
                    {pub.authors && (
                      <div className="text-xs text-gray-400 bg-[#090807] p-3 rounded border border-white/5 space-y-1">
                        <span className="text-[10px] text-gray-500 uppercase tracking-wider block font-semibold flex items-center gap-1">
                          <Users className="w-3 h-3 text-[#cf492c]" />
                          Authors
                        </span>
                        <p className="text-gray-300 leading-relaxed text-[11px]">
                          {pub.authors}
                        </p>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {pub.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 font-mono text-xs border-t border-white/5 mt-4 flex items-center justify-between">
                  <span className="text-[10px] text-gray-500">
                    {pub.source ? `Source: ${pub.source}` : 'Verified Peer-Reviewed Publication'}
                  </span>
                  
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#cf492c] hover:bg-[#e65637] text-black font-bold rounded transition-all hard-shadow-sm active:translate-y-0.5"
                    >
                      <span>{pub.linkText || 'View Publication'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SUBSECTION 2: CERTIFICATIONS & CREDLY BADGE */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center gap-3 border-b border-white/10 pb-3">
            <div className="w-8 h-8 bg-[#13100e] border border-[#cf492c]/40 rounded flex items-center justify-center">
              <Award className="w-4 h-4 text-[#cf492c]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-mono text-white">
                Certifications & Digital Credentials
              </h3>
              <p className="font-mono text-xs text-gray-400">
                Industry-recognized coursework, specialized foundation certificates, and authenticated digital badges.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Column: Featured Credly Digital Badge */}
            <div className="lg:col-span-4 flex flex-col">
              <CredlyEmbedCard />
            </div>

            {/* Right Column: Verified Certifications Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-[#13100e] border border-[#cf492c]/30 hover:border-[#cf492c] rounded-lg p-5 hard-shadow glow-box transition-all flex flex-col justify-between hover:-translate-y-0.5"
                >
                  <div className="space-y-3 font-mono">
                    <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2.5">
                      <span className="text-[10px] text-[#cf492c] font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{cert.issuer}</span>
                      </span>
                      <span className="text-[10px] text-gray-400 bg-[#090807] px-2 py-0.5 rounded border border-white/10">
                        {cert.date}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-white leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">
                        Issuer: {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5 mt-4 font-mono text-xs flex items-center justify-between">
                    <span className="text-[10px] text-gray-500 flex items-center gap-1">
                      <Check className="w-3 h-3 text-emerald-400" />
                      Verified
                    </span>

                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#cf492c] hover:underline font-semibold"
                        title="View certification details on LinkedIn"
                      >
                        <span>View on LinkedIn</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[10px] text-gray-400">
                        Coursework Certified
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
