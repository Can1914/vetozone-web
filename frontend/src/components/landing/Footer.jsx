import { useLang } from "@/context/LanguageContext";

export const Footer = () => {
  const { t } = useLang();
  const fo = t.footer;
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--ink)] text-white pt-16 pb-8 border-t border-white/10 overflow-hidden" data-testid="footer">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-3 gap-8 pb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-2xl lowercase">vetozone</span>
              <span className="text-[9px] tracking-[0.25em] font-bold text-[var(--brand)] mt-1">O₃</span>
            </div>
            <p className="mt-4 text-sm text-white/50 max-w-xs leading-relaxed">{fo.tagline}</p>
          </div>
          <div className="md:col-span-2 flex flex-wrap gap-3 md:justify-end items-start">
            {fo.badges.map((b, i) => (
              <span key={i} className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-sm border border-white/15 text-white/70">
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <h2 className="font-display font-black text-[19vw] leading-none tracking-tighter text-white/[0.06] select-none pointer-events-none">
            VETOZONE
          </h2>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>© {year} Vetozone · Has Medical. {fo.rights}</span>
          <span>İzmir, Türkiye</span>
        </div>
      </div>
    </footer>
  );
};
