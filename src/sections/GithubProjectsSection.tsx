import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ExternalLink, Sparkles, AlertCircle, FolderGit, Check } from 'lucide-react';
import { staticProjects, type LocalProject } from '../data/hassaanData';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

gsap.registerPlugin(ScrollTrigger);

interface GithubProjectsSectionProps {
  geminiKey: string;
  setGeminiKey: (key: string) => void;
  githubToken: string;
  setGithubToken: (token: string) => void;
}

export default function GithubProjectsSection({
  geminiKey,
  setGeminiKey,
  githubToken,
  setGithubToken,
}: GithubProjectsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  const [tempGeminiKey, setTempGeminiKey] = useState(geminiKey);
  const [tempGithubToken, setTempGithubToken] = useState(githubToken);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [selectedProject, setSelectedProject] = useState<LocalProject | null>(null);

  useEffect(() => {
    setTempGeminiKey(geminiKey);
    setTempGithubToken(githubToken);
  }, [geminiKey, githubToken]);

  const handleSaveKeys = (e: React.FormEvent) => {
    e.preventDefault();
    setGeminiKey(tempGeminiKey);
    setGithubToken(tempGithubToken);
    localStorage.setItem('GEMINI_API_KEY', tempGeminiKey);
    localStorage.setItem('GITHUB_TOKEN', tempGithubToken);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  // GSAP 3D Scroll Trigger effect
  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.project-3d-card');
    if (!cards || cards.length === 0) return;

    const ctx = gsap.context(() => {
      cards.forEach((card) => {
        // Tilt cards into perspective as they scroll into view, straighten up, then tilt back out
        gsap.fromTo(card,
          { 
            rotationX: 18, 
            rotationY: -10, 
            z: -60, 
            opacity: 0.7,
            scale: 0.95
          },
          {
            rotationX: 0,
            rotationY: 0,
            z: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=60",
              end: "bottom center+=150",
              scrub: 1.2,
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="projects" 
      className="py-20 border-t border-white/5 relative overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      {/* Visual background details */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#ff3232]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#0096ff]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title and Console Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-stretch text-left">
          
          {/* Left 2 columns: Title & Description */}
          <div className="lg:col-span-2 flex flex-col justify-center bg-[#0a1535]/25 border border-white/5 rounded-3xl p-8 backdrop-blur-sm space-y-4">
            <span className="text-[10px] font-mono text-[#0096ff] uppercase tracking-widest font-bold">
              SYSTEM PORTFOLIO: COMPILED
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
              PROJECT <span className="bg-gradient-to-r from-[#0096ff] to-[#ff3232] bg-clip-text text-transparent">SHOWCASE</span>
            </h2>
            <p className="text-gray-400 text-xs md:text-sm font-light font-mono max-w-2xl leading-relaxed">
              {`> Every card represents a validated, functional codebase. Click any card to inspect architecture specifications, SQA workflows, execution steps, and live console nodes.`}
            </p>
            <div className="flex flex-wrap gap-4 items-center pt-2">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-gray-500 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Log Analyzer: Online</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-gray-500 font-mono">
                <span className="w-2 h-2 rounded-full bg-[#0096ff] animate-pulse" />
                <span>Vercel Nodes: Active</span>
              </div>
            </div>
          </div>

          {/* Right 1 column: Compact System Console */}
          <div className="bg-[#0a1535]/50 border border-white/10 rounded-3xl p-6 backdrop-blur-md flex flex-col justify-between space-y-4">
            <div className="flex items-center gap-2 border-b border-white/5 pb-2">
              <FolderGit className="w-4 h-4 text-[#ff3232]" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                System Console
              </h3>
            </div>
            
            <form onSubmit={handleSaveKeys} className="space-y-3 text-left">
              <div className="space-y-1">
                <label className="text-[8px] font-mono uppercase tracking-widest text-gray-400 block font-bold">
                  Gemini API Key
                </label>
                <input
                  type="password"
                  value={tempGeminiKey}
                  onChange={(e) => setTempGeminiKey(e.target.value)}
                  placeholder="Paste Gemini API Key..."
                  className="w-full bg-[#050a1f] border border-white/10 hover:border-white/20 rounded-lg px-3 py-1.5 text-[11px] text-white outline-none transition-all placeholder:text-gray-600 font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[8px] font-mono uppercase tracking-widest text-gray-400 block font-bold">
                  GitHub Token
                </label>
                <input
                  type="password"
                  value={tempGithubToken}
                  onChange={(e) => setTempGithubToken(e.target.value)}
                  placeholder="Increase API rate limits..."
                  className="w-full bg-[#050a1f] border border-white/10 hover:border-white/20 rounded-lg px-3 py-1.5 text-[11px] text-white outline-none transition-all placeholder:text-gray-600 font-mono"
                />
              </div>

              <button
                type="submit"
                className="w-full py-1.5 bg-gradient-to-r from-[#0096ff]/20 to-[#ff3232]/20 hover:from-[#0096ff]/30 hover:to-[#ff3232]/30 border border-white/10 hover:border-white/20 text-white font-bold text-xs rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {saveSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 text-[10px]">Applied</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-[10px]">Configure System</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* 3-Column Grid for Project Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staticProjects.map((project, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="project-3d-card group relative bg-[#0a1535]/30 hover:bg-[#0a1535]/60 border border-white/10 hover:border-[#0096ff]/40 rounded-3xl overflow-hidden transition-all duration-300 shadow-xl flex flex-col transform-gpu w-full text-left cursor-pointer"
              style={{ 
                transformStyle: 'preserve-3d',
                boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
              }}
            >
              {/* Visual Glow Effect inside Card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0096ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Card Screenshot */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 border-b border-white/10 flex items-center justify-center">
                {project.thumbnail ? (
                  <img 
                    src={project.thumbnail} 
                    alt={project.name}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a1535] to-[#050a1f] flex flex-col items-center justify-center p-6 text-center group-hover:scale-105 transition-all duration-700 ease-out">
                    <FolderGit className="w-8 h-8 text-[#0096ff]/40 mb-2 group-hover:text-[#ff3232]/60 transition-colors" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#0096ff]/60 group-hover:text-[#ff3232]/80 transition-colors font-bold">
                      {project.name}
                    </span>
                  </div>
                )}
                {/* HUD markings */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/30" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/30" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/30" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/30" />
              </div>

              {/* Card Summary Information */}
              <div className="p-5 flex flex-col justify-between flex-1 relative z-10">
                <div className="space-y-2">
                  <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest font-bold">
                    {`Project_0${idx + 1}`}
                  </span>
                  <h3 className="font-heading font-bold text-white text-sm tracking-wide leading-snug">
                    {project.name}
                  </h3>
                  <p className="text-[11px] text-gray-400 leading-relaxed font-light font-sans line-clamp-2">
                    {project.desc}
                  </p>
                </div>

                {/* Tech Stack badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 mt-4 border-t border-white/5">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span 
                      key={i} 
                      className="px-1.5 py-0.5 bg-white/5 rounded-md font-mono text-[8px] text-gray-400 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[8px] font-mono text-gray-500 self-center">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detailed Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="bg-[#050a1f] border border-white/10 text-slate-300 max-w-2xl rounded-3xl backdrop-blur-xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
          {selectedProject && (
            <div className="space-y-6">
              <DialogHeader className="text-left border-b border-white/5 pb-4">
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block font-bold">
                  PROJECT SPECIFICATIONS
                </span>
                <DialogTitle className="font-heading font-bold text-2xl text-white tracking-wide mt-1">
                  {selectedProject.name}
                </DialogTitle>
                <DialogDescription className="text-xs text-gray-400 font-light mt-2 leading-relaxed">
                  {selectedProject.desc}
                </DialogDescription>
              </DialogHeader>

              {/* Project Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border border-white/10 rounded-2xl flex items-center justify-center">
                {selectedProject.thumbnail ? (
                  <img 
                    src={selectedProject.thumbnail} 
                    alt={selectedProject.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a1535] to-[#050a1f] flex flex-col items-center justify-center p-6 text-center">
                    <FolderGit className="w-12 h-12 text-[#0096ff]/40 mb-2" />
                    <span className="text-xs font-mono uppercase tracking-widest text-[#0096ff]/60 font-bold">
                      {selectedProject.name}
                    </span>
                  </div>
                )}
                {/* HUD markings */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-white/30" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/30" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-white/30" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-white/30" />
              </div>

              {/* Project Details Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {/* Left Side: Working */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#0096ff] font-bold">
                    SYSTEM WORKING
                  </h4>
                  <p className="text-xs text-gray-300 font-light leading-relaxed font-sans">
                    {selectedProject.working}
                  </p>
                </div>

                {/* Right Side: Usecase */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#ff3232] font-bold">
                    USE CASE & IMPACT
                  </h4>
                  <p className="text-xs text-gray-300 font-light leading-relaxed font-sans">
                    {selectedProject.usecase}
                  </p>
                </div>
              </div>

              {/* Tech Stack used */}
              <div className="space-y-2 text-left border-t border-white/5 pt-4">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-bold">
                  TECHNOLOGY INDEX
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 bg-white/5 rounded-md font-mono text-[9px] text-gray-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-4 border-t border-white/5">
                <a 
                  href={selectedProject.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                {selectedProject.vercelUrl && (
                  <a 
                    href={selectedProject.vercelUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="px-5 py-2.5 bg-gradient-to-r from-[#0096ff] to-[#ff3232] hover:opacity-90 text-white rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(0,150,255,0.2)]"
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
    </section>
  );
}
