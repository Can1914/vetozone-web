import { Link } from "react-router-dom";
import { useLang } from "@/context/LanguageContext";
import { NAV_TREE } from "@/data/navTree";
import { ASSETS } from "@/data/content";

export const Footer = () => {
  const { t } = useLang();
  const fo = t.footer;
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--ink)] text-white pt-16 pb-8 border-t border-white/10 overflow-hidden" data-testid="footer">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-3 gap-8 pb-12">
          <div className="md:col-span-1">
            <img
              src={ASSETS.logoWhite}
              alt="Vetozone"
              width="875"
              height="212"
              className="h-8 w-auto"
            />
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

        <nav className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3 pb-12 border-t border-white/10 pt-10" data-testid="footer-sitemap">
          <Link to="/" className="link-underline text-sm text-white/60 hover:text-white transition-colors">
            {t.nav.home}
          </Link>
          {NAV_TREE.map((item) => (
            <Link key={item.key} to={item.to} className="link-underline text-sm text-white/60 hover:text-white transition-colors">
              {t.nav[item.key]}
            </Link>
          ))}
          <Link to="/iletisim" className="link-underline text-sm text-white/60 hover:text-white transition-colors">
            {t.nav.contact}
          </Link>
        </nav>

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
