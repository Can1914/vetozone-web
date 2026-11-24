// Hekim profil fotoğrafı, yuvarlak. Fotoğraf gelmeyen hekimlerde kart boş
// görünmesin diye baş harfleri gösteriyoruz — fotoğraflar eklendikçe
// veriye `photo` alanı yazmak yetiyor.
const initials = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toLocaleUpperCase("tr-TR");

export const DoctorAvatar = ({ name, photo, dark = false }) => {
  const base = "h-12 w-12 shrink-0 rounded-full object-cover";

  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        width="96"
        height="96"
        loading="lazy"
        className={`${base} ${dark ? "ring-1 ring-white/15" : "ring-1 ring-black/10"}`}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`${base} inline-flex items-center justify-center font-display font-bold text-sm ${
        dark ? "bg-white/10 text-white/70" : "bg-[var(--brand)]/10 text-[var(--brand)]"
      }`}
    >
      {initials(name)}
    </span>
  );
};
