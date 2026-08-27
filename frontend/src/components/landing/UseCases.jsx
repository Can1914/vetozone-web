import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "@phosphor-icons/react";
import { useLang } from "@/context/LanguageContext";
import { ASSETS } from "@/data/content";
import { Reveal } from "./Reveal";

export const UseCases = () => {
  const { t } = useLang();
  const u = t.uses;
  const [active, setActive] = useState(0);
  const tab = u.tabs[active];
  const img = ASSETS.species[tab.key];

  return (
    <section id="uses" className="bg-[var(--paper-2)] py-24 sm:py-32" data-testid="usecases-section">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--brand)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[var(--muted-light)]">
              {u.overline}
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-[var(--ink)] max-w-2xl">
            {u.title}
          </h2>
          <p className="mt-5 text-[var(--muted-light)] max-w-xl">{u.sub}</p>
        </Reveal>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap gap-3" data-testid="usecases-tabs">
          {u.tabs.map((tb, i) => (
            <button
              key={tb.key}
              onClick={() => setActive(i)}
              className={`px-5 py-3 rounded-sm text-sm font-semibold transition-colors border ${
                active === i
                  ? "bg-[var(--ink)] text-white border-[var(--ink)]"
                  : "bg-white text-[var(--ink)] border-black/10 hover:border-[var(--brand)]/40"
              }`}
              data-testid={`usecase-tab-${tb.key}`}
            >
              {tb.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Image */}
          <div className="relative overflow-hidden rounded-sm min-h-[320px] lg:min-h-[460px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={tab.key}
                src={img}
                alt={tab.heading}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
                data-testid="usecase-image"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={tab.key}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="font-display font-bold text-3xl sm:text-4xl text-white"
                >
                  {tab.heading}
                </motion.h3>
              </AnimatePresence>
            </div>
          </div>

          {/* Detail */}
          <div className="bg-white border border-black/10 rounded-sm p-8 sm:p-10 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab.key}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-[var(--muted-light)] leading-relaxed">{tab.text}</p>
                <div className="mt-7 grid sm:grid-cols-2 gap-3">
                  {tab.points.map((p, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--brand)]/10 text-[var(--brand)]">
                        <Check size={12} weight="bold" />
                      </span>
                      <span className="text-sm font-medium text-[var(--ink)]">{p}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-auto pt-8">
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--muted-light)] mb-4">
                {u.methodsTitle}
              </p>
              <div className="flex flex-wrap gap-2">
                {u.methods.map((mth, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1.5 rounded-sm bg-[var(--paper-2)] text-[var(--ink)] border border-black/5"
                    data-testid={`method-${i}`}
                  >
                    {mth}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
