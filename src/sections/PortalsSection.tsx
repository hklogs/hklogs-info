import { Mail, Github, Linkedin, FileText, MapPin, Globe, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/hassaanData';

export default function PortalsSection() {
  return (
    <section id="gateway" className="py-24 border-t border-neutral-800 relative bg-[#0D0D0D] text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: LET'S WORK TOGETHER headline + contact pills */}
          <div className="space-y-6 flex flex-col justify-center">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#E50914] uppercase tracking-widest font-bold block">
                CONTACT &amp; COLLABORATION
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tight">
                LET'S WORK <span className="text-[#E50914]">TOGETHER</span>
              </h2>
              <p className="text-[#8E8E93] text-sm sm:text-base leading-relaxed font-light font-sans max-w-lg pt-1">
                Currently open for SQA Auditing, AI Agent Architecture, and Full-Stack Collaborations.
              </p>
            </div>

            {/* Stacked dark pill rows with subtle circular icons */}
            <div className="space-y-3 pt-2 font-mono text-xs max-w-md">
              
              {/* Email Direct */}
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3.5 p-3.5 bg-[#121212] border border-neutral-800 hover:border-[#E50914]/40 text-white rounded-full transition-all group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#E50914] group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-[10px] text-[#8E8E93] uppercase font-bold tracking-widest">Email / Direct</span>
                  <span className="text-xs text-white truncate font-medium">{personalInfo.email}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8E8E93] group-hover:text-[#E50914] group-hover:translate-x-1 transition-all mr-2" />
              </a>

              {/* GitHub */}
              <a 
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 p-3.5 bg-[#121212] border border-neutral-800 hover:border-[#E50914]/40 text-white rounded-full transition-all group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#E50914] group-hover:scale-105 transition-transform">
                  <Github className="w-4 h-4" />
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-[10px] text-[#8E8E93] uppercase font-bold tracking-widest">GitHub Repository</span>
                  <span className="text-xs text-white truncate font-medium">github.com/hklogs</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8E8E93] group-hover:text-[#E50914] group-hover:translate-x-1 transition-all mr-2" />
              </a>

              {/* LinkedIn */}
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 p-3.5 bg-[#121212] border border-neutral-800 hover:border-[#E50914]/40 text-white rounded-full transition-all group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#E50914] group-hover:scale-105 transition-transform">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-[10px] text-[#8E8E93] uppercase font-bold tracking-widest">LinkedIn Profile</span>
                  <span className="text-xs text-white truncate font-medium">Hassaan Abdullah Kiyani</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8E8E93] group-hover:text-[#E50914] group-hover:translate-x-1 transition-all mr-2" />
              </a>

              {/* Medium */}
              <a 
                href={personalInfo.medium}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 p-3.5 bg-[#121212] border border-neutral-800 hover:border-[#E50914]/40 text-white rounded-full transition-all group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#E50914] group-hover:scale-105 transition-transform">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-[10px] text-[#8E8E93] uppercase font-bold tracking-widest">Medium Essays</span>
                  <span className="text-xs text-white truncate font-medium">medium.com/@hklogs</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8E8E93] group-hover:text-[#E50914] group-hover:translate-x-1 transition-all mr-2" />
              </a>

              {/* Location Badge */}
              <div className="flex items-center gap-3.5 p-3.5 bg-[#121212] border border-neutral-800 text-white rounded-full">
                <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#E50914]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-[10px] text-[#8E8E93] uppercase font-bold tracking-widest">Base Location</span>
                  <span className="text-xs text-white truncate font-medium">Rawalpindi / Islamabad, Pakistan</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Dark Terminal / Device View */}
          <div className="bg-[#121212] border border-neutral-800 p-6 rounded-none space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#E50914] rounded-full" />
                <div className="w-3 h-3 bg-neutral-700 rounded-full" />
                <div className="w-3 h-3 bg-neutral-600 rounded-full" />
                <span className="font-mono text-xs text-white font-bold ml-2">THE ORACLE AI ENGINE</span>
              </div>
              <span className="text-[9px] font-mono text-[#E50914] uppercase tracking-widest font-bold">ONLINE</span>
            </div>

            <div className="font-mono text-xs text-neutral-400 space-y-3 bg-[#181818] p-5 border border-neutral-800 leading-relaxed">
              <p className="text-white font-bold">&gt; system.init_analysis_node()</p>
              <p>&gt; Scanning agent parameters for Hassaan Abdullah Kiyani...</p>
              <p className="text-emerald-400">&gt; Status: Ready to process client requirements &amp; SQA audits.</p>
              <hr className="border-neutral-800 my-2" />
              <p className="text-neutral-500 font-sans text-xs">
                "Whether you require an automated QA test suite, a full-stack Next.js web application, or an intelligent R&amp;D scraping pipeline, reach out through the contact gateway."
              </p>
            </div>
          </div>

        </div>

        {/* Footer Copyright Line */}
        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-[#8E8E93] gap-4">
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
