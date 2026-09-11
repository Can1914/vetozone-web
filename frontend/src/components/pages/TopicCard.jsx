import { Check } from "@phosphor-icons/react";

const comingSoonLabel = { tr: "İçerik Yakında", en: "Coming Soon" };

export const TopicCard = ({ icon: Icon, title, text, bullets, comingSoon, dark = false, lang = "tr", testid }) => (
  <div
    id={testid}
    className={`group h-full border rounded-sm p-7 sm:p-8 transition-all duration-500 hover:-translate-y-1 scroll-mt-28 ${
      dark
        ? "bg-[var(--surface)] border-white/10 hover:border-[var(--brand)]/50"
        : "bg-white border-black/10 hover:border-[var(--brand)]/40"
    }`}
    data-testid={testid ? `topic-card-${testid}` : undefined}
  >
    <div className="flex items-start justify-between gap-3">
      {Icon && (
        <span
          className={`inline-flex items-center justify-center w-11 h-11 rounded-sm transition-colors duration-500 ${
            dark
              ? "bg-white/10 text-[var(--brand)]"
              : "bg-[var(--paper-2)] text-[var(--brand)] group-hover:bg-[var(--brand)] group-hover:text-white"
          }`}
        >
          <Icon size={22} weight="duotone" />
        </span>
      )}
      {comingSoon && (
        <span className="text-[10px] font-bold uppercase tracking-widest bg-[var(--brand)]/10 text-[var(--brand)] px-2.5 py-1 rounded-sm whitespace-nowrap">
          {comingSoonLabel[lang] || comingSoonLabel.tr}
        </span>
      )}
    </div>
    <h3 className={`mt-6 font-display font-bold text-xl tracking-tight ${dark ? "text-white" : "text-[var(--ink)]"}`}>
      {title}
    </h3>
    {text && (
      <p className={`mt-3 text-sm leading-relaxed ${dark ? "text-white/60" : "text-[var(--muted-light)]"}`}>{text}</p>
    )}
    {bullets && bullets.length > 0 && (
      <div className="mt-5 space-y-2.5">
        {bullets.map((b, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <span className="inline-flex items-center justify-center w-5 h-5 shrink-0 rounded-full bg-[var(--brand)]/10 text-[var(--brand)]">
              <Check size={12} weight="bold" />
            </span>
            <span className={`text-sm font-medium ${dark ? "text-white/80" : "text-[var(--ink)]"}`}>{b}</span>
          </div>
        ))}
      </div>
    )}
  </div>
);
