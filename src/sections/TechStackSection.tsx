import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Shield, 
  Terminal, 
  Cpu, 
  Database, 
  Binary, 
  GraduationCap, 
  ExternalLink, 
  Link as LinkIcon 
} from 'lucide-react';
import { personalInfo, linkedinSkillsList } from '../data/hassaanData';

gsap.registerPlugin(ScrollTrigger);

export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    const title = titleRef.current;
    if (!section || !left || !right || !title) return;

    const ctx = gsap.context(() => {
      // Entrance scroll triggers
      gsap.fromTo(title,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      gsap.fromTo(left,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      gsap.fromTo(right,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-20 overflow-hidden border-t border-white/5"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[#050a1f]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3 text-white">
            SKILLS & <span className="bg-gradient-to-r from-[#0096ff] to-[#ff3232] bg-clip-text text-transparent">COMPETENCIES</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-light max-w-xl mx-auto">
            Technical credentials and course specifications indexed from LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-start text-left">
          
          {/* Left Column: Skills lists from LinkedIn */}
          <div ref={leftRef} className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#ff3232]" />
                Professional Skills
              </h3>
              
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#0096ff] hover:underline"
              >
                <span>LinkedIn Profile</span>
                <LinkIcon className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {linkedinSkillsList.map((skillGroup, idx) => (
                <div 
                  key={idx}
                  className="p-5 bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 hover:border-white/10 rounded-2xl transition-all"
                >
                  <h4 className="font-mono text-xs font-bold text-white border-b border-white/5 pb-2 mb-3 uppercase tracking-wider">
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-400 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0096ff]" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Courses & Ecosystem tools */}
          <div ref={rightRef} className="space-y-8">
            
            {/* Courses list */}
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider border-b border-white/5 pb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#0096ff]" />
                Core Coursework
              </h3>
              <div className="p-5 bg-white/[0.01] border border-white/5 rounded-2xl">
                <ul className="grid grid-cols-1 gap-2.5">
                  {personalInfo.courses.map((course, idx) => (
                    <li 
                      key={idx} 
                      className="p-2.5 bg-[#050a1f] border border-white/5 rounded-xl text-xs text-gray-300 font-mono flex items-center justify-between group hover:border-[#0096ff]/20 transition-all"
                    >
                      <span>{`> ${course}`}</span>
                      <span className="text-[10px] text-gray-500 uppercase">Verified</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AI developer tools highlight */}
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider border-b border-white/5 pb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#ff3232]" />
                Workspace Tools
              </h3>
              <div className="p-5 bg-[#0a1535]/20 border border-white/10 rounded-2xl space-y-3 font-mono text-xs leading-relaxed text-gray-400">
                <p>
                  I coordinate active development workflows utilizing modern developer environments, coding assistants, and local CLI tools:
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "agy cli", "opencode", "claude code", "claude AI",
                    "kimo", "kilcode", "kimi", "mimo",
                    "google ai studio", "vertex api", "langgraph", "github"
                  ].map((tool, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-[#050a1f] border border-white/10 rounded-lg text-white font-mono text-[10px]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
