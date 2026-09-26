import { motion } from "framer-motion";

// Reusable scroll-reveal wrapper
export const Reveal = ({ children, delay = 0, y = 40, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

// Masked line-by-line text reveal
export const MaskedLines = ({ lines, accent, className = "", lineClassName = "" }) => (
  <span className={className}>
    {lines.map((line, i) => (
      <span key={i} className="reveal-mask">
        <motion.span
          className={`block ${lineClassName} ${line === accent ? "text-[var(--brand)]" : ""}`}
          initial={{ y: "130%" }}
          animate={{ y: "0%" }}
          transition={{
            duration: 0.9,
            delay: 0.15 + i * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {line}
        </motion.span>
      </span>
    ))}
  </span>
);
