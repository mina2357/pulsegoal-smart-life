import React from "react";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Card, CardContent } from "@/components/ui/card";
import { Info, PieChart, Check, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import GoalsSection from "@/components/GoalsSection";
import AccountSection from "@/components/AccountSection";

// Example data for demo UI
const data = {
  en: {
    title: "PulseGoal Smart Life",
    stats: [
      { icon: <Check className="text-green-600" />, label: "Goals Completed", value: "12 / 15" },
      { icon: <PieChart className="text-blue-600" />, label: "Weekly Progress", value: "80%" },
      { icon: <User className="text-yellow-600" />, label: "Signed-in as", value: "User" },
    ],
    aiTip: "Small achievements add up! Keep going.",
    about: "About PulseGoal: Effortless goal tracking and smart suggestions, designed to enhance your daily routine.",
    bottomNav: [
      { icon: PieChart, label: "Home", section: "home" },
      { icon: Check, label: "Goals", section: "goals" },
      { icon: User, label: "Account", section: "account" },
    ],
    // Section contents for each tab
    sections: {
      home: (
        <>
          <h1 className="text-3xl font-bold mb-4 text-left">PulseGoal Smart Life</h1>
          <div className="flex flex-col gap-4 w-full mb-6">
            {[
              { icon: <Check className="text-green-600" />, label: "Goals Completed", value: "12 / 15" },
              { icon: <PieChart className="text-blue-600" />, label: "Weekly Progress", value: "80%" },
              { icon: <User className="text-yellow-600" />, label: "Signed-in as", value: "User" },
            ].map((stat, i) => (
              <Card key={i} className="p-0 flex flex-row items-center gap-4">
                <div className="p-4">{stat.icon}</div>
                <div className="flex-1">
                  <div className="font-semibold">{stat.label}</div>
                  <div className="text-xl">{stat.value}</div>
                </div>
              </Card>
            ))}
          </div>
          <Card className="mb-4 w-full">
            <CardContent className="p-4 flex items-center gap-2">
              <Info className="text-purple-700" />
              <span className="font-medium text-lg">
                {/* Dynamic motivational message */}
                {["Small achievements add up! Keep going.","You're making great progress today!","Every step counts – keep it up!"][Math.floor(Date.now() / 1000000) % 3]}
              </span>
            </CardContent>
          </Card>
          <Card className="mb-2 w-full">
            <CardContent className="p-4">
              <div className="text-base text-left">
                {/* Demo "recent achievements" (could be made dynamic if desired) */}
                <div className="font-medium mb-1">Recent Achievement:</div>
                <div className="mb-2 text-green-700">• Completed "Read for 20 minutes"</div>
                <div className="text-muted-foreground">
                  About PulseGoal: Effortless goal tracking and smart suggestions, designed to enhance your daily routine.
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      ),
      goals: <GoalsSection />,
      account: <AccountSection />,
    }
  },
  ar: {
    title: "حياة ذكية مع PulseGoal",
    stats: [
      { icon: <Check className="text-green-600" />, label: "الأهداف المكتملة", value: "١٢ من ١٥" },
      { icon: <PieChart className="text-blue-600" />, label: "تقدم الأسبوع", value: "٨٠٪" },
      { icon: <User className="text-yellow-600" />, label: "المستخدم", value: "مستخدم" },
    ],
    aiTip: "الإنجازات الصغيرة تصنع الفارق! استمر.",
    about: "حول PulseGoal: تتبع الأهداف واقتراحات ذكية بسهولة لتعزيز روتينك اليومي.",
    bottomNav: [
      { icon: PieChart, label: "الرئيسية", section: "home" },
      { icon: Check, label: "الأهداف", section: "goals" },
      { icon: User, label: "الحساب", section: "account" },
    ],
    sections: {
      home: (
        <>
          <h1 className="text-3xl font-bold mb-4 text-right">حياة ذكية مع PulseGoal</h1>
          <div className="flex flex-col gap-4 w-full mb-6">
            {[
              { icon: <Check className="text-green-600" />, label: "الأهداف المكتملة", value: "١٢ من ١٥" },
              { icon: <PieChart className="text-blue-600" />, label: "تقدم الأسبوع", value: "٨٠٪" },
              { icon: <User className="text-yellow-600" />, label: "المستخدم", value: "مستخدم" },
            ].map((stat, i) => (
              <Card key={i} className="p-0 flex flex-row items-center gap-4">
                <div className="p-4">{stat.icon}</div>
                <div className="flex-1">
                  <div className="font-semibold">{stat.label}</div>
                  <div className="text-xl">{stat.value}</div>
                </div>
              </Card>
            ))}
          </div>
          <Card className="mb-4 w-full">
            <CardContent className="p-4 flex items-center gap-2">
              <Info className="text-purple-700" />
              <span className="font-medium text-lg">
                {/* Dynamic motivational: Arabic translations */}
                {["الإنجازات الصغيرة تصنع الفارق! استمر.","تقدم رائع اليوم!","كل خطوة مهمة – واصل!"][Math.floor(Date.now() / 1000000) % 3]}
              </span>
            </CardContent>
          </Card>
          <Card className="mb-2 w-full">
            <CardContent className="p-4">
              <div className="text-base text-right">
                <div className="font-medium mb-1">إنجاز حديث:</div>
                <div className="mb-2 text-green-700">• أكملت "قراءة لمدة ٢٠ دقيقة"</div>
                <div className="text-muted-foreground">
                  حول PulseGoal: تتبع الأهداف واقتراحات ذكية بسهولة لتعزيز روتينك اليومي.
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      ),
      goals: <GoalsSection />,
      account: <AccountSection />,
    }
  }
};

function MainPage() {
  const { language } = useLanguage();
  const current = data[language];

  // Direction for RTL (Arabic)
  const dir = language === "ar" ? "rtl" : "ltr";
  const alignClass = language === "ar" ? "text-right" : "text-left";

  // State: which section is active? (default: home)
  const [activeSection, setActiveSection] = React.useState<"home" | "goals" | "account">("home");

  React.useEffect(() => {
    // When language changes, reset to "home"
    setActiveSection("home");
  }, [language]);

  return (
    <div
      dir={dir}
      className="min-h-screen bg-background flex flex-col justify-between items-center relative overflow-hidden"
      style={{ fontFamily: "inherit" }}
    >
      {/* Animated moving background - sits at the lowest z-index */}
      <div aria-hidden="true" className="animated-bg" />

      {/* All page content overlays above the background */}
      <LanguageSwitcher />
      <div className="w-full max-w-md mx-auto flex-1 flex flex-col justify-center items-center pt-20 pb-8 z-10 relative">
        {
          // Render content based on the currently active section
          current.sections[activeSection]
        }
      </div>

      {/* Bottom navigation bar */}
      <nav className="w-full max-w-md fixed bottom-0 left-1/2 -translate-x-1/2 bg-card border-t flex justify-around items-center py-2 z-20">
        {current.bottomNav.map((item, idx) => {
          const isActive = activeSection === item.section;
          const IconComp = item.icon;
          return (
            <Button
              variant={isActive ? "default" : "ghost"}
              className={`flex flex-col items-center gap-0 px-2 py-1 text-xs ${isActive ? "text-primary" : ""} no-focus-ring`}
              key={idx}
              tabIndex={0}
              aria-current={isActive ? "page" : undefined}
              onClick={() => setActiveSection(item.section as "home" | "goals" | "account")}
            >
              <IconComp className="mb-0.5" />
              <span className="mt-1">{item.label}</span>
            </Button>
          );
        })}
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
