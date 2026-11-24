import { useRef, useState } from "react";
import { Play, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useLang } from "@/context/LanguageContext";
import { VIDEOS } from "@/data/content";
import { Reveal } from "./Reveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const VideoCard = ({ video, onPlay }) => (
  <div className="w-[200px] sm:w-[240px] shrink-0 snap-start">
    <button
      type="button"
      onClick={() => onPlay(video.id)}
      className="group relative block w-full aspect-[9/16] overflow-hidden rounded-sm border border-white/10 bg-black"
      data-testid={`video-card-${video.id}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
        alt={video.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        draggable="false"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[var(--ink)] shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Play weight="fill" size={22} className="translate-x-0.5" />
        </span>
      </span>
    </button>
    <p className="mt-3 text-sm leading-snug text-white/70">{video.title}</p>
  </div>
);

export const VideoReel = () => {
  const { t } = useLang();
  const v = t.videos;
  const [activeId, setActiveId] = useState(null);
  const trackRef = useRef(null);
  // Fare ile sürükleme durumu. Sürükleme sırasında tıklama tetiklenmesin
  // diye kaç piksel gidildiğini de tutuyoruz.
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: 0 });

  const scrollByCards = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild;
    const step = card ? card.offsetWidth + 16 : 260;
    track.scrollBy({ left: direction * step * 2, behavior: "smooth" });
  };

  const onPointerDown = (e) => {
    const track = trackRef.current;
    if (!track || e.pointerType === "touch") return; // dokunmatikte tarayıcı kendi kaydırır
    drag.current = { active: true, startX: e.clientX, startScroll: track.scrollLeft, moved: 0 };
    track.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    const track = trackRef.current;
    if (!track || !drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    drag.current.moved = Math.abs(dx);
    track.scrollLeft = drag.current.startScroll - dx;
  };

  const endDrag = (e) => {
    const track = trackRef.current;
    if (!track || !drag.current.active) return;
    drag.current.active = false;
    if (track.hasPointerCapture?.(e.pointerId)) track.releasePointerCapture(e.pointerId);
  };

  // Sürükleyip bıraktıktan sonra parmağın kalktığı karta tıklanmış sayılmasın.
  const onClickCapture = (e) => {
    if (drag.current.moved > 6) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = 0;
    }
  };

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
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-white max-w-2xl">
              {v.title}
            </h2>
            {/* Kaydırma artık kendiliğinden akmıyor: okla, sürükleyerek veya
                dokunmatikte kaydırarak izleyici kendi hızında geziyor. */}
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              {[
                { dir: -1, Icon: CaretLeft, label: "Önceki" },
                { dir: 1, Icon: CaretRight, label: "Sonraki" },
              ].map(({ dir, Icon, label }) => (
                <button
                  key={dir}
                  type="button"
                  onClick={() => scrollByCards(dir)}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-[var(--brand)] hover:text-white"
                  data-testid={`video-scroll-${dir > 0 ? "next" : "prev"}`}
                >
                  <Icon size={16} weight="bold" />
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth snap-x px-5 sm:px-8 cursor-grab active:cursor-grabbing select-none"
        data-testid="video-reel-track"
      >
        {VIDEOS.map((video) => (
          <VideoCard key={video.id} video={video} onPlay={setActiveId} />
        ))}
      </div>

      <Dialog open={!!activeId} onOpenChange={(open) => !open && setActiveId(null)}>
        <DialogContent className="max-w-sm border-none bg-black p-0 aspect-[9/16] overflow-hidden">
          {activeId && (
            <iframe
              key={activeId}
              src={`https://www.youtube.com/embed/${activeId}?autoplay=1&rel=0`}
              title={VIDEOS.find((x) => x.id === activeId)?.title || "Vetozone video"}
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
