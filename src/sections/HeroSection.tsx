import React from 'react';
import { personalInfo } from '../data/hassaanData';

interface HeroSectionProps {
  selectedPath?: 'architect' | 'operator' | null;
  onExploreProjects?: () => void;
}

export default function HeroSection({ onExploreProjects }: HeroSectionProps) {
  const handleExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onExploreProjects) {
      onExploreProjects();
    } else {
      const el = document.getElementById('projects');
      if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const position = elementRect - bodyRect - offset;
        window.scrollTo({ top: position, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative w-full min-h-[100dvh] pt-20 pb-12 sm:pb-16 flex flex-col justify-between overflow-hidden bg-[#0D0D0D] px-4 sm:px-6 md:px-12 lg:px-16 select-none">
      
      {/* -----------------------------------------------------------------
          1. BACKGROUND TEXT ("PORTFOLIO"): Resized for mobile (text-[26vw] sm:text-[20vw])
         ----------------------------------------------------------------- */}
      <div className="absolute inset-0 flex items-start justify-center pt-10 sm:pt-6 pointer-events-none select-none z-0">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#9E0B0F] via-[#4A0003] to-[#0D0D0D] font-black uppercase tracking-tighter text-[26vw] sm:text-[20vw] leading-none select-none font-['Oswald']">
          PORTFOLIO
        </h1>
      </div>

      {/* -----------------------------------------------------------------
          2. PORTRAIT CUTOUT IMAGE: h-[50vh] sm:h-[65vh] lg:h-[88%] max-h-[85vh]
         ----------------------------------------------------------------- */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[50vh] sm:h-[65vh] lg:h-[88%] max-h-[85vh] z-10 pointer-events-none flex items-end justify-center min-w-[260px]">
        <img
          src="/ad5b9713-018f-43a6-a4c4-39ef586bba14_edit_867989541613908-removebg-preview.png"
          alt="Hassaan Abdullah Kiyani"
          className="h-full w-auto object-contain object-bottom filter contrast-[1.05] brightness-[0.98]"
          style={{
            maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          }}
        />
      </div>

      {/* -----------------------------------------------------------------
          3 & 4. FOREGROUND CONTENT & METRICS OVERLAY
         ----------------------------------------------------------------- */}
      <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-12 items-center h-full pointer-events-auto my-auto py-4">
        
        {/* Left Side: Name, Subhead & Action Buttons */}
        <div className="col-span-12 lg:col-span-6 flex flex-col items-start justify-center space-y-3 pt-6 lg:pt-0 text-left">
          
          {/* Script Subtitle */}
          <span className="text-white text-2xl sm:text-3xl font-normal italic font-['Caveat'] -mb-1">
            Hello, I'm
          </span>
          
          {/* Main Name: 3 Stacked Lines */}
          <h2 className="text-white font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[0.95] font-['Oswald']">
            HASSAAN<br />
            ABDULLAH<br />
            KIYANI
          </h2>

          {/* Red Subhead */}
          <p className="text-[#FF2E37] font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider">
            AI ENGINEER &amp; SQA SPECIALIST
          </p>

          {/* Paragraph & Location Tag */}
          <p className="text-[#8E8E93] text-xs sm:text-sm max-w-md leading-relaxed">
            Building and validating autonomous AI systems with rigorous SQA auditing, 
            deterministic verification pipelines, and machine cognition architectures.
          </p>

          <div className="flex items-center space-x-2 text-[#8E8E93] text-[10px] sm:text-xs uppercase tracking-widest pt-1 font-mono">
            <span className="inline-block w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
            <span>PAKISTAN • AVAILABLE WORLDWIDE</span>
          </div>

          {/* Action Buttons: Stack CTAs vertically on mobile (<640px) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-3 w-full sm:w-auto">
            <button
              onClick={handleExplore}
              className="bg-[#E50914] hover:bg-[#b80710] text-white font-bold text-xs uppercase px-5 py-3 tracking-wider transition-colors cursor-pointer text-center w-full sm:w-auto"
            >
              EXPLORE PROJECTS &gt;
            </button>
            <a
              href={`mailto:${personalInfo.email}`}
              className="border border-white/20 hover:border-white text-white font-bold text-xs uppercase px-5 py-3 tracking-wider transition-colors cursor-pointer text-center w-full sm:w-auto"
            >
              CONTACT ME
            </a>
          </div>
        </div>

        {/* 4. Right Side: Stacked Numerical Metrics (Grid 2-cols on Mobile, Aligned Right on Desktop) */}
        <div className="col-span-12 lg:col-span-6 grid grid-cols-2 lg:flex lg:flex-col lg:items-end justify-center gap-4 lg:gap-6 pt-8 lg:pt-0 text-center lg:text-right border-t lg:border-t-0 border-neutral-800/80 mt-6 lg:mt-0">
          <div>
            <h3 className="text-[#FF2E37] font-black text-3xl sm:text-4xl md:text-5xl leading-none font-['Oswald']">50+</h3>
            <p className="text-[#8E8E93] text-[9px] sm:text-[10px] uppercase tracking-widest mt-1 font-mono font-bold">QA AUDITS &amp; BUILDS</p>
          </div>
          <div>
            <h3 className="text-[#FF2E37] font-black text-3xl sm:text-4xl md:text-5xl leading-none font-['Oswald']">40+</h3>
            <p className="text-[#8E8E93] text-[9px] sm:text-[10px] uppercase tracking-widest mt-1 font-mono font-bold">GITHUB REPOSITORIES</p>
          </div>
          <div>
            <h3 className="text-[#FF2E37] font-black text-3xl sm:text-4xl md:text-5xl leading-none font-['Oswald']">4+</h3>
            <p className="text-[#8E8E93] text-[9px] sm:text-[10px] uppercase tracking-widest mt-1 font-mono font-bold">YEARS DEV TRACK</p>
          </div>
          <div>
            <h3 className="text-[#FF2E37] font-black text-3xl sm:text-4xl md:text-5xl leading-none font-['Oswald']">4+</h3>
            <p className="text-[#8E8E93] text-[9px] sm:text-[10px] uppercase tracking-widest mt-1 font-mono font-bold">PUBLISHED ESSAYS</p>
          </div>
        </div>

      </div>
    </section>
  );
}
