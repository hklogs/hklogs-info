import { Mail, Github, Linkedin, FileText, MapPin, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/hassaanData';

export default function PortalsSection() {
  return (
    <section id="gateway" className="py-16 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#0D0D0D] border-t border-neutral-900 text-left select-none overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* 2-COLUMN GRID: LEFT (HEADING & STATUS) | RIGHT (DIRECT CONTACT LIST) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN (Cols 1 to 6 - Heading & Status) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-4">
            <h2 className="font-['Oswald'] text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
              LET'S WORK <br />
              <span className="text-[#E50914]">TOGETHER</span>
            </h2>
            
            <p className="text-[#8E8E93] text-sm md:text-base max-w-md mt-4 font-sans font-light leading-relaxed">
              Currently open for SQA Auditing, AI Agent Architecture, and Full-Stack Collaborations.
            </p>

            {/* Minimal Pill Tag Status Badge */}
            <div className="pt-2">
              <div className="px-3.5 py-1.5 border border-[#E50914] text-[#E50914] bg-[#E50914]/5 rounded-full font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#E50914] animate-ping" />
                <span>AVAILABLE FOR FREELANCE &amp; AUDITS</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (Cols 7 to 12 - Direct Contact List) */}
          <div className="lg:col-span-6 space-y-3 font-mono text-xs w-full pt-4 lg:pt-0">
            
            {/* 1. EMAIL / DIRECT */}
            <a 
              href={`mailto:${personalInfo.email}`}
              className="w-full flex items-center justify-between p-4 bg-[#121212] border border-neutral-800 hover:border-[#E50914] text-white transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FF2E37] group-hover:border-[#E50914] transition-colors shrink-0">
                  <Mail className="w-4 h-4 text-[#FF2E37]" />
                </div>
                <div className="flex flex-col text-left truncate">
                  <span className="text-[10px] text-[#8E8E93] uppercase font-bold tracking-widest font-mono">EMAIL / DIRECT</span>
                  <span className="text-xs sm:text-sm text-white font-semibold truncate font-mono">{personalInfo.email}</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#8E8E93] group-hover:text-[#E50914] transition-all shrink-0" />
            </a>

            {/* 2. GITHUB REPOSITORY */}
            <a 
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-between p-4 bg-[#121212] border border-neutral-800 hover:border-[#E50914] text-white transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FF2E37] group-hover:border-[#E50914] transition-colors shrink-0">
                  <Github className="w-4 h-4 text-[#FF2E37]" />
                </div>
                <div className="flex flex-col text-left truncate">
                  <span className="text-[10px] text-[#8E8E93] uppercase font-bold tracking-widest font-mono">GITHUB REPOSITORY</span>
                  <span className="text-xs sm:text-sm text-white font-semibold truncate font-mono">github.com/hklogs</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#8E8E93] group-hover:text-[#E50914] transition-all shrink-0" />
            </a>

            {/* 3. LINKEDIN PROFILE */}
            <a 
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-between p-4 bg-[#121212] border border-neutral-800 hover:border-[#E50914] text-white transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FF2E37] group-hover:border-[#E50914] transition-colors shrink-0">
                  <Linkedin className="w-4 h-4 text-[#FF2E37]" />
                </div>
                <div className="flex flex-col text-left truncate">
                  <span className="text-[10px] text-[#8E8E93] uppercase font-bold tracking-widest font-mono">LINKEDIN PROFILE</span>
                  <span className="text-xs sm:text-sm text-white font-semibold truncate font-mono">Hassaan Abdullah Kiyani</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#8E8E93] group-hover:text-[#E50914] transition-all shrink-0" />
            </a>

            {/* 4. MEDIUM ESSAYS */}
            <a 
              href={personalInfo.medium}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-between p-4 bg-[#121212] border border-neutral-800 hover:border-[#E50914] text-white transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FF2E37] group-hover:border-[#E50914] transition-colors shrink-0">
                  <FileText className="w-4 h-4 text-[#FF2E37]" />
                </div>
                <div className="flex flex-col text-left truncate">
                  <span className="text-[10px] text-[#8E8E93] uppercase font-bold tracking-widest font-mono">MEDIUM ESSAYS</span>
                  <span className="text-xs sm:text-sm text-white font-semibold truncate font-mono">medium.com/@hklogs</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#8E8E93] group-hover:text-[#E50914] transition-all shrink-0" />
            </a>

            {/* 5. BASE LOCATION */}
            <div className="w-full flex items-center justify-between p-4 bg-[#121212] border border-neutral-800 text-white">
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FF2E37] shrink-0">
                  <MapPin className="w-4 h-4 text-[#FF2E37]" />
                </div>
                <div className="flex flex-col text-left truncate">
                  <span className="text-[10px] text-[#8E8E93] uppercase font-bold tracking-widest font-mono">BASE LOCATION</span>
                  <span className="text-xs sm:text-sm text-white font-semibold truncate font-mono">Rawalpindi / Islamabad, Pakistan</span>
                </div>
              </div>
              <span className="w-2 h-2 rounded-full bg-[#E50914] animate-ping mr-1 shrink-0" />
            </div>

          </div>

        </div>

        {/* BOTTOM FOOTER STRIP */}
        <div className="mt-16 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[#8E8E93] text-xs uppercase tracking-widest font-mono gap-4">
          <div>
            &copy; 2026 Hassaan Abdullah Kiyani &bull; Intelligent Software Engineering
          </div>
          <div>
            RAWALPINDI / ISLAMABAD, PAKISTAN
          </div>
        </div>

      </div>
    </section>
  );
}
