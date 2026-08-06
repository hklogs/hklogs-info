import { useState } from 'react';
import { BookOpen, Wrench, FileText, ExternalLink, Quote } from 'lucide-react';
import { publications } from '../data/hassaanData';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

export default function ExperienceSection() {
  const [isPubModalOpen, setIsPubModalOpen] = useState(false);

  const skillsPills = [
    "SQA",
    "Automated Testing",
    "Boundary Value Analysis",
    "Python",
    "Java",
    "C++",
    "SQL",
    "TypeScript",
    "Google AI Studio",
    "Vertex AI",
    "LangChain",
    "Gemini API",
    "Supabase"
  ];

  const processSteps = [
    {
      num: "01",
      title: "DISCOVER",
      desc: "Requirements gathering, domain analysis & SQA scope definition."
    },
    {
      num: "02",
      title: "IDEATE",
      desc: "Architecture modeling, AI agent selection & boundary test strategy."
    },
    {
      num: "03",
      title: "DESIGN",
      desc: "System schematics, database schemas & API interface contracts."
    },
    {
      num: "04",
      title: "DEVELOP",
      desc: "Autonomous workflow pipelines, LLM agent integration & test suites."
    },
    {
      num: "05",
      title: "DELIVER",
      desc: "Deterministic verification, automated deployment & log auditing."
    }
  ];

  return (
    <section id="experience" className="py-20 border-t border-neutral-800 relative bg-[#0D0D0D] text-left select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* 12-COLUMN GRID WITH VERTICAL LINE DIVIDER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800 border-t border-b border-neutral-800 py-10">
          
          {/* ===================================================================
              LEFT COLUMN (Cols 1 to 6) — EDUCATION & SKILLS
             =================================================================== */}
          <div className="lg:col-span-6 p-0 lg:pr-10 space-y-10">
            
            {/* 1. Header */}
            <div className="border-b border-neutral-800 pb-4 flex items-center justify-between">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-[#E50914]" />
                <span>EDUCATION &amp; <span className="text-[#E50914]">SKILLS</span></span>
              </h2>
            </div>

            {/* 2. Education Subsection */}
            <div className="space-y-6">
              <span className="text-[10px] font-mono text-[#E50914] uppercase tracking-widest font-bold block">
                01 / EDUCATION &amp; ACADEMICS
              </span>

              <div className="space-y-4 font-sans">
                {/* Degree 1 */}
                <div className="p-5 bg-[#121212] border border-neutral-800 hover:border-[#E50914] transition-all space-y-2 group">
                  <div className="flex justify-between items-center text-[10px] font-mono text-[#E50914] font-bold">
                    <span>2022 - PRESENT</span>
                    <span className="bg-[#E50914]/10 text-[#E50914] px-2 py-0.5 border border-[#E50914]/30">FINAL YEAR</span>
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg sm:text-xl uppercase group-hover:text-[#E50914] transition-colors">
                    BS SOFTWARE ENGINEERING (FINAL YEAR)
                  </h3>
                  <p className="text-xs text-[#8E8E93] font-mono">
                    UIIT PMAS-Arid Agriculture University, Pakistan
                  </p>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed pt-1">
                    Specializing in Software Quality Assurance (SQA Auditing), Intelligent Agent Systems, and Automated Verification Pipelines.
                  </p>
                </div>

                {/* Degree 2 */}
                <div className="p-5 bg-[#121212] border border-neutral-800 hover:border-[#E50914] transition-all space-y-2 group">
                  <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500 font-bold">
                    <span>PRIOR TO 2022</span>
                    <span className="bg-neutral-800 text-neutral-400 px-2 py-0.5">COMPLETED</span>
                  </div>
                  <h3 className="font-heading font-bold text-white text-base sm:text-lg uppercase group-hover:text-[#E50914] transition-colors">
                    MATRIC &amp; INTERMEDIATE (CS TRACK)
                  </h3>
                  <p className="text-xs text-[#8E8E93] font-mono">
                    Army Public School and College, Jhelum Cantt
                  </p>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed pt-1">
                    Fundamentals in object-oriented logic, data structures, linear algebra, and software engineering principles.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Skills Subsection: Pill Tags Grid */}
            <div className="space-y-4 pt-2">
              <span className="text-[10px] font-mono text-[#E50914] uppercase tracking-widest font-bold flex items-center gap-2">
                <Wrench className="w-3.5 h-3.5 text-[#E50914]" />
                <span>02 / TECHNICAL COMPETENCIES &amp; STACK</span>
              </span>

              <div className="flex flex-wrap gap-2.5 pt-1">
                {skillsPills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-[#121212] border border-neutral-800 text-neutral-200 hover:border-[#E50914] hover:text-white transition-all font-mono text-xs font-medium cursor-pointer"
                  >
                    [ {skill} ]
                  </span>
                ))}
              </div>
            </div>

            {/* Research Modal Trigger Link */}
            <div className="pt-4 border-t border-neutral-800">
              <button
                onClick={() => setIsPubModalOpen(true)}
                className="px-4 py-2 border border-[#E50914] text-[#E50914] bg-[#E50914]/5 hover:bg-[#E50914] hover:text-white font-mono text-xs uppercase font-bold tracking-wider transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW RESEARCH &amp; PUBLICATIONS ({publications.length}) —&gt;</span>
              </button>
            </div>

          </div>


          {/* ===================================================================
              RIGHT COLUMN (Cols 7 to 12) — WORK PROCESS & QUOTE CARD
             =================================================================== */}
          <div className="lg:col-span-6 p-0 lg:pl-10 space-y-10 pt-10 lg:pt-0 flex flex-col justify-between">
            
            {/* 1. Work Process Timeline: 5-step vertical list with numbered circles */}
            <div className="space-y-6">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider border-b border-neutral-800 pb-4">
                WORK <span className="text-[#E50914]">PROCESS</span>
              </h2>

              <div className="relative border-l border-neutral-800 ml-4 pl-8 space-y-7 font-sans">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="relative group text-left space-y-1">
                    {/* Numbered Circle Icon */}
                    <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-[#0D0D0D] border border-neutral-700 text-[#E50914] group-hover:border-[#E50914] group-hover:bg-[#E50914] group-hover:text-white flex items-center justify-center font-mono text-xs font-bold transition-colors">
                      {step.num}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-heading font-bold text-white text-lg tracking-wider uppercase group-hover:text-[#E50914] transition-colors">
                        {step.num} {step.title}
                      </span>
                    </div>

                    <p className="text-xs text-[#8E8E93] leading-relaxed font-light font-sans">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Red Quote Card (Far Right Block) */}
            <div className="bg-gradient-to-br from-[#700004] to-[#1F0001] p-7 border border-[#700004]/60 space-y-4 text-left relative overflow-hidden mt-6 shadow-2xl">
              <div className="flex items-center gap-2">
                <Quote className="w-6 h-6 text-[#FF2E37]" />
                <span className="text-6xl font-serif text-[#FF2E37] block leading-none select-none font-bold -mb-4">
                  “
                </span>
              </div>

              <p className="text-white text-xs sm:text-sm font-light leading-relaxed font-sans pt-2">
                Moving beyond rigid, fragile assertions toward semantic inference. Testing edge cases dynamically with machine cognition.
              </p>

              <div className="pt-4 border-t border-white/15 flex justify-between items-center">
                <div className="font-script text-white text-2xl font-normal select-none">
                  Hassaan Abdullah
                </div>
                <span className="text-[9px] font-mono text-neutral-300 uppercase tracking-widest font-bold">
                  AI ENGINEER &amp; SQA SPECIALIST
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Publications Modal */}
      <Dialog open={isPubModalOpen} onOpenChange={setIsPubModalOpen}>
        <DialogContent className="bg-[#0D0D0D] border border-neutral-800 text-white max-w-3xl max-h-[85vh] overflow-y-auto p-6 md:p-8">
          <DialogHeader className="border-b border-neutral-800 pb-4 text-left">
            <DialogTitle className="text-2xl font-bold font-heading uppercase text-white flex items-center gap-2">
              <FileText className="w-6 h-6 text-[#E50914]" />
              <span>RESEARCH ESSAYS &amp; <span className="text-[#E50914]">PUBLICATIONS</span></span>
            </DialogTitle>
            <DialogDescription className="text-xs font-mono text-[#8E8E93] pt-1">
              Published architectural breakdowns, SQA auditing essays, and machine learning research on Medium.
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 text-left">
            {publications.map((pub, idx) => (
              <div
                key={idx}
                onClick={() => window.open(pub.link, '_blank')}
                className="group p-5 bg-[#121212] border border-neutral-800 hover:border-[#E50914] transition-all cursor-pointer flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono tracking-widest uppercase font-bold text-[#E50914] bg-[#E50914]/10 px-2.5 py-0.5 border border-[#E50914]/30">
                      {pub.category}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#E50914] transition-colors" />
                  </div>
                  <h4 className="font-heading font-bold text-white text-lg group-hover:text-[#E50914] transition-colors leading-snug">
                    {pub.title}
                  </h4>
                  <p className="text-[11px] text-[#E50914] font-mono uppercase">
                    {pub.sub}
                  </p>
                  <p className="text-xs text-[#8E8E93] font-light leading-relaxed font-sans line-clamp-3">
                    {pub.desc}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#E50914] font-mono pt-3 border-t border-neutral-800">
                  <span>READ ON MEDIUM</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
