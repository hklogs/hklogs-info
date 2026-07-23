import { useState } from 'react';
import { Search, FolderGit, Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { staticProjects, type LocalProject } from '../data/hassaanData';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface ProjectsVaultPageProps {
  onBack: () => void;
}

export default function ProjectsVaultPage({ onBack }: ProjectsVaultPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<LocalProject | null>(null);

  const filteredProjects = staticProjects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    if (selectedCategory === 'All') return matchesSearch;
    if (selectedCategory === 'AI & LLMs') {
      return matchesSearch && (
        project.tech.some(t => ['gemini', 'langgraph', 'langchain', 'tensorflow', 'python'].includes(t.toLowerCase())) ||
        project.name.toLowerCase().includes('ai') ||
        project.name.toLowerCase().includes('agent')
      );
    }
    if (selectedCategory === 'Web Apps') {
      return matchesSearch && project.tech.some(t => ['react', 'next.js', 'vite', 'html5', 'pwa'].includes(t.toLowerCase()));
    }
    if (selectedCategory === 'Mobile Apps') {
      return matchesSearch && project.tech.some(t => ['kotlin', 'android', 'react native'].includes(t.toLowerCase()));
    }
    if (selectedCategory === 'Systems') {
      return matchesSearch && project.tech.some(t => ['c++', 'c#', 'express', 'node.js', 'sql', 'postgresql'].includes(t.toLowerCase()));
    }

    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-neutral-300 py-12 px-6 md:px-12 text-left animate-fade-in select-none">
      <div className="max-w-7xl mx-auto w-full space-y-10">
        
        {/* Top Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-6">
          <button 
            onClick={onBack}
            className="text-xs font-mono uppercase text-[#E50914] hover:text-white font-bold tracking-widest flex items-center gap-2 cursor-pointer transition-all hover:-translate-x-1 w-fit"
          >
            <ArrowLeft className="w-4 h-4 text-[#E50914]" />
            <span>BACK TO PORTFOLIO</span>
          </button>
          
          <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">
            SYSTEM VAULT: {staticProjects.length} CODEBASES INSTANTIATED
          </div>
        </div>

        {/* Page Title & Subtitle */}
        <div className="space-y-4">
          <span className="text-xs font-mono text-[#E50914] uppercase tracking-widest font-bold block">
            STANDALONE ARCHITECTURE REPOSITORY
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tight">
            ENGINEERED <span className="text-[#E50914]">ARCHITECTURES</span> &amp; VAULT
          </h1>
          <p className="text-sm text-[#8E8E93] font-sans max-w-2xl leading-relaxed">
            Inspect, review, and evaluate all validated repository codebases, Next.js web applications, and AI agent frameworks created by Hassaan Abdullah Kiyani.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row gap-4 items-center w-full pt-2">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              placeholder="Search by project name, tech stack, or architecture description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121212] border border-neutral-800 focus:border-[#E50914]/60 rounded-none pl-11 pr-4 py-3 text-xs text-white outline-none transition-all placeholder:text-neutral-500 font-mono"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto w-full sm:w-auto pb-1 shrink-0 no-scrollbar">
            {['All', 'AI & LLMs', 'Web Apps', 'Mobile Apps', 'Systems'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-none border text-xs font-mono font-bold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#E50914] border-[#E50914] text-white shadow-[0_0_15px_rgba(229,9,20,0.3)]'
                    : 'bg-[#121212] border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Monolithic Standalone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 pb-20">
          {filteredProjects.map((project, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="bg-[#121212] border border-neutral-800 hover:border-[#E50914]/40 rounded-none overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] cursor-pointer flex flex-col justify-between group shadow-xl"
            >
              <div className="aspect-video bg-neutral-950 border-b border-neutral-800 overflow-hidden relative">
                {project.thumbnail ? (
                  <img 
                    src={project.thumbnail} 
                    alt={project.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <FolderGit className="w-8 h-8 text-neutral-700 mb-2 group-hover:text-[#E50914] transition-colors" />
                    <span className="text-[10px] font-mono text-neutral-500 uppercase font-bold">{project.name}</span>
                  </div>
                )}
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="text-[#E50914] font-bold">CODEBASE #{idx + 1}</span>
                    <span className="text-neutral-500 font-bold uppercase">{project.tech[0] || 'SOFTWARE'}</span>
                  </div>
                  <h3 className="font-heading font-bold text-white text-xl uppercase tracking-wide group-hover:text-[#E50914] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-[#8E8E93] leading-relaxed font-sans line-clamp-3">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2.5 py-0.5 bg-[#181818] rounded-none font-mono text-[9px] text-neutral-300 border border-neutral-800 uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="bg-[#0D0D0D] border border-neutral-800 text-neutral-300 max-w-2xl rounded-none p-6 sm:p-8 shadow-2xl text-left">
          {selectedProject && (
            <div className="space-y-6">
              <DialogHeader className="border-b border-neutral-800 pb-4 text-left">
                <span className="text-[9px] font-mono text-[#E50914] uppercase tracking-widest font-bold block">
                  ARCHITECTURE SPECIFICATIONS
                </span>
                <DialogTitle className="font-heading font-bold text-2xl text-white uppercase tracking-tight mt-1">
                  {selectedProject.name}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4 text-xs leading-relaxed">
                <div>
                  <h4 className="text-[10px] font-mono uppercase text-[#E50914] font-bold tracking-widest mb-1">
                    System Overview
                  </h4>
                  <p className="text-neutral-300 font-sans">{selectedProject.desc}</p>
                </div>

                <div>
                  <h4 className="text-[10px] font-mono uppercase text-[#E50914] font-bold tracking-widest mb-1">
                    Core Use-case
                  </h4>
                  <p className="text-neutral-400 font-sans">{selectedProject.usecase}</p>
                </div>

                <div>
                  <h4 className="text-[10px] font-mono uppercase text-[#E50914] font-bold tracking-widest mb-1">
                    Execution Mechanism
                  </h4>
                  <p className="text-neutral-400 font-sans">{selectedProject.working}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-neutral-800">
                <a 
                  href={selectedProject.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-[#121212] border border-neutral-800 hover:bg-neutral-800 text-white text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Github className="w-4 h-4 text-neutral-400" />
                  <span>GitHub Repository</span>
                </a>
                {selectedProject.vercelUrl && (
                  <a 
                    href={selectedProject.vercelUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 bg-[#E50914] hover:bg-[#b01e1e] text-white text-xs font-mono font-bold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(229,9,20,0.3)] cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Web Console</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
