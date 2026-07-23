import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare } from 'lucide-react';

// Import sections & pages
import LoadingScreen from './sections/LoadingScreen';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import ExperienceSection from './sections/ExperienceSection';
import TechStackSection from './sections/TechStackSection';
import GithubProjectsSection from './sections/GithubProjectsSection';
import PublicationsSection from './sections/PublicationsSection';
import ChatbotSection from './sections/ChatbotSection';
import PortalsSection from './sections/PortalsSection';
import ProjectsVaultPage from './pages/ProjectsVaultPage';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Initialize page view based on initial URL path
  const [pageView, setPageView] = useState<'home' | 'projects-vault'>(() => {
    return typeof window !== 'undefined' && window.location.pathname.startsWith('/projects')
      ? 'projects-vault'
      : 'home';
  });

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

  // Listen to browser Back/Forward popstate events for URL routing
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname.startsWith('/projects')) {
        setPageView('projects-vault');
      } else {
        setPageView('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (!isLoading && pageView === 'home' && mainRef.current) {
      const sections = mainRef.current.querySelectorAll('section');
      sections.forEach((section, index) => {
        const direction = index % 2 === 0 ? -50 : 50;
        gsap.fromTo(
          section,
          { opacity: 0, x: direction, y: 30 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }
  }, [isLoading, pageView]);

  const navigateToVault = () => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', '/projects/');
    }
    setPageView('projects-vault');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', '/');
    }
    setPageView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  // Render Dedicated Standalone Projects Vault Page at /projects/
  if (pageView === 'projects-vault') {
    return (
      <div className="relative min-h-screen bg-[#0D0D0D]">
        <Navigation />
        <div className="pt-16">
          <ProjectsVaultPage onBack={navigateToHome} />
        </div>
      </div>
    );
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

        {/* 2. Experience, Education, Coursework & Volunteer Track */}
        <section id="experience" className="relative z-15">
          <ExperienceSection />
        </section>
        
        {/* 3. Engineered Architectures & Projects */}
        <section id="projects" className="relative z-20">
          <GithubProjectsSection
            geminiKey={geminiKey}
            setGeminiKey={setGeminiKey}
            githubToken={githubToken}
            setGithubToken={setGithubToken}
            onOpenVault={navigateToVault}
          />
        </section>

        {/* 4. Skills & Workspace Tools */}
        <section id="skills" className="relative z-25">
          <TechStackSection />
        </section>
        
        {/* 5. Medium Publications */}
        <section id="publications" className="relative z-30">
          <PublicationsSection />
        </section>
        
        {/* 6. Contact Gateway & Linktree Footer */}
        <section id="gateway" className="relative z-35">
          <PortalsSection />
        </section>
      </main>

      {/* Floating AI Twin Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 z-[180] w-12 h-12 bg-[#E50914] hover:bg-[#b01e1e] rounded-none flex items-center justify-center border border-neutral-800 shadow-[0_0_20px_rgba(229,9,20,0.3)] transition-all hover:scale-105 active:scale-95 group cursor-pointer"
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
