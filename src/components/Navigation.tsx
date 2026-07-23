import { useState } from 'react';
import { Menu, X, Code2, Briefcase, Wrench, FolderGit2, BookOpen, Send } from 'lucide-react';

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
    <header className="fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 md:px-12 py-3.5 flex justify-between items-center bg-[#0D0D0D]/95 backdrop-blur-md border-b border-neutral-800/80 select-none">
      {/* Top Left: Title & Sub-title */}
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex items-center gap-2.5 cursor-pointer group"
      >
        <div className="w-2.5 h-2.5 bg-[#E50914] group-hover:scale-125 transition-transform" />
        <span className="text-white font-mono text-[10px] sm:text-xs uppercase tracking-widest font-bold">
          SOFTWARE QUALITY ASSURANCE &amp; AI ENGINEER
        </span>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-6 text-xs font-mono tracking-wider uppercase text-neutral-400">
        <button
          onClick={() => scrollToSection('about')}
          className="hover:text-white transition-colors cursor-pointer"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection('experience')}
          className="hover:text-white transition-colors cursor-pointer"
        >
          Experience
        </button>
        <button
          onClick={() => scrollToSection('projects')}
          className="hover:text-white transition-colors cursor-pointer"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection('skills')}
          className="hover:text-white transition-colors cursor-pointer"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection('publications')}
          className="hover:text-white transition-colors cursor-pointer"
        >
          Publications
        </button>
        <button
          onClick={() => scrollToSection('gateway')}
          className="px-3 py-1.5 bg-[#E50914] text-white font-bold hover:bg-[#b01e1e] transition-colors cursor-pointer"
        >
          Contact
        </button>
      </nav>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none cursor-pointer"
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? <X className="w-5 h-5 text-[#E50914]" /> : <Menu className="w-5 h-5 text-white" />}
      </button>

      {/* Mobile Dropdown Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0D0D0D]/98 border-b border-neutral-800 p-6 flex flex-col gap-4 animate-fade-in shadow-2xl z-[110]">
          <button
            onClick={() => scrollToSection('about')}
            className="flex items-center gap-3 text-left text-sm font-mono tracking-wider uppercase text-neutral-300 hover:text-[#E50914] transition-colors py-1.5"
          >
            <Code2 className="w-4 h-4 text-[#E50914]" />
            <span>About Profile</span>
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="flex items-center gap-3 text-left text-sm font-mono tracking-wider uppercase text-neutral-300 hover:text-[#E50914] transition-colors py-1.5"
          >
            <Briefcase className="w-4 h-4 text-[#E50914]" />
            <span>Experience &amp; Education</span>
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="flex items-center gap-3 text-left text-sm font-mono tracking-wider uppercase text-neutral-300 hover:text-[#E50914] transition-colors py-1.5"
          >
            <FolderGit2 className="w-4 h-4 text-[#E50914]" />
            <span>GitHub Projects</span>
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="flex items-center gap-3 text-left text-sm font-mono tracking-wider uppercase text-neutral-300 hover:text-[#E50914] transition-colors py-1.5"
          >
            <Wrench className="w-4 h-4 text-[#E50914]" />
            <span>Skills &amp; Tech Stack</span>
          </button>
          <button
            onClick={() => scrollToSection('publications')}
            className="flex items-center gap-3 text-left text-sm font-mono tracking-wider uppercase text-neutral-300 hover:text-[#E50914] transition-colors py-1.5"
          >
            <BookOpen className="w-4 h-4 text-[#E50914]" />
            <span>Publications</span>
          </button>
          <button
            onClick={() => scrollToSection('gateway')}
            className="flex items-center gap-3 text-left text-sm font-mono tracking-wider uppercase text-white bg-[#E50914] hover:bg-[#b01e1e] p-3 transition-colors font-bold mt-2"
          >
            <Send className="w-4 h-4 text-white" />
            <span>Contact &amp; Freelance Gateway</span>
          </button>
        </div>
      )}
    </header>
  );
}
