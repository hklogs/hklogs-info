export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-12 py-4 flex justify-between items-center bg-[#0D0D0D]/90 backdrop-blur-md border-b border-neutral-800 select-none">
      {/* Top Left: Sub-title */}
      <div className="flex items-center gap-2 text-white font-mono text-[10px] md:text-xs uppercase tracking-widest font-bold">
        <span>SOFTWARE QUALITY ASSURANCE &amp; INTELLIGENT AUDITING</span>
      </div>

      {/* Top Right: Crimson Red Pill Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E50914] text-white text-[10px] font-mono uppercase tracking-widest font-bold rounded-full shadow-[0_0_15px_rgba(229,9,20,0.4)]">
        <span className="relative flex h-1.5 w-1.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
        </span>
        <span>AVAILABLE FOR SQA AUDITING</span>
      </div>
    </header>
  );
}
