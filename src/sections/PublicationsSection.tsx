import { FileText, ExternalLink } from 'lucide-react';
import { publications } from '../data/hassaanData';

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-20 border-t border-neutral-800 relative bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-3 text-white">
            RESEARCH & <span className="text-[#E50914]">PUBLICATIONS</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base font-light max-w-xl mx-auto font-sans">
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
              className="group p-6 bg-[#121212] hover:bg-neutral-900 border border-neutral-800 hover:border-[#E50914]/30 rounded-none flex flex-col justify-between transition-all duration-300 shadow-md text-left"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] tracking-wider uppercase font-bold text-[#E50914] bg-[#181818] px-2.5 py-1 border border-neutral-800 rounded-none">
                    {pub.category}
                  </span>
                  <FileText className="w-4 h-4 text-neutral-500 group-hover:text-[#E50914] transition-colors" />
                </div>
                
                <h3 className="font-heading font-bold text-white text-base md:text-lg group-hover:text-[#E50914] transition-colors leading-snug">
                  {pub.title}
                </h3>
                
                <p className="text-[11px] text-neutral-400 font-mono font-medium leading-relaxed uppercase">
                  {pub.sub}
                </p>
                
                <p className="text-xs text-neutral-400 font-light leading-relaxed pt-1 font-sans">
                  {pub.desc}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-[#E50914] pt-6 group-hover:gap-2.5 transition-all">
                <span>Read Publication →</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
