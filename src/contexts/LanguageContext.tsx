
import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lan: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Default to English, but check browser language if wanted.
  const [language, setLanguage] = useState<Language>("en");
  const toggleLanguage = () => setLanguage(language === "en" ? "ar" : "en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
};
