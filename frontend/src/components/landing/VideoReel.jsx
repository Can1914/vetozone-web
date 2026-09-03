import { useState } from "react";
import Marquee from "react-fast-marquee";
import { Play } from "@phosphor-icons/react";
import { useLang } from "@/context/LanguageContext";
import { VIDEOS } from "@/data/content";
import { Reveal } from "./Reveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const VideoCard = ({ id, onPlay }) => (
  <button
    type="button"
    onClick={() => onPlay(id)}
    className="group relative mx-3 block w-[200px] sm:w-[240px] aspect-[9/16] shrink-0 overflow-hidden rounded-sm border border-white/10 bg-black"
    data-testid={`video-card-${id}`}
  >
    <img
      src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
      alt="Vetozone tedavi videosu"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
    <span className="absolute inset-0 flex items-center justify-center">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[var(--ink)] shadow-lg transition-transform duration-300 group-hover:scale-110">
        <Play weight="fill" size={22} className="translate-x-0.5" />
      </span>
    </span>
  </button>
);

export const VideoReel = () => {
  const { t } = useLang();
  const v = t.videos;
  const [activeId, setActiveId] = useState(null);

  return (
    <section
      className="relative bg-[var(--ink)] pb-24 sm:pb-32 overflow-hidden"
      data-testid="video-reel-section"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 mb-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[var(--brand)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-white/60">
              {v.overline}
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-white max-w-2xl">
            {v.title}
          </h2>
        </Reveal>
      </div>

      <Marquee speed={35} gradient gradientColor="#0a0a0a" gradientWidth={100} pauseOnHover autoFill>
        {VIDEOS.map((id) => (
          <VideoCard key={id} id={id} onPlay={setActiveId} />
        ))}
      </Marquee>

      <Dialog open={!!activeId} onOpenChange={(open) => !open && setActiveId(null)}>
        <DialogContent className="max-w-sm border-none bg-black p-0 aspect-[9/16] overflow-hidden">
          {activeId && (
            <iframe
              key={activeId}
              src={`https://www.youtube.com/embed/${activeId}?autoplay=1&rel=0`}
              title="Vetozone video"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              data-testid="video-dialog-iframe"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
