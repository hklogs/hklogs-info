import { FileText, ExternalLink } from 'lucide-react';
import { publications } from '../data/hassaanData';

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3 text-white">
            RESEARCH & <span className="bg-gradient-to-r from-[#0096ff] to-[#ff3232] bg-clip-text text-transparent">PUBLICATIONS</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-light max-w-xl mx-auto">
            Essays, architectural breakdowns, and theses published on Medium.
          </p>
        </div>

        {/* List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.map((pub, idx) => (
            <a
              key={idx}
              href={pub.link}
              target="_blank"
              rel="noreferrer"
              className="group p-6 bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-white/10 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)] decoration-none text-left"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] tracking-wider uppercase font-bold text-[#0096ff] bg-[#0096ff]/10 px-2.5 py-1 border border-[#0096ff]/15 rounded-lg">
                    {pub.category}
                  </span>
                  <FileText className="w-4 h-4 text-gray-500 group-hover:text-[#0096ff] transition-colors" />
                </div>
                
                <h3 className="font-heading font-bold text-white text-base md:text-lg group-hover:text-[#0096ff] transition-colors leading-snug">
                  {pub.title}
                </h3>
                
                <p className="text-[11px] text-gray-400 font-mono font-medium leading-relaxed">
                  {pub.sub}
                </p>
                
                <p className="text-xs text-gray-500 font-light leading-relaxed pt-1">
                  {pub.desc}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0096ff] pt-6 group-hover:gap-2.5 transition-all">
                <span>Read Publication</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
