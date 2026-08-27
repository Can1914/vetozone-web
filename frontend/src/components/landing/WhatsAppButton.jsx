import { WhatsappLogo } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const PHONE = "905300208313";

export const WhatsAppButton = () => {
  const { lang } = useLang();
  const text =
    lang === "tr"
      ? "Merhaba, Vetozone ozon cihazı hakkında bilgi almak istiyorum."
      : "Hello, I'd like to get information about the Vetozone ozone device.";
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.6, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 right-5 z-[60] inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)]"
      data-testid="whatsapp-button"
      aria-label="WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      <WhatsappLogo size={30} weight="fill" className="relative z-10" />
    </motion.a>
  );
};
