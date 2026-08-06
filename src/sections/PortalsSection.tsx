import { Mail, Github, Linkedin, FileText, MapPin, Globe, ArrowRight, Link2, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/hassaanData';

export default function PortalsSection() {
  return (
    <section id="gateway" className="py-24 border-t border-white/10 relative bg-[#0D0D0D] text-left select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start divide-y lg:divide-y-0 lg:divide-x divide-white/10 border-t border-b border-white/10 py-8">
          
          {/* Left Side: LET'S WORK TOGETHER headline + primary contact pills */}
          <div className="lg:col-span-6 space-y-6 p-0 lg:pr-8 flex flex-col justify-center">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#E50914] uppercase tracking-widest font-bold block">
                CONTACT &amp; COLLABORATION
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tight">
                LET'S WORK <span className="text-[#E50914]">TOGETHER</span>
              </h2>
              <p className="text-[#A1A1AA] text-xs sm:text-sm leading-relaxed font-light font-sans max-w-lg pt-1">
                Currently open for SQA Auditing, AI Agent Architecture, and Full-Stack Collaborations.
              </p>
            </div>

            {/* Stacked dark pill rows with subtle circular icons */}
            <div className="space-y-3 pt-2 font-mono text-xs w-full">
              
              {/* Email Direct */}
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3.5 p-3.5 bg-white/[0.02] border border-white/10 hover:border-[#E50914] text-white rounded-full transition-all group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-[#E50914]">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-[10px] text-[#A1A1AA] uppercase font-bold tracking-widest">Email / Direct</span>
                  <span className="text-xs text-white truncate font-medium">{personalInfo.email}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#E50914] group-hover:translate-x-1 transition-all mr-2" />
              </a>

              {/* Linktree */}
              <a 
                href="https://linktr.ee/hklogs"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 p-3.5 bg-white/[0.02] border border-white/10 hover:border-[#E50914] text-white rounded-full transition-all group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-[#E50914]">
                  <Link2 className="w-4 h-4" />
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-[10px] text-[#A1A1AA] uppercase font-bold tracking-widest">Linktree Hub</span>
                  <span className="text-xs text-white truncate font-medium">linktr.ee/hklogs</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#E50914] group-hover:translate-x-1 transition-all mr-2" />
              </a>

              {/* Discord ID */}
              <div className="flex items-center gap-3.5 p-3.5 bg-white/[0.02] border border-white/10 text-white rounded-full">
                <div className="w-8 h-8 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-[#E50914]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-[10px] text-[#A1A1AA] uppercase font-bold tracking-widest">Discord User ID</span>
                  <span className="text-xs text-white truncate font-mono">1527688400419819673 (@hklogs)</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Additional Social & Platform Links */}
          <div className="lg:col-span-6 space-y-3 p-0 lg:pl-8 font-mono text-xs w-full pt-8 lg:pt-0">
            
            {/* GitHub */}
            <a 
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3.5 p-3.5 bg-white/[0.02] border border-white/10 hover:border-[#E50914] text-white rounded-full transition-all group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-[#E50914]">
                <Github className="w-4 h-4" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-[10px] text-[#A1A1AA] uppercase font-bold tracking-widest">GitHub Repository</span>
                <span className="text-xs text-white truncate font-medium">github.com/hklogs</span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#E50914] group-hover:translate-x-1 transition-all mr-2" />
            </a>

            {/* LinkedIn */}
            <a 
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3.5 p-3.5 bg-white/[0.02] border border-white/10 hover:border-[#E50914] text-white rounded-full transition-all group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-[#E50914]">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-[10px] text-[#A1A1AA] uppercase font-bold tracking-widest">LinkedIn Profile</span>
                <span className="text-xs text-white truncate font-medium">Hassaan Abdullah Kiyani</span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#E50914] group-hover:translate-x-1 transition-all mr-2" />
            </a>

            {/* Medium */}
            <a 
              href={personalInfo.medium}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3.5 p-3.5 bg-white/[0.02] border border-white/10 hover:border-[#E50914] text-white rounded-full transition-all group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-[#E50914]">
                <FileText className="w-4 h-4" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-[10px] text-[#A1A1AA] uppercase font-bold tracking-widest">Medium Essays</span>
                <span className="text-xs text-white truncate font-medium">medium.com/@hklogs</span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#E50914] group-hover:translate-x-1 transition-all mr-2" />
            </a>

            {/* Location Badge */}
            <div className="flex items-center gap-3.5 p-3.5 bg-white/[0.02] border border-white/10 text-white rounded-full">
              <div className="w-8 h-8 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-[#E50914]">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-[10px] text-[#A1A1AA] uppercase font-bold tracking-widest">Base Location</span>
                <span className="text-xs text-white truncate font-medium">Rawalpindi / Islamabad, Pakistan</span>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Copyright Line */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-[#A1A1AA] gap-4">
          <div>
            &copy; 2026 Hassaan Abdullah Kiyani &bull; Intelligent Software Engineering
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-[#E50914]" />
            <span>RAWALPINDI / ISLAMABAD, PAKISTAN</span>
          </div>
        </div>

      </div>
    </section>
  );
}
