
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <Button
      variant="outline"
      className="absolute top-6 left-6 z-10 flex flex-row gap-1"
      onClick={toggleLanguage}
      aria-label={language === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
    >
      {language === "en" ? (
        <>
          العربية <ArrowRight className="ml-1" />
        </>
      ) : (
        <>
          English <ArrowLeft className="ml-1" />
        </>
      )}
    </Button>
  );
};

export default LanguageSwitcher;
