export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 border-t border-neutral-800 relative bg-[#0D0D0D] text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          
          {/* LEFT COLUMN: Education & Skills */}
          <div className="space-y-8 flex flex-col justify-between">
            {/* EDUCATION */}
            <div className="space-y-4">
              <div className="text-[#E50914] font-mono text-xs uppercase font-bold tracking-widest border-b border-neutral-800 pb-2">
                EDUCATION
              </div>
              <div className="space-y-4 font-sans">
                <div>
                  <h4 className="font-heading font-bold text-white text-base leading-snug">
                    BS Software Engineering (Final Year)
                  </h4>
                  <div className="text-xs text-[#8E8E93] mt-1 font-mono">
                    UIIT PMAS-Arid Agriculture University, Pakistan
                  </div>
                  <div className="text-[10px] text-neutral-500 font-mono mt-0.5">
                    2022 - Present
                  </div>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-white text-base leading-snug">
                    Matric &amp; Intermediate (CS Track)
                  </h4>
                  <div className="text-xs text-[#8E8E93] mt-1 font-mono">
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
                SKILLS
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
                    className="border border-white/20 bg-transparent text-gray-300 rounded-full px-3 py-1 text-xs font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN: Work Track / Timeline */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-2xl text-white uppercase tracking-wide border-b border-neutral-800 pb-2">
              WORK TRACK &amp; TIMELINE
            </h3>

            <div className="relative border-l border-neutral-800 ml-3 pl-8 space-y-8 font-sans">
              {/* Step 01 */}
              <div className="relative text-left">
                <div className="absolute -left-[45px] top-0 w-6 h-6 rounded-full bg-[#E50914] text-white flex items-center justify-center font-mono text-[10px] font-bold shadow-md">
                  01
                </div>
                <span className="text-[10px] font-mono text-[#8E8E93] uppercase tracking-widest font-bold block mb-1">
                  June 2026 - Present
                </span>
                <h4 className="font-heading font-bold text-white text-base leading-snug uppercase">
                  AI Engineer @ Tritanium Global
                </h4>
                <p className="text-xs text-[#8E8E93] leading-relaxed font-light mt-1">
                  Developing autonomous agentic AI systems &amp; automated database pipelines.
                </p>
              </div>

              {/* Step 02 */}
              <div className="relative text-left">
                <div className="absolute -left-[45px] top-0 w-6 h-6 rounded-full bg-[#E50914] text-white flex items-center justify-center font-mono text-[10px] font-bold shadow-md">
                  02
                </div>
                <span className="text-[10px] font-mono text-[#8E8E93] uppercase tracking-widest font-bold block mb-1">
                  June 2026 - Present
                </span>
                <h4 className="font-heading font-bold text-white text-base leading-snug uppercase">
                  Executive Member - R&amp;D @ Primus Leads LLC
                </h4>
                <p className="text-xs text-[#8E8E93] leading-relaxed font-light mt-1">
                  R&amp;D on automated lead generation algorithms &amp; scraping pipelines.
                </p>
              </div>

              {/* Step 03 */}
              <div className="relative text-left">
                <div className="absolute -left-[45px] top-0 w-6 h-6 rounded-full bg-[#E50914] text-white flex items-center justify-center font-mono text-[10px] font-bold shadow-md">
                  03
                </div>
                <span className="text-[10px] font-mono text-[#8E8E93] uppercase tracking-widest font-bold block mb-1">
                  Sept 2024 - Feb 2025
                </span>
                <h4 className="font-heading font-bold text-white text-base leading-snug uppercase">
                  Team Lead &amp; Ops Manager @ Cloudwave Innovations
                </h4>
                <p className="text-xs text-[#8E8E93] leading-relaxed font-light mt-1">
                  Supervised inward operations, hiring channels, and operational SQA frameworks.
                </p>
              </div>

              {/* Step 04 */}
              <div className="relative text-left">
                <div className="absolute -left-[45px] top-0 w-6 h-6 rounded-full bg-[#E50914] text-white flex items-center justify-center font-mono text-[10px] font-bold shadow-md">
                  04
                </div>
                <span className="text-[10px] font-mono text-[#8E8E93] uppercase tracking-widest font-bold block mb-1">
                  Leadership Track
                </span>
                <h4 className="font-heading font-bold text-white text-base leading-snug uppercase">
                  VP (PDS Rawalpindi) &bull; Core Team (Al Khidmat) &bull; Ambassador (GDG Cloud)
                </h4>
                <p className="text-xs text-[#8E8E93] leading-relaxed font-light mt-1">
                  Leading tech communities, student ambassadors, and humanitarian volunteer ops.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Quote Callout Box */}
          <div className="h-full flex flex-col">
            <div className="bg-gradient-to-br from-[#800000] to-[#3A0000] p-8 rounded-none flex flex-col justify-between h-full border border-[#800000]/60 relative overflow-hidden min-h-[360px]">
              <div className="space-y-4 relative z-10 text-left">
                <span className="text-6xl font-serif text-[#E50914] block leading-none select-none">“</span>
                <p className="text-white text-base md:text-lg font-light leading-relaxed font-sans">
                  Moving beyond rigid, fragile assertions toward semantic inference. Testing edge cases dynamically with machine cognition.
                </p>
              </div>

              <div className="pt-8 relative z-10 text-left border-t border-white/10 mt-6">
                <div className="font-script text-white text-3xl font-normal select-none">
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
