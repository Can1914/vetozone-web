import { useState } from "react";
import { X } from "@phosphor-icons/react";
import { useLang } from "@/context/LanguageContext";
import { CASE_CENTER_CONTENT } from "@/data/pages/caseCenter";
import { PageHero } from "@/components/pages/PageHero";
import { Reveal } from "@/components/landing/Reveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Fotoğraf sayısı vakadan vakaya değişiyor (2 ile 6 arası); ızgara buna göre
// daralıyor ki iki fotoğraflı vaka yarım satır boş bırakmasın.
const gridCols = (n) => {
  if (n <= 2) return "sm:grid-cols-2";
  if (n === 4) return "sm:grid-cols-2 lg:grid-cols-4";
  return "sm:grid-cols-2 lg:grid-cols-3";
};

export default function CaseCenter() {
  const { t, lang } = useLang();
  const p = CASE_CENTER_CONTENT[lang] || CASE_CENTER_CONTENT.tr;
  const [zoom, setZoom] = useState(null);

  return (
    <>
      <PageHero
        overline={p.hero.overline}
        title={p.hero.title}
        sub={p.hero.sub}
        breadcrumb={[{ label: t.nav.home, to: "/" }, { label: t.nav.caseCenter }]}
      />

      <section className="bg-[var(--paper)] py-16 sm:py-24" data-testid="case-center-section">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="space-y-20 sm:space-y-28">
            {p.cases.map((c) => (
              <article key={c.slug} id={c.slug} data-testid={`case-${c.slug}`}>
                <Reveal>
                  <div className={`grid gap-3 sm:gap-4 ${gridCols(c.photos.length)}`}>
                    {c.photos.map((photo, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setZoom(photo)}
                        className="group relative block aspect-square overflow-hidden rounded-sm bg-black/5"
                        aria-label={photo.alt}
                      >
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </button>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={0.08}>
                  <div className="mt-7 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h2 className="font-display text-xl font-bold text-[var(--ink)] sm:text-2xl">
                        {c.category}
                      </h2>
                      <span className="text-sm font-semibold uppercase tracking-wide text-[var(--brand)]">
                        {c.clinic}
                      </span>
                    </div>
                    {c.patient && (
                      <p className="mt-1 text-sm text-[var(--muted-light)]">
                        {lang === "en" ? "Patient" : "Hasta"}: {c.patient}
                      </p>
                    )}
                    <p className="mt-4 leading-relaxed text-[var(--muted-light)]">{c.text}</p>
                  </div>
                </Reveal>
              </article>
            ))}
          </div>

          <Reveal>
            <p className="mt-20 max-w-3xl border-t border-black/10 pt-6 text-xs leading-relaxed text-[var(--muted-light)]">
              {p.note}
            </p>
          </Reveal>
        </div>
      </section>

      <Dialog open={!!zoom} onOpenChange={(open) => !open && setZoom(null)}>
        <DialogContent className="max-w-3xl border-none bg-transparent p-0 shadow-none">
          {zoom && (
            <figure className="relative">
              {/* Dikey fotoğraflar ekranı aşıp kapatma tuşunu görüş dışına
                  itiyordu; yükseklik pencereye sabitlendi. */}
              <img
                src={zoom.src}
                alt={zoom.alt}
                className="mx-auto max-h-[78vh] w-auto rounded-sm object-contain"
              />
              <figcaption className="mt-3 text-center text-sm text-white/70">{zoom.alt}</figcaption>
              <button
                type="button"
                onClick={() => setZoom(null)}
                aria-label={lang === "en" ? "Close" : "Kapat"}
                className="absolute right-2 top-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
              >
                <X size={16} weight="bold" />
              </button>
            </figure>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
