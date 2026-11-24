import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, Check } from "@phosphor-icons/react";
import { useLang } from "@/context/LanguageContext";
import { DEVICES, findDevice } from "@/data/pages/deviceDetail";
import { Reveal } from "@/components/landing/Reveal";

export default function DeviceDetail() {
  const { slug } = useParams();
  const { t, lang } = useLang();
  const d = DEVICES[lang] || DEVICES.tr;
  const device = findDevice(lang, slug);

  useEffect(() => {
    if (!device) return;
    const previous = document.title;
    document.title = `${device.name} — Vetozone`;
    return () => {
      document.title = previous;
    };
  }, [device]);

  // Bilinmeyen bir model adresine girilirse cihaz listesine dönüyoruz.
  if (!device) return <Navigate to="/cihazlar" replace />;

  const others = d.items.filter((item) => item.slug !== device.slug);

  return (
    <>
      <section className="relative bg-[var(--ink)] text-white pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <nav className="flex flex-wrap items-center gap-2 text-xs text-white/50 mb-6">
              <Link to="/" className="hover:text-white transition-colors">{t.nav.home}</Link>
              <span>›</span>
              <Link to="/cihazlar" className="hover:text-white transition-colors">{t.nav.devices}</Link>
              <span>›</span>
              <span className="text-white/80">{device.name}</span>
            </nav>

            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
              {device.name}
            </h1>
            <p className="mt-5 text-lg font-semibold max-w-xl">{device.tagline}</p>
            <p className="mt-4 text-white/60 leading-relaxed max-w-xl">{device.text}</p>

            <Link
              to="/iletisim"
              className="lift mt-8 inline-flex items-center gap-2 bg-[var(--brand)] hover:bg-[var(--brand-hover)] text-white font-semibold px-8 py-4 rounded-full transition-colors"
              data-testid="device-quote-cta"
            >
              {d.quote}
              <ArrowRight size={18} weight="bold" />
            </Link>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 relative flex justify-center">
            <div className="absolute inset-0 spotlight blur-2xl scale-110" />
            <img
              src={device.image}
              alt={device.name}
              className="relative z-10 max-h-[46vh] lg:max-h-[60vh] w-auto object-contain drop-shadow-[0_40px_90px_rgba(30,155,215,0.35)]"
              data-testid="device-detail-image"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--paper)] py-16 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="font-display font-bold text-2xl text-[var(--ink)]">{d.highlightsTitle}</h2>
              <ul className="mt-5 space-y-3">
                {device.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--ink)]">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand)]/10 text-[var(--brand)]">
                      <Check size={12} weight="bold" />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.08}>
              <h2 className="font-display font-bold text-2xl text-[var(--ink)]">{d.specsTitle}</h2>
              <div className="mt-5 overflow-hidden rounded-sm border border-black/10 bg-white">
                {device.specs.map(([label, value], i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[1.1fr_1fr] gap-4 border-b border-black/10 px-5 py-4 last:border-b-0 sm:px-6"
                    data-testid={`device-spec-${i}`}
                  >
                    <span className="text-sm text-[var(--muted-light)]">{label}</span>
                    <span className="text-sm font-semibold text-[var(--ink)]">{value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[var(--paper-2)] py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-xl text-[var(--ink)] mb-6">{d.otherTitle}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {others.map((item) => (
                <Link
                  key={item.slug}
                  to={`/cihazlar/${item.slug}`}
                  className="lift group flex items-center gap-5 rounded-sm border border-black/10 bg-white p-5 hover:border-[var(--brand)]/40"
                  data-testid={`device-other-${item.slug}`}
                >
                  <span className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-[var(--ink)]">
                    <img src={item.image} alt={item.name} loading="lazy" className="max-h-[80%] w-auto object-contain" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display font-bold text-[var(--ink)]">{item.name}</span>
                    <span className="mt-1 block text-sm leading-snug text-[var(--muted-light)]">{item.tagline}</span>
                  </span>
                  <ArrowRight
                    size={16}
                    weight="bold"
                    className="ml-auto shrink-0 text-[var(--brand)] transition-transform group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
