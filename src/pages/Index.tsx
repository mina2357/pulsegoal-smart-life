
import React from "react";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Card, CardContent } from "@/components/ui/card";
import { Info, BarChart, CheckCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";

// Example data for demo UI
const data = {
  en: {
    title: "PulseGoal Smart Life",
    stats: [
      { icon: <CheckCircle className="text-green-600" />, label: "Goals Completed", value: "12 / 15" },
      { icon: <BarChart className="text-blue-600" />, label: "Weekly Progress", value: "80%" },
      { icon: <User className="text-yellow-600" />, label: "Signed-in as", value: "User" },
    ],
    aiTip: "Small achievements add up! Keep going.",
    about: "About PulseGoal: Effortless goal tracking and smart suggestions, designed to enhance your daily routine.",
    bottomNav: [
      { icon: <BarChart />, label: "Home" },
      { icon: <CheckCircle />, label: "Goals" },
      { icon: <User />, label: "Account" },
    ]
  },
  ar: {
    title: "حياة ذكية مع PulseGoal",
    stats: [
      { icon: <CheckCircle className="text-green-600" />, label: "الأهداف المكتملة", value: "١٢ من ١٥" },
      { icon: <BarChart className="text-blue-600" />, label: "تقدم الأسبوع", value: "٨٠٪" },
      { icon: <User className="text-yellow-600" />, label: "المستخدم", value: "مستخدم" },
    ],
    aiTip: "الإنجازات الصغيرة تصنع الفارق! استمر.",
    about: "حول PulseGoal: تتبع الأهداف واقتراحات ذكية بسهولة لتعزيز روتينك اليومي.",
    bottomNav: [
      { icon: <BarChart />, label: "الرئيسية" },
      { icon: <CheckCircle />, label: "الأهداف" },
      { icon: <User />, label: "الحساب" },
    ]
  }
};

function MainPage() {
  const { language } = useLanguage();
  const current = data[language];

  // Direction for RTL (Arabic)
  const dir = language === "ar" ? "rtl" : "ltr";
  const alignClass = language === "ar" ? "text-right" : "text-left";
  const flexDir = language === "ar" ? "flex-row-reverse" : "flex-row";

  return (
    <div
      dir={dir}
      className="min-h-screen bg-background flex flex-col justify-between items-center relative"
      style={{ fontFamily: "inherit" }}
    >
      <LanguageSwitcher />
      <div className="w-full max-w-md mx-auto flex-1 flex flex-col justify-center items-center pt-20 pb-8">
        <h1 className={`text-3xl font-bold mb-4 ${alignClass}`}>{current.title}</h1>

        {/* Stats cards */}
        <div className="flex flex-col gap-4 w-full mb-6">
          {current.stats.map((stat, i) => (
            <Card key={i} className="p-0 flex flex-row items-center gap-4">
              <div className="p-4">{stat.icon}</div>
              <div className="flex-1">
                <div className="font-semibold">{stat.label}</div>
                <div className="text-xl">{stat.value}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* AI tip card */}
        <Card className="mb-4 w-full">
          <CardContent className="p-4 flex items-center gap-2">
            <Info className="text-purple-700" />
            <span>{current.aiTip}</span>
          </CardContent>
        </Card>

        {/* About project */}
        <Card className="mb-2 w-full">
          <CardContent className="p-4">
            <div className={`text-base ${alignClass}`}>{current.about}</div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom navigation bar */}
      <nav className="w-full max-w-md fixed bottom-0 left-1/2 -translate-x-1/2 bg-card border-t flex justify-around items-center py-2 z-20">
        {current.bottomNav.map((item, idx) => (
          <Button
            variant="ghost"
            className="flex flex-col items-center gap-0 px-2 py-1 text-xs"
            key={idx}
            tabIndex={0}
          >
            {item.icon}
            <span className="mt-1">{item.label}</span>
          </Button>
        ))}
      </nav>
    </div>
  );
}

// Wrap the page in the language provider for proper context
const Index = () => (
  <LanguageProvider>
    <MainPage />
  </LanguageProvider>
);

export default Index;
