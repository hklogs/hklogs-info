import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { User, Briefcase, FileText, Laptop, MessageSquare, Terminal, ChevronLeft, Sparkles } from 'lucide-react';

const navItems = [
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Laptop },
  { id: 'playgrounds', label: 'QA Labs', icon: Terminal },
  { id: 'publications', label: 'Publications', icon: FileText },
  { id: 'oracle', label: 'Oracle', icon: Sparkles },
  { id: 'twin', label: 'AI Twin', icon: MessageSquare },
];

interface NavigationProps {
  onBackToGateway: () => void;
  onToggleChat: () => void;
}

export default function Navigation({ onBackToGateway, onToggleChat }: NavigationProps) {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(true);
  const navRef = useRef<HTMLElement>(null);
  const activeIndicatorRef = useRef<HTMLSpanElement>(null);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Determine active section
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const scrollPosition = scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const offsetTop = section.element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Entrance animation
  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current, {
        y: -50,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      });
    }
  }, []);

  // Handle sliding active indicator
  useEffect(() => {
    const activeIndex = navItems.findIndex(item => item.id === activeSection);
    const activeButton = buttonsRef.current[activeIndex];
    const indicator = activeIndicatorRef.current;

    if (activeButton && indicator) {
      const { offsetLeft, offsetWidth } = activeButton;
      gsap.to(indicator, {
        x: offsetLeft,
        width: offsetWidth,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      ref={navRef}
      className="fixed top-4 left-0 right-0 z-[100] px-4 w-full flex justify-center"
    >
      <div className="relative bg-[#0a1535]/80 backdrop-blur-xl rounded-full p-1.5 flex items-center border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5),0_0_20px_rgba(0,150,255,0.08)] max-w-full overflow-x-auto no-scrollbar gap-1">
        {/* Back to Gateway button */}
        <button
          onClick={onBackToGateway}
          className="relative px-3.5 py-2.5 rounded-full flex items-center gap-1.5 transition-colors duration-300 text-xs font-semibold text-gray-400 hover:text-[#ff3232] border border-white/5 hover:border-[#ff3232]/20 mr-1 bg-white/5"
          title="Return to Selection Gateway"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Gateway</span>
        </button>

        {/* Sliding Active Indicator */}
        <span 
          ref={activeIndicatorRef}
          className="absolute h-[calc(100%-12px)] top-[6px] rounded-full bg-gradient-to-r from-[#0096ff]/15 to-[#ff3232]/15 border border-white/10"
          style={{ width: 0 }}
        />

        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              ref={el => { buttonsRef.current[index] = el; }}
              onClick={() => {
                if (item.id === 'twin') {
                  onToggleChat();
                } else {
                  scrollToSection(item.id);
                }
              }}
              className={`
                relative px-3.5 py-2.5 rounded-full flex items-center gap-2
                transition-colors duration-300 text-xs font-medium shrink-0
                ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}
              `}
            >
              <Icon className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? 'text-[#0096ff] scale-110' : 'group-hover:scale-110'}`} />
              <span className="hidden md:inline relative z-10">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
