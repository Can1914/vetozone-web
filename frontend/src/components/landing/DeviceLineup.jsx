import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { useLang } from "@/context/LanguageContext";
import { DEVICES } from "@/data/pages/deviceDetail";
import { Reveal } from "./Reveal";

// Üç modeli yan yana koyan karşılaştırma tablosunun yerini alıyor: burada
// yalnızca cihazın fotoğrafı ve bir cümlesi var, teknik veriler kendi
// sayfasında.
export const DeviceLineup = () => {
  const { lang } = useLang();
  const d = DEVICES[lang] || DEVICES.tr;

  return (
    <section className="bg-[var(--paper-2)] py-24 sm:py-32" data-testid="device-lineup-section">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--brand)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[var(--muted-light)]">
              {d.overline}
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-[var(--ink)] max-w-2xl">
            {d.title}
          </h2>
          <p className="mt-5 text-[var(--muted-light)] max-w-xl">{d.sub}</p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {d.items.map((device, i) => (
            <Reveal key={device.slug} delay={i * 0.08}>
              <Link
                to={`/cihazlar/${device.slug}`}
                className="lift group flex h-full flex-col overflow-hidden rounded-sm border border-black/10 bg-white hover:border-[var(--brand)]/40"
                data-testid={`device-card-${device.slug}`}
              >
                {/* Cihazın arkasında zemin yok: görseller saydam, gövde
                    kartın içinde olabildiğince büyük duruyor. */}
                <div className="flex aspect-[3/4] items-center justify-center overflow-hidden p-5">
                  <img
                    src={device.image}
                    alt={device.name}
                    loading="lazy"
                    className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display font-bold text-xl text-[var(--ink)]">{device.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted-light)] flex-1">
                    {device.tagline}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)]">
                    {d.cta}
                    <ArrowRight size={14} weight="bold" className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
