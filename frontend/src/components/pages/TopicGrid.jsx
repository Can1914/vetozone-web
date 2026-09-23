import { Link } from "react-router-dom";
import { Reveal } from "@/components/landing/Reveal";
import { TopicCard } from "./TopicCard";

export const TopicGrid = ({ items, dark = false, lang = "tr", cols = "sm:grid-cols-2 lg:grid-cols-3", linkBase }) => (
  <div className={`grid grid-cols-1 ${cols} gap-4`} data-testid="topic-grid">
    {items.map((item, i) => (
      <Reveal key={item.slug || i} delay={(i % 3) * 0.08}>
        {linkBase ? (
          <Link to={`${linkBase}/${item.slug}`} className="block h-full">
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
          </Link>
        ) : (
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
        )}
      </Reveal>
    ))}
  </div>
);
