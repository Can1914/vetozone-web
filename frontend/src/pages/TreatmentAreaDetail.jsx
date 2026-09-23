import { useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, CaretRight, Quotes } from "@phosphor-icons/react";
import { useLang } from "@/context/LanguageContext";
import { TREATMENT_AREAS_CONTENT } from "@/data/pages/treatmentAreas";
import { DETAIL_SHARED, DETAIL_OVERRIDES } from "@/data/pages/treatmentDetail";
import { ASSETS } from "@/data/content";
import { Reveal } from "@/components/landing/Reveal";
import { scrollToId } from "@/lib/scrollToId";

const findArea = (groups, slug) => {
  for (const group of groups) {
    const item = group.items.find((it) => it.slug === slug);
    if (item) return { group, item };
  }
  return null;
};

export default function TreatmentAreaDetail() {
  const { slug } = useParams();
  const { t, lang } = useLang();
  const [activeTab, setActiveTab] = useState("durumlar");

  const p = TREATMENT_AREAS_CONTENT[lang];
  const s = DETAIL_SHARED[lang];
  const found = findArea(p.groups, slug);

  useEffect(() => {
    setActiveTab("durumlar");
  }, [slug]);

  if (!found) return <Navigate to="/tedavi-alanlari" replace />;

  const { group, item } = found;
  const override = DETAIL_OVERRIDES[slug]?.[lang];

  const titleLines = override?.titleLines || [item.title];
  const accentLine = override?.accentLine;
  const lead = override?.lead || s.defaultLead;
  const body = override?.body || s.defaultBody;
  const image = override?.image || ASSETS.species.dogcat;
  const conditions = override?.conditions || item.bullets.map((b) => ({ title: b }));
  const Icon = item.icon;

  const goTab = (id) => {
    setActiveTab(id);
    scrollToId(id, -90);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--ink)] text-white overflow-hidden" data-testid="area-hero">
        <div className="absolute inset-y-0 right-0 w-full sm:w-3/5 lg:w-1/2">
          <img src={image} alt={item.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)] via-[var(--ink)]/80 to-transparent" />
          {override?.script && (
            <span className="hidden lg:block absolute top-12 right-10 max-w-[180px] text-right font-script text-2xl leading-tight text-white/80 -rotate-6">
              {override.script}
            </span>
          )}
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 pt-28 sm:pt-32 pb-16 sm:pb-20">
          <nav className="mb-8 flex items-center flex-wrap gap-1.5 text-xs" data-testid="area-breadcrumb">
            {[
              { label: t.nav.home, to: "/" },
              { label: t.nav.treatmentAreas, to: "/tedavi-alanlari" },
              { label: group.title, to: `/tedavi-alanlari#${group.slug}` },
              { label: item.title },
            ].map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <CaretRight size={11} className="text-white/30" />}
                {b.to ? (
                  <Link to={b.to} className="text-white/50 hover:text-white transition-colors font-medium">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-white font-semibold">{b.label}</span>
                )}
              </span>
            ))}
          </nav>

          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[var(--brand)]" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-white/60">
                {group.title}
              </span>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] max-w-2xl">
              {titleLines.map((line, i) => (
                <span key={i} className={`block ${line === accentLine ? "text-[var(--brand)]" : ""}`}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 text-lg sm:text-xl font-semibold max-w-xl">{lead}</p>
            <p className="mt-4 text-white/60 leading-relaxed max-w-xl">{body}</p>
          </Reveal>
        </div>
      </section>

      {/* Tab bar */}
      <div className="sticky top-16 sm:top-20 z-30 bg-white/95 backdrop-blur-xl border-b border-black/10" data-testid="area-tabs">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 flex gap-1 overflow-x-auto">
          {s.tabs.map((tb) => (
            <button
              key={tb.id}
              onClick={() => goTab(tb.id)}
              className={`shrink-0 px-4 py-4 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === tb.id
                  ? "border-[var(--brand)] text-[var(--ink)]"
                  : "border-transparent text-[var(--muted-light)] hover:text-[var(--ink)]"
              }`}
              data-testid={`area-tab-${tb.id}`}
            >
              {tb.label}
            </button>
          ))}
        </div>
      </div>

      {/* Conditions */}
      <section id="durumlar" className="bg-[var(--paper)] py-16 sm:py-20 scroll-mt-32" data-testid="area-conditions">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[var(--brand)]" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[var(--muted-light)]">
                {s.conditions.overline}
              </span>
            </div>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[var(--ink)]">
                  {s.conditions.title}
                </h2>
                <p className="mt-3 text-[var(--muted-light)]">{s.conditions.sub}</p>
              </div>
              <Link
                to="/tedavi-alanlari"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] hover:gap-2.5 transition-all"
              >
                {s.conditions.all} <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {conditions.map((c, i) => (
              <Reveal key={i} delay={(i % 5) * 0.06}>
                <div
                  className="h-full bg-white border border-black/10 rounded-sm overflow-hidden hover:border-[var(--brand)]/40 transition-colors duration-500"
                  data-testid={`area-condition-${i}`}
                >
                  <div className="aspect-[4/3] bg-[var(--paper-2)] flex items-center justify-center">
                    {c.image ? (
                      <img src={c.image} alt={c.title} className="w-full h-full object-cover" loading="lazy" />
                    ) : (
                      Icon && <Icon size={34} weight="duotone" className="text-[var(--brand)]/40" />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-bold text-sm text-[var(--ink)]">{c.title}</h3>
                    {c.text && (
                      <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted-light)]">{c.text}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Methods */}
      <section id="yontemler" className="bg-[var(--paper-2)] py-16 sm:py-20 scroll-mt-32" data-testid="area-methods">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[var(--brand)]" />
                <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[var(--muted-light)]">
                  {s.methods.overline}
                </span>
              </div>
              <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
                <div>
                  <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[var(--ink)]">
                    {s.methods.title}
                  </h2>
                  <p className="mt-3 text-[var(--muted-light)] max-w-md">{s.methods.sub}</p>
                </div>
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] hover:gap-2.5 transition-all"
                >
                  {s.methods.videos} <ArrowRight size={14} weight="bold" />
                </Link>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {s.methods.items.map((m, i) => {
                const MIcon = m.icon;
                return (
                  <Reveal key={i} delay={(i % 5) * 0.06}>
                    <div
                      className="h-full bg-white border border-black/10 rounded-sm p-5 text-center hover:border-[var(--brand)]/40 transition-colors duration-500"
                      data-testid={`area-method-${i}`}
                    >
                      <MIcon size={30} weight="duotone" className="mx-auto text-[var(--brand)]" />
                      <h3 className="mt-4 font-display font-bold text-sm text-[var(--ink)]">{m.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-[var(--muted-light)]">{m.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-4">
            <Reveal delay={0.15}>
              <div className="h-full bg-[var(--brand)]/[0.07] border border-[var(--brand)]/15 rounded-sm p-8 flex flex-col">
                <Quotes size={30} weight="fill" className="text-[var(--brand)]" />
                <p className="mt-5 text-[var(--ink)] leading-relaxed">
                  {override?.quote || s.defaultBody}
                </p>
                <span className="mt-auto pt-8 w-10 h-px bg-[var(--brand)]/40" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Studies */}
      <section id="calismalar" className="bg-[var(--paper)] py-16 sm:py-20 scroll-mt-32" data-testid="area-studies">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[var(--brand)]" />
                <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[var(--muted-light)]">
                  {s.studies.overline}
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[var(--ink)]">
                {s.studies.title}
              </h2>
              <p className="mt-4 text-[var(--muted-light)] leading-relaxed">{s.studies.sub}</p>
              <Link
                to="/bilimsel-kutuphane"
                className="mt-7 inline-flex items-center gap-2 bg-[var(--ink)] hover:bg-black text-white font-semibold px-6 py-3.5 rounded-sm transition-colors"
              >
                {s.studies.cta} <ArrowRight size={16} weight="bold" />
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-8 flex items-center">
            <Reveal delay={0.12} className="w-full">
              <div className="border border-dashed border-black/15 rounded-sm p-10 text-center bg-white">
                <p className="text-sm text-[var(--muted-light)]">{s.studies.empty}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="vakalar" className="bg-[var(--paper-2)] py-16 sm:py-20 scroll-mt-32" data-testid="area-cases">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[var(--brand)]" />
                <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[var(--muted-light)]">
                  {s.cases.overline}
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[var(--ink)]">
                {s.cases.title}
              </h2>
              <p className="mt-4 text-[var(--muted-light)] leading-relaxed">{s.cases.sub}</p>
              <Link
                to="/vaka-merkezi"
                className="mt-7 inline-flex items-center gap-2 bg-[var(--ink)] hover:bg-black text-white font-semibold px-6 py-3.5 rounded-sm transition-colors"
              >
                {s.cases.cta} <ArrowRight size={16} weight="bold" />
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-8 flex items-center">
            <Reveal delay={0.12} className="w-full">
              <div className="border border-dashed border-black/15 rounded-sm p-10 text-center bg-white">
                <p className="text-sm text-[var(--muted-light)]">{s.cases.empty}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cozum" className="bg-[var(--paper)] pb-16 sm:pb-24 scroll-mt-32" data-testid="area-cta">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="bg-[var(--ink)] text-white rounded-sm overflow-hidden grid md:grid-cols-12 items-center">
              <div className="md:col-span-4 relative h-44 md:h-full min-h-[180px] spotlight flex items-center justify-center p-6">
                <img
                  src={ASSETS.deviceHero}
                  alt="Vetozone"
                  className="max-h-40 md:max-h-52 w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                />
              </div>
              <div className="md:col-span-8 p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="flex-1">
                  <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">
                    {s.cta.title}
                  </h2>
                  <p className="mt-3 text-white/60 leading-relaxed max-w-lg">{s.cta.text}</p>
                </div>
                <Link
                  to={s.cta.to}
                  className="shrink-0 inline-flex items-center gap-2 bg-[var(--brand)] hover:bg-[var(--brand-hover)] text-white font-semibold px-6 py-3.5 rounded-sm transition-colors"
                >
                  {s.cta.button} <ArrowRight size={16} weight="bold" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
