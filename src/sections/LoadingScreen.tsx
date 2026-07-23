import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function LoadingScreen() {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Progress bar animation
    tl.to(barRef.current, {
      width: '100%',
      duration: 1.5,
      ease: 'power2.inOut',
    });

    // Text scramble effect
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    const originalText = 'INITIALIZING';
    let iteration = 0;

    const interval = setInterval(() => {
      if (textRef.current) {
        textRef.current.innerText = originalText
          .split('')
          .map((_, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
      }

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    // Fade out content first, then animate panels
    tl.to(contentRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
    }, "+=0.2");

    // Exit animation - panels slide out
    tl.to([leftPanelRef.current, rightPanelRef.current], {
      scaleX: 0,
      duration: 0.8,
      ease: 'power3.inOut',
      stagger: 0.1,
    }, "-=0.1");

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#0D0D0D] select-none"
    >
      {/* Background with subtle crimson gradient */}
      <div className="absolute inset-0 bg-[#0D0D0D]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#140203]/60 via-[#0D0D0D] to-[#140203]/60" />

      {/* Left Panel - slide exit */}
      <div
        ref={leftPanelRef}
        className="absolute left-0 top-0 w-1/2 h-full bg-[#0D0D0D] origin-left border-r border-neutral-800/40"
      />

      {/* Right Panel - slide exit */}
      <div
        ref={rightPanelRef}
        className="absolute right-0 top-0 w-1/2 h-full bg-[#0D0D0D] origin-right border-l border-neutral-800/40"
      />

      {/* Center Content */}
      <div ref={contentRef} className="relative z-10 flex flex-col items-center gap-8 px-4 text-center">
        
        {/* Subtitle */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#E50914] font-bold uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
          <span>SYSTEM ARCHITECTURE BOOT</span>
        </div>

        {/* Loading Text with Crimson Glow */}
        <div
          ref={textRef}
          className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase drop-shadow-[0_0_25px_rgba(229,9,20,0.6)]"
        >
          INITIALIZING
        </div>

        {/* Progress Bar Container */}
        <div className="w-64 sm:w-80 md:w-96 h-1.5 bg-[#181818] border border-neutral-800 rounded-none overflow-hidden">
          {/* Crimson Progress Bar */}
          <div
            ref={barRef}
            className="h-full w-0 rounded-none bg-[#E50914]"
            style={{
              boxShadow: '0 0 20px rgba(229, 9, 20, 0.8), 0 0 40px rgba(229, 9, 20, 0.4)',
            }}
          />
        </div>

        {/* Status Line */}
        <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
          <span className="text-[#E50914] font-bold">HKLOGS</span>
          <span className="mx-2 text-neutral-600">•</span>
          <span className="text-neutral-300">SQA &amp; AI ENGINE</span>
          <span className="mx-2 text-neutral-600">|</span>
          <span className="animate-pulse text-[#E50914]">LOADING...</span>
        </div>
      </div>

      {/* Sharp Crimson Corner Brackets matching main site layout */}
      <div className="absolute top-6 left-6 w-10 h-10 border-l-2 border-t-2 border-[#E50914]/60" />
      <div className="absolute top-6 right-6 w-10 h-10 border-r-2 border-t-2 border-[#E50914]/60" />
      <div className="absolute bottom-6 left-6 w-10 h-10 border-l-2 border-b-2 border-[#E50914]/60" />
      <div className="absolute bottom-6 right-6 w-10 h-10 border-r-2 border-b-2 border-[#E50914]/60" />
    </div>
  );
}
