export const scrollToId = (id, offset = -10) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.lenis) window.lenis.scrollTo(el, { offset });
  else el.scrollIntoView({ behavior: "smooth" });
};
