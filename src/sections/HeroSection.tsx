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
  const bgTextRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.fromTo('.hero-fade', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
      );

      // Zoom up & fade on scroll down using ScrollTrigger
      if (containerRef.current) {
        gsap.to(bgTextRef.current, {
          scale: 1.3,
          opacity: 0,
          y: -120,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        });

        gsap.to(contentRef.current, {
          y: -60,
          opacity: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center items-center py-24 px-6 md:px-12 relative overflow-hidden bg-[#0D0D0D] text-left select-none"
    >
      {/* LAYER 1: Background PORTFOLIO text with zoom & fade on scroll */}
      <div 
        ref={bgTextRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] font-bold text-[#D31A21]/[0.15] uppercase tracking-tighter pointer-events-none font-heading whitespace-nowrap z-0 leading-none"
      >
        PORTFOLIO
      </div>

      <div 
        ref={contentRef}
        className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[1.3fr_1.1fr_0.6fr] gap-8 items-center relative z-10"
      >
        
        {/* LAYER 3: Left Column Text */}
        <div className="space-y-6 flex flex-col justify-center">
          
          <div className="space-y-2">
            <div className="font-script text-white text-3xl font-normal select-none">Hello, I'm</div>
            <h1 className="hero-fade text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight text-white font-heading uppercase hover:scale-[1.01] transition-transform duration-300">
              HASSAAN ABDULLAH KIYANI
            </h1>
            <h2 className="hero-fade text-xl sm:text-2xl md:text-3xl text-[#E50914] font-heading font-bold tracking-wide uppercase pt-1">
              AI ENGINEER &amp; SQA SPECIALIST
            </h2>
          </div>

          <p className="hero-fade text-[#8E8E93] text-sm sm:text-base leading-relaxed max-w-xl font-light font-sans">
            Bridging the gap between software validation matrices and cognitive agent loops. AI Engineer at Tritanium Global and Executive R&amp;D Member at Primus Leads LLC.
          </p>

          <div className="hero-fade flex items-center gap-2 text-xs font-mono text-[#8E8E93] tracking-widest uppercase hover:text-white transition-colors">
            <Globe className="w-4 h-4 text-[#E50914]" />
            <span>PAKISTAN • AVAILABLE WORLDWIDE</span>
          </div>

          {/* Action buttons with cursor hover pop-up */}
          <div className="hero-fade flex flex-wrap gap-4 pt-2">
            <button
              onClick={onExploreProjects}
              className="px-6 py-3.5 bg-[#E50914] hover:bg-[#b01e1e] text-white font-bold text-xs flex items-center gap-2 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] font-mono uppercase tracking-widest shadow-[0_0_20px_rgba(229,9,20,0.3)]"
            >
              <span>Explore Projects</span>
              <ChevronRight className="w-3.5 h-3.5 text-white" />
            </button>

            <a
              href={`mailto:${personalInfo.email}`}
              className="px-6 py-3.5 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-white font-bold text-xs flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] font-mono uppercase tracking-widest"
            >
              <Mail className="w-3.5 h-3.5 text-neutral-400" />
              <span>Contact Me</span>
            </a>

            {showHireOptions ? (
              <div className="flex gap-2 items-center bg-neutral-900 border border-neutral-800 p-1.5 animate-fade-in">
                <a
                  href={personalInfo.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#1dbf73] hover:bg-[#158f55] text-white font-bold text-[10px] flex items-center gap-1 transition-all hover:-translate-y-0.5"
                >
                  <span>Fiverr</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <a
                  href={personalInfo.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#37a000] hover:bg-[#287500] text-white font-bold text-[10px] flex items-center gap-1 transition-all hover:-translate-y-0.5"
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
                className="px-5 py-3.5 border border-[#E50914]/40 bg-[#E50914]/10 hover:bg-[#E50914]/20 text-[#E50914] font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer hover:-translate-y-1 hover:scale-[1.03] font-mono uppercase tracking-widest"
              >
                <span>Hire Me</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* LAYER 2: Center Portrait Cutout (Cursor lift effect) */}
        <div className="flex justify-center items-end relative h-full">
          <div className="relative max-w-[360px] w-full hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500 cursor-pointer">
            <img 
              src="/hassaan-portrait.png" 
              alt={personalInfo.name}
              className="w-full h-auto object-cover filter contrast-[1.05]"
              style={{
                maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80';
              }}
            />
          </div>
        </div>

        {/* LAYER 4: Right Column Metrics with cursor lift */}
        <div className="flex flex-col gap-8 w-full justify-center pl-0 lg:pl-6 border-l-0 lg:border-l border-neutral-800/60">
          {statsList.map((stat, i) => (
            <div key={i} className="hero-fade text-left space-y-1 group hover:-translate-y-1 hover:scale-[1.04] transition-all duration-300 cursor-pointer">
              <div className="text-5xl sm:text-6xl font-bold font-heading text-[#E50914] leading-none group-hover:text-white transition-colors">
                {stat.value}
              </div>
              <div className="text-xs uppercase font-mono tracking-widest text-[#8E8E93] font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
