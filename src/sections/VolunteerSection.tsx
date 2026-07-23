import { HeartHandshake, Award } from 'lucide-react';
import { volunteerHistory } from '../data/hassaanData';

export default function VolunteerSection() {
  return (
    <section id="volunteer" className="py-20 border-t border-neutral-800 relative bg-[#0D0D0D] text-left select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-neutral-800">
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#E50914] uppercase tracking-widest font-bold block">
              COMMUNITY IMPACT &amp; LEADERSHIP TRACK
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
              VOLUNTEER &amp; <span className="text-[#E50914]">LEADERSHIP</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-[#121212] border border-neutral-800 text-neutral-400 font-mono text-xs font-bold uppercase tracking-widest">
            <HeartHandshake className="w-4 h-4 text-[#E50914]" />
            <span>COMMUNITY INITIATIVES</span>
          </div>
        </div>

        {/* Volunteer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {volunteerHistory.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#121212] border border-neutral-800 p-6 rounded-none space-y-3 flex flex-col justify-between hover:border-[#E50914]/40 hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-300 group shadow-lg cursor-pointer"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-[#E50914] font-bold">LEADERSHIP #{idx + 1}</span>
                  <Award className="w-3.5 h-3.5 text-neutral-600 group-hover:text-[#E50914] transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg tracking-wide uppercase leading-tight group-hover:text-[#E50914] transition-colors">
                  {item.role}
                </h3>
                <div className="text-xs font-mono text-neutral-400 font-bold uppercase">
                  {item.organization}
                </div>
                <p className="text-xs text-[#8E8E93] leading-relaxed font-light font-sans pt-1">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
