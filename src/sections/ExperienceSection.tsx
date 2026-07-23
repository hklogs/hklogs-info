import { Briefcase, GraduationCap, Heart } from 'lucide-react';
import { educationHistory, experienceHistory, volunteerHistory } from '../data/hassaanData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3 text-white">
            QUALIFICATION & <span className="bg-gradient-to-r from-[#0096ff] to-[#ff3232] bg-clip-text text-transparent">TIMELINE</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-light max-w-xl mx-auto">
            Academic credentials, professional AI engineer engagements, and campus leadership tracks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Experience Column */}
          <div className="space-y-8 text-left">
            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
              <div className="w-8 h-8 rounded-lg bg-[#ff3232]/10 border border-[#ff3232]/15 flex items-center justify-center text-[#ff3232]">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider">
                Work Track
              </h3>
            </div>

            <div className="space-y-6 relative border-l border-white/10 pl-6 ml-4">
              {experienceHistory.map((item, idx) => (
                <div key={idx} className="relative group text-left">
                  <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-950 border-2 border-[#ff3232] group-hover:scale-125 transition-transform" />
                  
                  <div className="p-5 bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 hover:border-[#ff3232]/25 rounded-2xl transition-all duration-300">
                    <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block font-bold mb-1">
                      {item.duration}
                    </span>
                    <h4 className="font-heading font-bold text-white text-sm leading-snug">
                      {item.role}
                    </h4>
                    <h5 className="text-xs text-[#ff3232] font-semibold font-mono mt-1">
                      {item.company}
                    </h5>
                    <p className="text-xs text-gray-400 leading-relaxed font-light mt-3">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-8 text-left">
            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
              <div className="w-8 h-8 rounded-lg bg-[#0096ff]/10 border border-[#0096ff]/15 flex items-center justify-center text-[#0096ff]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider">
                Education Track
              </h3>
            </div>

            <div className="space-y-6 relative border-l border-white/10 pl-6 ml-4">
              {educationHistory.map((item, idx) => (
                <div key={idx} className="relative group text-left">
                  <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-950 border-2 border-[#0096ff] group-hover:scale-125 transition-transform" />
                  
                  <div className="p-5 bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 hover:border-[#0096ff]/25 rounded-2xl transition-all duration-300">
                    <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block font-bold mb-1">
                      {item.duration}
                    </span>
                    <h4 className="font-heading font-bold text-white text-sm leading-snug">
                      {item.degree}
                    </h4>
                    <h5 className="text-xs text-[#0096ff] font-semibold font-mono mt-1">
                      {item.institution}
                    </h5>
                    <p className="text-xs text-gray-400 leading-relaxed font-light mt-3">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Volunteering Column */}
          <div className="space-y-8 text-left">
            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
              <div className="w-8 h-8 rounded-lg bg-[#00e1ff]/10 border border-[#00e1ff]/15 flex items-center justify-center text-[#00e1ff]">
                <Heart className="w-4 h-4" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider">
                Volunteering & Lead
              </h3>
            </div>

            <div className="space-y-4 max-h-[580px] overflow-y-auto pr-1 no-scrollbar">
              {volunteerHistory.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 hover:border-[#00e1ff]/20 rounded-2xl transition-all duration-300"
                >
                  <h4 className="font-heading font-bold text-white text-xs leading-none">
                    {item.role}
                  </h4>
                  <h5 className="text-[10px] text-[#00e1ff] font-semibold font-mono mt-1">
                    {item.organization}
                  </h5>
                  <p className="text-[11px] text-gray-400 leading-normal font-light mt-2">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
