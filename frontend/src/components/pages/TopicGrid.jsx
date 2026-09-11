import { Reveal } from "@/components/landing/Reveal";
import { TopicCard } from "./TopicCard";

export const TopicGrid = ({ items, dark = false, lang = "tr", cols = "sm:grid-cols-2 lg:grid-cols-3" }) => (
  <div className={`grid grid-cols-1 ${cols} gap-4`} data-testid="topic-grid">
    {items.map((item, i) => (
      <Reveal key={item.slug || i} delay={(i % 3) * 0.08}>
        <TopicCard
          icon={item.icon}
          title={item.title}
          text={item.blurb || item.text}
          bullets={item.bullets}
          comingSoon={item.comingSoon}
          dark={dark}
          lang={lang}
          testid={item.slug}
        />
      </Reveal>
    ))}
  </div>
);
