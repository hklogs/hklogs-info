import { Briefcase, GraduationCap, Heart } from 'lucide-react';
import { educationHistory, experienceHistory, volunteerHistory } from '../data/hassaanData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 border-t border-neutral-800 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-3 text-white">
            QUALIFICATION & <span className="text-[#E50914]">TIMELINE</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base font-light max-w-xl mx-auto font-sans">
            Academic credentials, professional AI engineer engagements, and campus leadership tracks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Experience Column */}
          <div className="space-y-8 text-left">
            <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
              <div className="w-8 h-8 rounded-none bg-[#E50914]/10 border border-[#E50914]/20 flex items-center justify-center text-[#E50914]">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider">
                Work Track
              </h3>
            </div>

            <div className="space-y-6 relative border-l border-neutral-800 pl-6 ml-4">
              {experienceHistory.map((item, idx) => (
                <div key={idx} className="relative group text-left">
                  <span className="absolute -left-[29px] top-1.5 w-2 h-2 bg-[#E50914] group-hover:scale-125 transition-transform" />
                  
                  <div className="p-5 bg-[#121212] border border-neutral-800 hover:border-[#E50914]/25 rounded-none transition-all duration-300">
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block font-bold mb-1">
                      {item.duration}
                    </span>
                    <h4 className="font-heading font-bold text-white text-sm leading-snug">
                      {item.role}
                    </h4>
                    <h5 className="text-xs text-[#E50914] font-semibold font-mono mt-1 uppercase">
                      {item.company}
                    </h5>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light mt-3 font-sans">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-8 text-left">
            <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
              <div className="w-8 h-8 rounded-none bg-[#E50914]/10 border border-[#E50914]/20 flex items-center justify-center text-[#E50914]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider">
                Education Track
              </h3>
            </div>

            <div className="space-y-6 relative border-l border-neutral-800 pl-6 ml-4">
              {educationHistory.map((item, idx) => (
                <div key={idx} className="relative group text-left">
                  <span className="absolute -left-[29px] top-1.5 w-2 h-2 bg-[#E50914] group-hover:scale-125 transition-transform" />
                  
                  <div className="p-5 bg-[#121212] border border-neutral-800 hover:border-[#E50914]/25 rounded-none transition-all duration-300">
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block font-bold mb-1">
                      {item.duration}
                    </span>
                    <h4 className="font-heading font-bold text-white text-sm leading-snug">
                      {item.degree}
                    </h4>
                    <h5 className="text-xs text-[#E50914] font-semibold font-mono mt-1 uppercase">
                      {item.institution}
                    </h5>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light mt-3 font-sans">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Volunteering Column */}
          <div className="space-y-8 text-left">
            <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
              <div className="w-8 h-8 rounded-none bg-[#E50914]/10 border border-[#E50914]/20 flex items-center justify-center text-[#E50914]">
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
                  className="p-4 bg-[#121212] border border-neutral-800 hover:border-[#E50914]/20 rounded-none transition-all duration-300"
                >
                  <h4 className="font-heading font-bold text-white text-xs leading-none">
                    {item.role}
                  </h4>
                  <h5 className="text-[10px] text-[#E50914] font-semibold font-mono mt-1 uppercase">
                    {item.organization}
                  </h5>
                  <p className="text-[11px] text-neutral-400 leading-normal font-light mt-2 font-sans">
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
