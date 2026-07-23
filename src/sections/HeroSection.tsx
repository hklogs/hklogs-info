import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Mail, Github, Compass, ChevronRight, Award, Shield, Cpu, ExternalLink } from 'lucide-react';
import { personalInfo, statsList } from '../data/hassaanData';

interface HeroSectionProps {
  selectedPath: 'architect' | 'operator' | null;
  onExploreProjects: () => void;
}

export default function HeroSection({ selectedPath, onExploreProjects }: HeroSectionProps) {
  const [showHireOptions, setShowHireOptions] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance stagger
      gsap.fromTo('.hero-fade', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );

      // Glowing border animation for card
      gsap.fromTo(cardRef.current,
        { scale: 0.98, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center items-center py-20 px-6 relative overflow-hidden"
    >
      {/* Large faint background title behind the main hero block for visual depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[11vw] font-bold text-neutral-900/10 uppercase select-none tracking-widest pointer-events-none font-heading whitespace-nowrap z-0">
        {personalInfo.name}
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-center relative z-10">
        
        {/* Left Side: Text info */}
        <div className="space-y-6 text-left">
          {/* Pill-shaped micro-badge with dark background, thin border, and small red indicator dot */}
          <div className="hero-fade inline-flex items-center gap-2 px-3 py-1.5 bg-[#121212] border border-neutral-800 text-[10px] font-mono tracking-wider uppercase text-neutral-400 rounded-none relative">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E50914] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E50914]"></span>
            </span>
            <span>
              {selectedPath === 'operator' 
                ? 'AVAILABLE FOR SQA AUDITING' 
                : 'AVAILABLE FOR FULL-STACK WORK'}
            </span>
          </div>

          <h1 
            ref={titleRef}
            className="hero-fade text-5xl sm:text-6xl md:text-7xl font-bold leading-none tracking-tight text-white font-heading"
          >
            I&apos;m <span className="text-[#E50914]">{personalInfo.name}</span>
          </h1>

          <h2 className="hero-fade text-lg sm:text-xl md:text-2xl text-neutral-400 font-mono font-medium tracking-wide uppercase">
            {selectedPath === 'operator' 
              ? 'Software Quality Assurance & Intelligent Auditing'
              : 'MERN Stack & Next.js Full-Stack Developer'}
          </h2>

          <p className="hero-fade text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xl font-light">
            {personalInfo.tagline} {personalInfo.bio[0]}
            {/* Cursive script quote signature accent */}
            <span className="font-script text-[#E50914] text-xl block mt-3 font-semibold">
              ~ building resilient digital architecture
            </span>
          </p>

          {/* Call to Actions */}
          <div className="hero-fade flex flex-wrap gap-4 pt-2">
            <button
              onClick={onExploreProjects}
              className="px-6 py-3 bg-[#E50914] hover:bg-[#b01e1e] text-white font-bold text-xs flex items-center gap-2 cursor-pointer transition-all duration-300 rounded-none hover:shadow-[0_0_20px_rgba(229,9,20,0.3)]"
            >
              <span>Explore Projects & Repos</span>
              <ChevronRight className="w-3.5 h-3.5 text-white" />
            </button>

            <a
              href={`mailto:${personalInfo.email}`}
              className="px-6 py-3 bg-[#121212] border border-neutral-800 hover:bg-[#1c1c1c] hover:border-neutral-700 text-white font-bold text-xs flex items-center gap-2 transition-all duration-300 rounded-none"
            >
              <Mail className="w-3.5 h-3.5 text-neutral-400" />
              <span>Contact Me</span>
            </a>

            {showHireOptions ? (
              <div className="flex gap-2 items-center bg-[#121212] border border-neutral-800 p-1.5 rounded-none animate-fade-in">
                <a
                  href={personalInfo.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#1dbf73] hover:bg-[#158f55] text-white font-bold text-[10px] flex items-center gap-1 transition-all rounded-none"
                >
                  <span>Fiverr</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <a
                  href={personalInfo.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#37a000] hover:bg-[#287500] text-white font-bold text-[10px] flex items-center gap-1 transition-all rounded-none"
                >
                  <span>Upwork</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <button
                  onClick={() => setShowHireOptions(false)}
                  className="px-3 py-2 text-neutral-400 hover:text-white text-[10px] transition-all cursor-pointer font-bold font-mono"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowHireOptions(true)}
                className="px-5 py-3 border border-[#E50914]/30 bg-[#E50914]/5 hover:bg-[#E50914]/10 text-[#E50914] font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer rounded-none"
              >
                <span>Hire Me</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Stats Showcase from Arena Built UI */}
          <div className="hero-fade grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-neutral-800">
            {statsList.map((stat, i) => (
              <div 
                key={i} 
                className="bg-[#121212] border border-neutral-800 p-4 text-center group transition-all duration-300 rounded-none hover:border-[#E50914]/40"
              >
                <div className="text-3xl font-bold font-heading text-white group-hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-0.5">
                  <span className="text-[#E50914] font-mono text-sm self-start mt-1">#</span>
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Portrait Image Frame & Glassmorphism Bio Card */}
        <div className="flex flex-col items-center">
          <div 
            ref={cardRef}
            className="relative overflow-hidden p-1.5 transition-all duration-500 max-w-[340px] w-full bg-[#121212] border border-neutral-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] rounded-none"
          >
            {/* The Image inside Glass Frame */}
            <div className="relative aspect-square overflow-hidden bg-neutral-900 border border-neutral-800 group rounded-none">
              <img 
                src="/hassaan-portrait.png" 
                alt={personalInfo.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80';
                }}
              />
              {/* Scanline pattern for SQA Mode */}
              {selectedPath === 'operator' && (
                <div className="absolute inset-0 pointer-events-none opacity-[0.06] scanlines" />
              )}
              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-white/20" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/20" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-white/20" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-white/20" />
            </div>

            {/* Sub text badge under picture */}
            <div className="mt-4 p-4 bg-[#181818] border border-neutral-800 text-center rounded-none">
              <div className="text-sm font-semibold text-white tracking-wide leading-none">{personalInfo.name}</div>
              <div className="text-[10px] text-neutral-500 font-mono mt-1 tracking-wider uppercase">
                {personalInfo.degree}
              </div>
              <div className="text-[9px] text-neutral-600 font-mono mt-0.5">
                {personalInfo.university}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
