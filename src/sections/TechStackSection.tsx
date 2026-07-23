import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Shield, 
  Cpu, 
  GraduationCap, 
  Link as LinkIcon 
} from 'lucide-react';
import { personalInfo, linkedinSkillsList, detailedCourses } from '../data/hassaanData';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

gsap.registerPlugin(ScrollTrigger);

export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [isCoursesModalOpen, setIsCoursesModalOpen] = useState(false);

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
      className="relative py-20 overflow-hidden border-t border-neutral-800 bg-[#0D0D0D] select-none"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-3 text-white">
            SKILLS &amp; <span className="text-[#E50914]">COMPETENCIES</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base font-light max-w-xl mx-auto font-sans">
            Technical credentials and course specifications indexed from LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-start text-left">
          
          {/* Left Column: Skills lists from LinkedIn */}
          <div ref={leftRef} className="space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#E50914]" />
                Professional Skills
              </h3>
              
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#E50914] hover:underline font-mono"
              >
                <span>LinkedIn Profile</span>
                <LinkIcon className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {linkedinSkillsList.map((skillGroup, idx) => (
                <div 
                  key={idx}
                  className="p-5 bg-[#121212] border border-neutral-800 hover:border-neutral-700 rounded-none transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <h4 className="font-mono text-xs font-bold text-[#E50914] border-b border-neutral-800 pb-2 mb-3 uppercase tracking-wider">
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-neutral-300 font-light font-sans">
                        <span className="w-1.5 h-1.5 bg-[#E50914] shrink-0" />
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
            
            {/* Core Coursework List + Explore All Button */}
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider border-b border-neutral-800 pb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#E50914]" />
                Core Coursework
              </h3>
              <div className="p-5 bg-[#121212] border border-neutral-800 rounded-none">
                <ul className="grid grid-cols-1 gap-2.5">
                  {personalInfo.courses.map((course, idx) => (
                    <li 
                      key={idx} 
                      className="p-2.5 bg-[#181818] border border-neutral-800 rounded-none text-xs text-neutral-300 font-mono flex items-center justify-between group hover:border-[#E50914]/40 transition-all hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span>{`> ${course}`}</span>
                      <span className="text-[9px] text-[#E50914] uppercase font-bold tracking-wider">Verified</span>
                    </li>
                  ))}
                </ul>

                {/* Explore All Courses Trigger Button */}
                <button
                  onClick={() => setIsCoursesModalOpen(true)}
                  className="w-full mt-4 py-2.5 bg-[#181818] border border-neutral-800 hover:border-[#E50914]/40 text-[#E50914] hover:text-white text-xs font-mono font-bold uppercase tracking-widest transition-all hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-4 h-4 text-[#E50914]" />
                  <span>EXPLORE ALL COURSES ({detailedCourses.length}) →</span>
                </button>
              </div>
            </div>

            {/* AI developer tools highlight */}
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider border-b border-neutral-800 pb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#E50914]" />
                Workspace Tools
              </h3>
              <div className="p-5 bg-[#121212] border border-neutral-800 rounded-none space-y-3 font-mono text-xs leading-relaxed text-neutral-400">
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
                      className="px-2.5 py-1 bg-[#181818] border border-neutral-800 rounded-none text-neutral-300 font-mono text-[10px] uppercase hover:border-[#E50914] hover:text-white transition-all cursor-pointer"
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

      {/* Courses Popup Modal */}
      <Dialog open={isCoursesModalOpen} onOpenChange={setIsCoursesModalOpen}>
        <DialogContent className="bg-[#0D0D0D] border border-neutral-800 text-white max-w-4xl rounded-none p-6 sm:p-8 overflow-y-auto max-h-[85vh] shadow-[0_0_50px_rgba(0,0,0,0.9)] text-left">
          <DialogHeader className="border-b border-neutral-800 pb-4 relative">
            <span className="text-[10px] font-mono text-[#E50914] uppercase tracking-widest font-bold block">
              FULL ACADEMIC TRANSCRIPT &amp; CURRICULUM
            </span>
            <DialogTitle className="font-heading text-3xl font-bold text-white uppercase tracking-tight mt-1">
              ALL REGISTERED SE COURSES
            </DialogTitle>
            <DialogDescription className="text-xs text-neutral-400 font-sans mt-1">
              Completed coursework at UIIT PMAS-Arid Agriculture University, Pakistan.
            </DialogDescription>
          </DialogHeader>

          {/* All Courses Scrollable Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4 overflow-y-auto max-h-[60vh] pr-1">
            {detailedCourses.map((course, idx) => (
              <div 
                key={idx}
                className="bg-[#121212] border border-neutral-800 p-4 rounded-none space-y-3 flex flex-col justify-between hover:border-[#E50914]/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="text-[#E50914] font-bold">{course.code}</span>
                    <span className="text-neutral-500 font-bold uppercase">{course.category}</span>
                  </div>
                  <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wide leading-snug">
                    {course.name}
                  </h4>
                </div>

                <div className="pt-2 border-t border-neutral-800 text-[9px] font-mono text-neutral-400">
                  {course.university}
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
