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
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0096ff]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff3232]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-center relative z-10">
        
        {/* Left Side: Text info */}
        <div className="space-y-6 text-left">
          <div className="hero-fade inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300">
            <span className={`w-2 h-2 rounded-full ${selectedPath === 'operator' ? 'bg-[#ff3232] animate-pulse' : 'bg-[#0096ff] animate-pulse'}`} />
            <span>
              {selectedPath === 'operator' 
                ? 'Active Mode: Intelligent SQA Specialist' 
                : 'Active Mode: Full-Stack Engineer'}
            </span>
          </div>

          <h1 
            ref={titleRef}
            className="hero-fade text-4xl sm:text-5xl md:text-6xl font-bold leading-none tracking-tight text-white font-heading"
          >
            I&apos;m <span className="bg-gradient-to-r from-[#0096ff] to-[#ff3232] bg-clip-text text-transparent">{personalInfo.name}</span>
          </h1>

          <h2 className="hero-fade text-lg sm:text-xl md:text-2xl text-gray-300 font-mono font-medium tracking-wide">
            {selectedPath === 'operator' 
              ? 'Software Quality Assurance & Intelligent Auditing'
              : 'MERN Stack & Next.js Full-Stack Developer'}
          </h2>

          <p className="hero-fade text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl font-light">
            {personalInfo.tagline} {personalInfo.bio[0]}
          </p>

          {/* Call to Actions */}
          <div className="hero-fade flex flex-wrap gap-4 pt-2">
            <button
              onClick={onExploreProjects}
              className={`px-6 py-3 rounded-full font-bold text-xs flex items-center gap-2 cursor-pointer transition-all duration-300 ${
                selectedPath === 'operator'
                  ? 'bg-gradient-to-r from-[#ff3232] to-[#b01e1e] text-white hover:shadow-[0_0_20px_rgba(255,50,50,0.4)]'
                  : 'bg-gradient-to-r from-[#0096ff] to-[#006cc0] text-white hover:shadow-[0_0_20px_rgba(0,150,255,0.4)]'
              }`}
            >
              <span>Explore Projects & Repos</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={`mailto:${personalInfo.email}`}
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-bold text-xs flex items-center gap-2 transition-all duration-300"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Me</span>
            </a>

            {showHireOptions ? (
              <div className="flex gap-2 items-center bg-[#0a1535]/50 border border-white/10 p-1.5 rounded-full animate-fade-in">
                <a
                  href={personalInfo.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#1dbf73] hover:bg-[#158f55] text-white font-bold text-[10px] flex items-center gap-1 transition-all"
                >
                  <span>Fiverr</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <a
                  href={personalInfo.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#37a000] hover:bg-[#287500] text-white font-bold text-[10px] flex items-center gap-1 transition-all"
                >
                  <span>Upwork</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <button
                  onClick={() => setShowHireOptions(false)}
                  className="px-3 py-2 rounded-full text-gray-400 hover:text-white text-[10px] transition-all cursor-pointer font-bold"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowHireOptions(true)}
                className="px-5 py-3 rounded-full border border-[#1dbf73]/30 bg-[#1dbf73]/5 hover:bg-[#1dbf73]/10 text-[#1dbf73] font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <span>Hire Me</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Stats Showcase from Arena Built UI */}
          <div className="hero-fade grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/5">
            {statsList.map((stat, i) => (
              <div 
                key={i} 
                className="bg-white/[0.02] border border-white/5 hover:border-white/10 p-4 rounded-2xl text-center group transition-all duration-300"
              >
                <div className="text-2xl font-bold font-heading text-white group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase font-mono tracking-widest text-gray-500 mt-1">
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
            className={`relative rounded-3xl overflow-hidden p-1.5 transition-all duration-500 max-w-[340px] w-full bg-gradient-to-br ${
              selectedPath === 'operator' 
                ? 'from-[#ff3232]/25 to-transparent border border-[#ff3232]/35 shadow-[0_0_40px_rgba(255,50,50,0.1)]' 
                : 'from-[#0096ff]/25 to-transparent border border-[#0096ff]/35 shadow-[0_0_40px_rgba(0,150,255,0.1)]'
            }`}
          >
            {/* The Image inside Glass Frame */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group">
              <img 
                src="/hassaan-portrait.png" 
                alt={personalInfo.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                onError={(e) => {
                  // Fallback if image fails to load
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80';
                }}
              />
              {/* Scanline pattern for SQA Mode */}
              {selectedPath === 'operator' && (
                <div className="absolute inset-0 pointer-events-none opacity-[0.06] scanlines" />
              )}
              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-white/40" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/40" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-white/40" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-white/40" />
            </div>

            {/* Sub text badge under picture */}
            <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
              <div className="text-sm font-semibold text-white tracking-wide leading-none">{personalInfo.name}</div>
              <div className="text-[10px] text-gray-500 font-mono mt-1 tracking-wider uppercase">
                {personalInfo.degree}
              </div>
              <div className="text-[9px] text-gray-600 font-mono mt-0.5">
                {personalInfo.university}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
