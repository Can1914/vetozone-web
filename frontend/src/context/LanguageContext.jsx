import { createContext, useContext, useState, useCallback } from "react";
import { CONTENT } from "@/data/content";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("tr");
  const toggle = useCallback(() => {
    setLang((l) => (l === "tr" ? "en" : "tr"));
  }, []);
  const t = CONTENT[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
