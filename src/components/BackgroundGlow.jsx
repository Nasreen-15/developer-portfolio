import React from 'react';

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60"></div>
      
      {/* Ambient Red Glow Spheres */}
      <div 
        className="absolute -top-40 -left-40 w-96 h-96 bg-[#cf492c] opacity-15 rounded-full blur-[100px] animate-pulse-glow"
      />
      <div 
        className="absolute top-1/3 -right-40 w-96 h-96 bg-[#cf492c] opacity-10 rounded-full blur-[120px] animate-pulse-glow"
        style={{ animationDelay: '2s' }}
      />
      <div 
        className="absolute -bottom-40 left-1/4 w-[500px] h-[500px] bg-[#cf492c] opacity-12 rounded-full blur-[140px] animate-pulse-glow"
        style={{ animationDelay: '4s' }}
      />

      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090807]/80 via-transparent to-[#090807]"></div>
    </div>
  );
}
