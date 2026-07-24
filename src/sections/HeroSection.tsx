import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Globe, ChevronRight, ExternalLink } from 'lucide-react';
import { personalInfo, statsList } from '../data/hassaanData';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  selectedPath?: 'architect' | 'operator' | null;
  onExploreProjects: () => void;
}

export default function HeroSection({ onExploreProjects }: HeroSectionProps) {
  const [showHireOptions, setShowHireOptions] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-fade',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
        }
      );

      if (containerRef.current && bgTextRef.current) {
        gsap.to(bgTextRef.current, {
          y: -80,
          scale: 1.1,
          opacity: 0.05,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen min-h-[720px] bg-[#0D0D0D] overflow-hidden flex items-center justify-center px-6 md:px-16 select-none"
    >
      {/* LAYER 1: BACKGROUND TYPOGRAPHY (z-index: 0) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <h1
          ref={bgTextRef}
          className="text-[#D31A21] opacity-20 font-black uppercase tracking-tighter text-[18vw] leading-none select-none font-['Oswald']"
        >
          PORTFOLIO
        </h1>
      </div>

      {/* LAYER 2: TRANSPARENT PORTRAIT CUTOUT (z-index: 10) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[85%] z-10 pointer-events-none flex items-end">
        <img
          src="/hassaan-cutout.png"
          alt={personalInfo.name}
          className="h-full w-auto object-contain filter contrast-[1.05] brightness-[0.98] drop-shadow-2xl"
          style={{
            maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
          }}
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            if (!img.dataset.triedFallback) {
              img.dataset.triedFallback = 'true';
              img.src = '/hassaan-portrait.png';
            } else {
              img.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
            }
          }}
        />
      </div>

      {/* LAYER 3: FOREGROUND TEXT & UI OVERLAY (z-index: 20) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center h-full pointer-events-auto gap-8 my-auto pt-16">
        
        {/* A. LEFT COLUMN (Cols 1 to 6 - Foreground Overlay) */}
        <div className="md:col-span-6 space-y-6 text-left">
          <div className="space-y-1">
            <span className="hero-fade font-script text-white text-3xl sm:text-4xl block -mb-2">
              Hello, I'm
            </span>
            <h2 className="hero-fade text-white font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-none font-heading drop-shadow-lg">
              HASSAAN<br/>ABDULLAH<br/>KIYANI
            </h2>
            <p className="hero-fade text-[#FF2E37] font-semibold text-base sm:text-lg uppercase mt-2 tracking-wider font-heading drop-shadow">
              AI ENGINEER &amp; SQA SPECIALIST
            </p>
          </div>

          <p className="hero-fade text-[#A1A1AA] text-xs sm:text-sm leading-relaxed max-w-md font-light font-sans drop-shadow-md">
            Building and validating autonomous AI systems with rigorous SQA auditing, deterministic verification pipelines, and machine cognition architectures.
          </p>

          <div className="hero-fade inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono text-[#A1A1AA] border border-white/10 bg-white/[0.02] px-3.5 py-1.5 tracking-widest uppercase font-semibold">
            <Globe className="w-3.5 h-3.5 text-[#FF2E37]" />
            <span>PAKISTAN • AVAILABLE WORLDWIDE</span>
          </div>

          <div className="hero-fade flex flex-wrap gap-3 pt-2">
            <button
              onClick={onExploreProjects}
              className="px-6 py-3.5 bg-[#FF2E37] hover:bg-[#d01e26] text-white font-bold text-xs flex items-center gap-2 cursor-pointer transition-all font-mono uppercase tracking-widest shadow-[0_0_25px_rgba(255,46,55,0.4)] hover:scale-105"
            >
              <span>EXPLORE PROJECTS</span>
              <ChevronRight className="w-3.5 h-3.5 text-white" />
            </button>

            <a
              href={`mailto:${personalInfo.email}`}
              className="px-5 py-3.5 bg-neutral-900/90 border border-neutral-700 hover:bg-neutral-800 text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer font-mono uppercase tracking-widest"
            >
              <Mail className="w-3.5 h-3.5 text-neutral-400" />
              <span>CONTACT ME</span>
            </a>

            {showHireOptions ? (
              <div className="flex gap-2 items-center bg-neutral-900 border border-neutral-700 p-1.5 animate-fade-in">
                <a
                  href={personalInfo.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-[#1dbf73] hover:bg-[#158f55] text-white font-bold text-[10px] flex items-center gap-1 transition-all"
                >
                  <span>Fiverr</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <a
                  href={personalInfo.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-[#37a000] hover:bg-[#287500] text-white font-bold text-[10px] flex items-center gap-1 transition-all"
                >
                  <span>Upwork</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <button
                  onClick={() => setShowHireOptions(false)}
                  className="px-2 py-1 text-neutral-400 hover:text-white text-[10px] font-mono font-bold"
                >
                  ✕
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowHireOptions(true)}
                className="px-4 py-3.5 border border-[#FF2E37] bg-[#FF2E37]/15 hover:bg-[#FF2E37]/30 text-[#FF2E37] hover:text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer font-mono uppercase tracking-widest"
              >
                <span>HIRE ME</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* B. RIGHT COLUMN (Cols 7 to 12 - Unboxed Vertical Stats) */}
        <div className="md:col-span-6 space-y-6 text-left md:text-right flex flex-col justify-center items-start md:items-end">
          {statsList.map((stat, i) => (
            <div key={i} className="hero-fade space-y-0.5 group cursor-pointer">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-[#FF2E37] leading-none group-hover:text-white transition-colors drop-shadow-md">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs uppercase font-mono tracking-widest text-[#A1A1AA] font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
