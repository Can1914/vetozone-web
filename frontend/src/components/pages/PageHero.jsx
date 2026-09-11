import { Link } from "react-router-dom";
import { CaretRight } from "@phosphor-icons/react";
import { Reveal } from "@/components/landing/Reveal";

export const PageHero = ({ overline, title, sub, dark = true, breadcrumb }) => (
  <section
    className={`pt-32 sm:pt-40 pb-16 sm:pb-20 ${dark ? "bg-[var(--ink)] text-white grain relative overflow-hidden" : "bg-[var(--paper)] text-[var(--ink)]"}`}
    data-testid="page-hero"
  >
    <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8">
      {breadcrumb && breadcrumb.length > 0 && (
        <nav className="mb-6 flex items-center flex-wrap gap-1.5 text-xs" data-testid="page-breadcrumb">
          {breadcrumb.map((b, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <CaretRight size={11} className={dark ? "text-white/30" : "text-black/30"} />}
              {b.to ? (
                <Link
                  to={b.to}
                  className={`font-medium transition-colors ${dark ? "text-white/50 hover:text-white" : "text-[var(--muted-light)] hover:text-[var(--ink)]"}`}
                >
                  {b.label}
                </Link>
              ) : (
                <span className={dark ? "text-white/80 font-semibold" : "text-[var(--ink)] font-semibold"}>{b.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}
      <Reveal>
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-[var(--brand)]" />
          <span className={`text-[11px] uppercase tracking-[0.25em] font-bold ${dark ? "text-white/60" : "text-[var(--muted-light)]"}`}>
            {overline}
          </span>
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight max-w-3xl leading-[1.05]">
          {title}
        </h1>
        {sub && (
          <p className={`mt-6 max-w-xl leading-relaxed ${dark ? "text-white/60" : "text-[var(--muted-light)]"}`}>
            {sub}
          </p>
        )}
      </Reveal>
    </div>
  </section>
);
