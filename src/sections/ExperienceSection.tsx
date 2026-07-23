import { HeartHandshake, Award } from 'lucide-react';
import { volunteerHistory } from '../data/hassaanData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 border-t border-neutral-800 relative bg-[#0D0D0D] text-left select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* LEFT COLUMN: Education & Skills */}
          <div className="space-y-8">
            {/* EDUCATION */}
            <div className="space-y-4">
              <div className="text-[#E50914] font-mono text-xs uppercase font-bold tracking-widest border-b border-neutral-800 pb-2">
                ACADEMICS &amp; EDUCATION
              </div>
              <div className="space-y-4 font-sans">
                <div className="group hover:-translate-y-0.5 transition-transform duration-300">
                  <h4 className="font-heading font-bold text-white text-base leading-snug uppercase">
                    BS Software Engineering (Final Year)
                  </h4>
                  <div className="text-xs text-[#8E8E93] mt-0.5 font-mono">
                    UIIT PMAS-Arid Agriculture University, Pakistan
                  </div>
                  <div className="text-[10px] text-neutral-500 font-mono mt-0.5">
                    2022 - Present
                  </div>
                </div>

                <div className="group hover:-translate-y-0.5 transition-transform duration-300">
                  <h4 className="font-heading font-bold text-white text-base leading-snug uppercase">
                    Matric &amp; Intermediate (CS Track)
                  </h4>
                  <div className="text-xs text-[#8E8E93] mt-0.5 font-mono">
                    Army Public School and College, Jhelum Cantt
                  </div>
                  <div className="text-[10px] text-neutral-500 font-mono mt-0.5">
                    Prior to 2022
                  </div>
                </div>
              </div>
            </div>

            {/* SKILLS */}
            <div className="space-y-4 pt-4 border-t border-neutral-800">
              <div className="text-[#E50914] font-mono text-xs uppercase font-bold tracking-widest">
                SKILLS &amp; COMPETENCIES
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Software Quality Assurance", "Manual & Automated Testing", "Boundary Value Analysis", 
                  "Predictive Log Auditing", "Python", "Java", "C++", "SQL", "TypeScript", 
                  "Google AI Studio", "Vertex AI API", "LangGraph", "LangChain", 
                  "Gemini Pro / Flash", "TensorFlow", "OpenCV", "Git & GitHub", "Vercel", "Supabase"
                ].map((skill, idx) => (
                  <span 
                    key={idx}
                    className="border border-white/20 bg-transparent text-gray-300 rounded-full px-3 py-1 text-xs font-mono hover:border-[#E50914] hover:text-white transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN: Work Track (Tritanium Global, Primus Leads LLC, Cloudwave Innovations) */}
          <div className="space-y-6">
            <div className="text-white font-heading font-bold text-2xl uppercase tracking-wide border-b border-neutral-800 pb-2">
              WORK TRACK &amp; EXPERIENCE
            </div>

            <div className="relative border-l border-neutral-800 ml-3 pl-8 space-y-8 font-sans">
              {/* Step 01 */}
              <div className="relative text-left group hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="absolute -left-[45px] top-0 w-6 h-6 rounded-full bg-[#E50914] text-white flex items-center justify-center font-mono text-[10px] font-bold shadow-md">
                  01
                </div>
                <span className="text-[10px] font-mono text-[#8E8E93] uppercase tracking-widest font-bold block mb-1">
                  June 2026 - Present
                </span>
                <h4 className="font-heading font-bold text-white text-lg leading-snug uppercase group-hover:text-[#E50914] transition-colors">
                  AI Engineer @ Tritanium Global
                </h4>
                <p className="text-xs text-[#8E8E93] leading-relaxed font-light mt-1">
                  Developing autonomous agentic AI systems, automated database workflow pipelines, and integrating deep learning and LLM solutions for client platforms.
                </p>
              </div>

              {/* Step 02 */}
              <div className="relative text-left group hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="absolute -left-[45px] top-0 w-6 h-6 rounded-full bg-[#E50914] text-white flex items-center justify-center font-mono text-[10px] font-bold shadow-md">
                  02
                </div>
                <span className="text-[10px] font-mono text-[#8E8E93] uppercase tracking-widest font-bold block mb-1">
                  June 2026 - Present
                </span>
                <h4 className="font-heading font-bold text-white text-lg leading-snug uppercase group-hover:text-[#E50914] transition-colors">
                  Executive Member - R&amp;D @ Primus Leads LLC
                </h4>
                <p className="text-xs text-[#8E8E93] leading-relaxed font-light mt-1">
                  Conducting R&amp;D on automated lead generation algorithms, database scraping data pipelines, and integrating AI outreach platforms for business scaling.
                </p>
              </div>

              {/* Step 03 */}
              <div className="relative text-left group hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="absolute -left-[45px] top-0 w-6 h-6 rounded-full bg-[#E50914] text-white flex items-center justify-center font-mono text-[10px] font-bold shadow-md">
                  03
                </div>
                <span className="text-[10px] font-mono text-[#8E8E93] uppercase tracking-widest font-bold block mb-1">
                  Sept 2024 - Feb 2025
                </span>
                <h4 className="font-heading font-bold text-white text-lg leading-snug uppercase group-hover:text-[#E50914] transition-colors">
                  Team Lead &amp; Ops Manager @ Cloudwave Innovations
                </h4>
                <p className="text-xs text-[#8E8E93] leading-relaxed font-light mt-1">
                  Supervised inward operations workflows, managed recruiting and hiring channels, coordinated cross-functional project delivery, and established operational SQA frameworks.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Volunteer Leadership Track & Crimson Quote */}
          <div className="space-y-6 flex flex-col justify-between h-full">
            {/* VOLUNTEER & COMMUNITY LEADERSHIP */}
            <div className="space-y-4">
              <div className="text-[#E50914] font-mono text-xs uppercase font-bold tracking-widest border-b border-neutral-800 pb-2 flex items-center gap-2">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>VOLUNTEER &amp; LEADERSHIP</span>
              </div>

              <div className="space-y-3 font-sans">
                {volunteerHistory.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3 bg-[#121212] border border-neutral-800 hover:border-[#E50914]/40 rounded-none transition-all hover:-translate-y-0.5 cursor-pointer group"
                  >
                    <div className="flex justify-between items-center text-[9px] font-mono mb-1">
                      <span className="text-[#E50914] font-bold">LEADERSHIP #{idx + 1}</span>
                      <Award className="w-3 h-3 text-neutral-600 group-hover:text-[#E50914] transition-colors" />
                    </div>
                    <h5 className="font-heading font-bold text-white text-xs uppercase leading-snug group-hover:text-[#E50914] transition-colors">
                      {item.role}
                    </h5>
                    <div className="text-[10px] font-mono text-neutral-400 font-bold uppercase mt-0.5">
                      {item.organization}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Crimson Quote Box */}
            <div className="bg-gradient-to-br from-[#800000] to-[#3A0000] p-6 rounded-none flex flex-col justify-between border border-[#800000]/60 relative overflow-hidden mt-4">
              <div className="space-y-2 relative z-10 text-left">
                <span className="text-4xl font-serif text-[#E50914] block leading-none select-none">“</span>
                <p className="text-white text-xs md:text-sm font-light leading-relaxed font-sans">
                  Moving beyond rigid, fragile assertions toward semantic inference. Testing edge cases dynamically with machine cognition.
                </p>
              </div>

              <div className="pt-4 relative z-10 text-left border-t border-white/10 mt-4">
                <div className="font-script text-white text-2xl font-normal select-none">
                  Hassaan Abdullah
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
