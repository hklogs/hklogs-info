import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Terminal, Shield, Mail, ExternalLink, ArrowRight, MessageSquare } from 'lucide-react';
import RiftBackground from '../components/RiftBackground';
import { personalInfo } from '../data/hassaanData';

gsap.registerPlugin(ScrollTrigger);

export default function PortalsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<'architect' | 'operator' | null>(null);
  const [activeContactPanel, setActiveContactPanel] = useState<'architect' | 'operator' | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        '.portals-title',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Cards entrance
      const cardElements = cards.querySelectorAll('.portal-card');
      gsap.fromTo(
        cardElements,
        { y: 60, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleScrollToChat = () => {
    const el = document.getElementById('twin');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="gateway"
      className="relative min-h-[640px] py-20 overflow-hidden flex flex-col justify-center border-t border-white/5"
    >
      {/* Three.js Rift Background reactive to mouse */}
      <RiftBackground />

      {/* Transparent overlay for contrast */}
      <div className="absolute inset-0 bg-[#050a1f]/75 pointer-events-none z-[1]" />

      {/* Section Title */}
      <div className="portals-title text-center mb-12 px-6 relative z-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3 tracking-tight">
          <span className="text-white">SERVICES &</span>
          <span className="bg-gradient-to-r from-[#0096ff] to-[#ff3232] bg-clip-text text-transparent"> GATEWAY</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-xs md:text-sm font-light">
          Select a gateway route below to follow, hire, or coordinate project requirements.
        </p>
      </div>

      {/* Cards Container */}
      <div
        ref={cardsRef}
        className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 w-full"
      >
        {/* Development Services (Architect Portal) */}
        <div
          className="portal-card group relative h-full cursor-pointer"
          onMouseEnter={() => setHoveredCard('architect')}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => setActiveContactPanel(activeContactPanel === 'architect' ? null : 'architect')}
        >
          <div className="relative h-full rounded-3xl overflow-hidden border border-[#0096ff]/35 group-hover:border-[#0096ff]/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,150,255,0.15)] bg-[#0a1535]/85 backdrop-blur-md flex flex-col min-h-[340px]">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0096ff] to-transparent opacity-60" />
            
            <div className="p-8 flex flex-col justify-between flex-1 h-full">
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0096ff]/10 border border-[#0096ff]/20 flex items-center justify-center text-[#0096ff]">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider">
                      Full-Stack Engineering
                    </h3>
                    <p className="text-[10px] font-mono text-[#0096ff] uppercase tracking-widest leading-none">
                      Architect portal
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed font-light text-left">
                  Hire me to construct robust web app platforms, setup backend server architectures, coordinate API gateways, and manage database integrations.
                </p>

                <div className="space-y-1.5 pt-2 text-left">
                  <div className="text-[9px] font-mono uppercase tracking-widest text-[#0096ff] font-bold">Offerings:</div>
                  <ul className="text-xs text-gray-400 space-y-1 font-light">
                    <li>&bull; Next.js / React Web App Building</li>
                    <li>&bull; REST & GraphQL API Architecture</li>
                    <li>&bull; Database Modeling (MongoDB, SQL)</li>
                  </ul>
                </div>
              </div>

              {/* Action trigger */}
              <div className="pt-6 border-t border-[#0096ff]/10 flex items-center justify-between mt-6">
                <span className="text-[10px] text-gray-500 font-mono">Status: Available</span>
                <span className="flex items-center gap-1 text-[#0096ff] font-mono text-xs group-hover:gap-2 transition-all">
                  <span>Work With Me</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* SQA Services (Operator Portal) */}
        <div
          className="portal-card group relative h-full cursor-pointer"
          onMouseEnter={() => setHoveredCard('operator')}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => setActiveContactPanel(activeContactPanel === 'operator' ? null : 'operator')}
        >
          <div className="relative h-full rounded-3xl overflow-hidden border border-[#ff3232]/35 group-hover:border-[#ff3232]/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,50,50,0.15)] bg-[#1a0505]/85 backdrop-blur-md flex flex-col min-h-[340px]">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff3232] to-transparent opacity-60" />
            
            {hoveredCard === 'operator' && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.05] z-0">
                <MatrixRain />
              </div>
            )}

            <div className="p-8 flex flex-col justify-between flex-1 h-full relative z-10">
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#ff3232]/10 border border-[#ff3232]/20 flex items-center justify-center text-[#ff3232]">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider">
                      Software Quality Assurance
                    </h3>
                    <p className="text-[10px] font-mono text-[#ff3232] uppercase tracking-widest leading-none">
                      Operator portal
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed font-light text-left">
                  Initiate test plan audits, design automated validation scripts, audit boundary constraints, and test application logic for high stability.
                </p>

                <div className="space-y-1.5 pt-2 text-left">
                  <div className="text-[9px] font-mono uppercase tracking-widest text-[#ff3232] font-bold">Services:</div>
                  <ul className="text-xs text-gray-400 space-y-1 font-light font-mono">
                    <li>{`> Heuristic & UI/UX Auditing`}</li>
                    <li>{`> Boundary Value Analysis`}</li>
                    <li>{`> Automated AI Test Suites`}</li>
                  </ul>
                </div>
              </div>

              {/* Action trigger */}
              <div className="pt-6 border-t border-[#ff3232]/10 flex items-center justify-between mt-6">
                <span className="text-[10px] text-gray-500 font-mono">Status: Active</span>
                <span className="flex items-center gap-1 text-[#ff3232] font-mono text-xs group-hover:gap-2 transition-all">
                  <span>Audit Codebase</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Dynamic contact information dropdown */}
      {activeContactPanel && (
        <div className="max-w-xl mx-auto mt-10 px-6 relative z-20 w-full animate-fade-in">
          <div className={`p-6 border rounded-2xl backdrop-blur-xl ${
            activeContactPanel === 'architect' 
              ? 'bg-[#0a1535]/90 border-[#0096ff]/30 text-left'
              : 'bg-[#1a0505]/90 border-[#ff3232]/30 text-left'
          }`}>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              {activeContactPanel === 'architect' 
                ? 'Connect with the Full-Stack Developer'
                : 'Connect with the SQA Operator'}
            </h4>
            
            <p className="text-xs text-gray-400 font-light leading-relaxed mb-4">
              {activeContactPanel === 'architect'
                ? 'Ready to build high-scale React/Next.js systems? Let&apos;s map out your project details. Hire me on Fiverr or drop a direct email.'
                : 'Need your software verified? I offer deep code logic audits, boundary capping audits, and test script generation.'}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${personalInfo.email}?subject=${
                  activeContactPanel === 'architect' 
                    ? 'Project Proposal - Developer Services' 
                    : 'SQA Code Audit Request'
                }`}
                className="px-4 py-2 bg-white text-black hover:bg-gray-200 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Direct Email</span>
              </a>
              <a
                href={personalInfo.fiverr}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#1dbf73] hover:bg-[#158f55] text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Hire on Fiverr</span>
              </a>
              <a
                href={personalInfo.upwork}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#37a000] hover:bg-[#287500] text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Hire on Upwork</span>
              </a>
              <button
                onClick={handleScrollToChat}
                className="px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-xs font-semibold text-white flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#0096ff]" />
                <span>Consult My AI Twin</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Social Follow Links */}
      <div className="max-w-2xl mx-auto mt-12 text-center relative z-10">
        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
          Follow &amp; Reach Out
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs font-mono">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0096ff] transition-colors text-xs font-mono">
            LinkedIn
          </a>
          <a href={personalInfo.medium} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#ff3232] transition-colors text-xs font-mono">
            Medium
          </a>
        </div>
      </div>

    </section>
  );
}

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 12;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    let animationId: number;

    const draw = () => {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#ff3232';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}
