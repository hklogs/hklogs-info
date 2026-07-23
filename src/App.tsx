import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare } from 'lucide-react';

// Import sections
import LoadingScreen from './sections/LoadingScreen';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import ExperienceSection from './sections/ExperienceSection';
import TechStackSection from './sections/TechStackSection';
import GithubProjectsSection from './sections/GithubProjectsSection';
import PublicationsSection from './sections/PublicationsSection';
import ChatbotSection from './sections/ChatbotSection';
import PortalsSection from './sections/PortalsSection';
import PlaygroundsSection from './sections/PlaygroundsSection';
import OracleSection from './sections/OracleSection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Read credentials from localStorage
  const [geminiKey, setGeminiKey] = useState(() => localStorage.getItem('GEMINI_API_KEY') || '');
  const [githubToken, setGithubToken] = useState(() => localStorage.getItem('GITHUB_TOKEN') || '');

  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Loading timer simulating asset setup
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && mainRef.current) {
      const ctx = gsap.context(() => {
        // Refresh ScrollTrigger when sections mount
        ScrollTrigger.refresh();
      }, mainRef);

      return () => ctx.revert();
    }
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen bg-[#050a1f] overflow-x-hidden text-slate-300">
      
      {/* Sticky navigation with active indicator */}
      <Navigation
        onBackToGateway={() => {
          const el = document.getElementById('gateway');
          if (el) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const position = elementRect - bodyRect - offset;
            window.scrollTo({ top: position, behavior: 'smooth' });
          }
        }}
        onToggleChat={() => setIsChatOpen(true)}
      />
      
      {/* Main Content */}
      <main ref={mainRef} className="relative z-10">
        
        {/* 1. Basic Profile (Hero Section) */}
        <section id="about" className="relative z-10">
          <HeroSection
            selectedPath="operator" // Default to Operator/SQA layout styling
            onExploreProjects={() => {
              const el = document.getElementById('projects');
              if (el) {
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = el.getBoundingClientRect().top;
                const position = elementRect - bodyRect - offset;
                window.scrollTo({ top: position, behavior: 'smooth' });
              }
            }}
          />
        </section>

        {/* 2. Education & Experience */}
        <section id="experience" className="relative z-15">
          <ExperienceSection />
        </section>
        
        {/* 3. Projects (GitHub Repos & Vercel links) */}
        <section id="projects" className="relative z-20">
          <GithubProjectsSection
            geminiKey={geminiKey}
            setGeminiKey={setGeminiKey}
            githubToken={githubToken}
            setGithubToken={setGithubToken}
          />
        </section>

        {/* 3.5 SQA Playgrounds */}
        <section id="playgrounds" className="relative z-22">
          <PlaygroundsSection geminiKey={geminiKey} />
        </section>

        {/* 4. Skills Section (LinkedIn stats & Workspace tools) */}
        <section id="skills" className="relative z-25">
          <TechStackSection />
        </section>
        
        {/* 5. Medium Publications */}
        <section id="publications" className="relative z-30">
          <PublicationsSection />
        </section>

        {/* 5.5 AI Oracle */}
        <section id="oracle" className="relative z-32">
          <OracleSection />
        </section>
        
        {/* 6. Services Gateway Section (At the bottom of the page) */}
        <section id="gateway" className="relative z-35">
          <PortalsSection />
        </section>
        
        {/* Footer */}
        <footer className="relative z-30 py-12 bg-[#050a1f] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-gray-400 text-xs">
              <span className="text-[#0096ff]">&lt;/&gt;</span> with 
              <span className="text-[#ff3232]"> &lt;3</span> by Hassaan Abdullah Kiyani
            </p>
            <p className="text-gray-500 text-[10px] mt-2 font-mono uppercase tracking-widest">
              Intelligent Software Engineering &bull; 2026
            </p>
          </div>
        </footer>
      </main>

      {/* Floating AI Twin Button in bottom right corner */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 z-[180] w-12 h-12 bg-gradient-to-r from-[#0096ff] to-[#ff3232] rounded-full flex items-center justify-center border border-white/10 shadow-[0_0_20px_rgba(0,150,255,0.3)] hover:shadow-[0_0_30px_rgba(255,50,50,0.5)] transition-all active:scale-95 group cursor-pointer"
        title="Chat with Hassaan's AI Twin"
      >
        <span className="absolute inset-0 rounded-full bg-[#0096ff]/20 animate-ping group-hover:bg-[#ff3232]/20" />
        <MessageSquare className="w-5 h-5 text-white relative z-10" />
      </button>

      {/* Sidebar Drawer Chatbot Component */}
      <ChatbotSection
        geminiKey={geminiKey}
        setGeminiKey={setGeminiKey}
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </div>
  );
}

export default App;
