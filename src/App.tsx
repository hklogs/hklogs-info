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
    <div className="relative min-h-screen bg-[#0D0D0D] overflow-x-hidden text-neutral-300">
      
      {/* Top Fixed Clean Navigation Bar */}
      <Navigation />
      
      {/* Main Content */}
      <main ref={mainRef} className="relative z-10 pt-16">
        
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
        
        {/* 6. Contact Gateway & Footer Section */}
        <section id="gateway" className="relative z-35">
          <PortalsSection />
        </section>
      </main>
 
      {/* Floating AI Twin Button in bottom right corner: style as rectangular red flat button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 z-[180] w-12 h-12 bg-[#E50914] hover:bg-[#b01e1e] rounded-none flex items-center justify-center border border-neutral-800 shadow-[0_0_20px_rgba(229,9,20,0.3)] transition-all active:scale-95 group cursor-pointer"
        title="Chat with Hassaan's AI Twin"
      >
        <span className="absolute inset-0 bg-[#E50914]/20 animate-ping group-hover:bg-[#E50914]/35" />
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
