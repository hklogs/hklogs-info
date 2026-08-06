import { useState } from 'react';
import { Menu, X, Code2, Briefcase, FolderGit2, Send } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const position = elementRect - bodyRect - offset;
      window.scrollTo({ top: position, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 md:px-10 py-4 flex justify-between items-center bg-[#0D0D0D] border-b border-neutral-900 select-none">
      {/* Top Left: Small uppercase bold text */}
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex flex-col text-left cursor-pointer group"
      >
        <span className="text-white font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest leading-tight group-hover:text-[#E50914] transition-colors">
          HASSAAN ABDULLAH KIYANI
        </span>
        <span className="text-[#8E8E93] font-mono text-[9px] sm:text-[10px] uppercase tracking-widest leading-tight">
          SQA SPECIALIST &amp; AI ENGINEER
        </span>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-neutral-400">
        <button
          onClick={() => scrollToSection('about')}
          className="hover:text-white transition-colors cursor-pointer"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection('projects')}
          className="hover:text-white transition-colors cursor-pointer"
        >
          Selected Projects
        </button>
        <button
          onClick={() => scrollToSection('experience')}
          className="hover:text-white transition-colors cursor-pointer"
        >
          Education &amp; Experience
        </button>
        <button
          onClick={() => scrollToSection('gateway')}
          className="hover:text-white transition-colors cursor-pointer"
        >
          Contact
        </button>
      </nav>

      {/* Top Right: Compact Red Pill Tag & Mobile Menu Toggle */}
      <div className="flex items-center gap-3">
        {/* Extended Pill for Desktop/Tablet */}
        <div className="hidden sm:flex px-3.5 py-1.5 border border-[#E50914] text-[#E50914] bg-[#E50914]/5 rounded-full font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-ping" />
          <span>AVAILABLE FOR SQA AUDITING ✦</span>
        </div>

        {/* Compact Pill Tag for Mobile (<640px) */}
        <div className="flex sm:hidden px-2.5 py-1 border border-[#E50914] text-[#E50914] bg-[#E50914]/5 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-ping" />
          <span>AVAILABLE ✦</span>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-1.5 text-neutral-300 hover:text-white focus:outline-none cursor-pointer"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#E50914]" /> : <Menu className="w-5 h-5 text-white" />}
        </button>
      </div>

      {/* Mobile Dropdown Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0D0D0D] border-b border-neutral-900 p-6 flex flex-col gap-4 animate-fade-in shadow-2xl z-[110]">
          <div className="pb-2 border-b border-neutral-800 flex justify-between items-center">
            <span className="px-3 py-1 border border-[#E50914] text-[#E50914] bg-[#E50914]/5 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
              <span>AVAILABLE ✦</span>
            </span>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="flex items-center gap-3 text-left text-sm font-mono tracking-wider uppercase text-neutral-300 hover:text-[#E50914] transition-colors py-1.5"
          >
            <Code2 className="w-4 h-4 text-[#E50914]" />
            <span>About Profile</span>
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="flex items-center gap-3 text-left text-sm font-mono tracking-wider uppercase text-neutral-300 hover:text-[#E50914] transition-colors py-1.5"
          >
            <FolderGit2 className="w-4 h-4 text-[#E50914]" />
            <span>Selected Projects</span>
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="flex items-center gap-3 text-left text-sm font-mono tracking-wider uppercase text-neutral-300 hover:text-[#E50914] transition-colors py-1.5"
          >
            <Briefcase className="w-4 h-4 text-[#E50914]" />
            <span>Education &amp; Experience</span>
          </button>
          <button
            onClick={() => scrollToSection('gateway')}
            className="flex items-center gap-3 text-left text-sm font-mono tracking-wider uppercase text-white bg-[#E50914] hover:bg-[#b01e1e] p-3 transition-colors font-bold mt-2"
          >
            <Send className="w-4 h-4 text-white" />
            <span>Contact Gateway</span>
          </button>
        </div>
      )}
    </header>
  );
}
