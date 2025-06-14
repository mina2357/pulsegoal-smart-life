
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
      { icon: BarChart, label: "Home", section: "home" },
      { icon: CheckCircle, label: "Goals", section: "goals" },
      { icon: User, label: "Account", section: "account" },
    ],
    // Section contents for each tab
    sections: {
      home: (
        <>
          <h1 className="text-3xl font-bold mb-4 text-left">PulseGoal Smart Life</h1>
          <div className="flex flex-col gap-4 w-full mb-6">
            {[
              { icon: <CheckCircle className="text-green-600" />, label: "Goals Completed", value: "12 / 15" },
              { icon: <BarChart className="text-blue-600" />, label: "Weekly Progress", value: "80%" },
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
              <span>Small achievements add up! Keep going.</span>
            </CardContent>
          </Card>
          <Card className="mb-2 w-full">
            <CardContent className="p-4">
              <div className="text-base text-left">
                About PulseGoal: Effortless goal tracking and smart suggestions, designed to enhance your daily routine.
              </div>
            </CardContent>
          </Card>
        </>
      ),
      goals: (
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4 text-left">Goals</h2>
          <Card className="mb-4">
            <CardContent className="p-4">
              <div>
                Here you can view, add, and track your goals.
                <br />
                <span className="block mt-2 text-sm text-muted-foreground">
                  (Demo: No backend yet. UI only.)
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
      account: (
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4 text-left">Account</h2>
          <Card className="mb-4">
            <CardContent className="p-4">
              <div>
                Account settings and user information.
                <br />
                <span className="block mt-2 text-sm text-muted-foreground">
                  (Demo: No editing functionality yet.)
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    }
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
      { icon: BarChart, label: "الرئيسية", section: "home" },
      { icon: CheckCircle, label: "الأهداف", section: "goals" },
      { icon: User, label: "الحساب", section: "account" },
    ],
    sections: {
      home: (
        <>
          <h1 className="text-3xl font-bold mb-4 text-right">حياة ذكية مع PulseGoal</h1>
          <div className="flex flex-col gap-4 w-full mb-6">
            {[
              { icon: <CheckCircle className="text-green-600" />, label: "الأهداف المكتملة", value: "١٢ من ١٥" },
              { icon: <BarChart className="text-blue-600" />, label: "تقدم الأسبوع", value: "٨٠٪" },
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
              <span>الإنجازات الصغيرة تصنع الفارق! استمر.</span>
            </CardContent>
          </Card>
          <Card className="mb-2 w-full">
            <CardContent className="p-4">
              <div className="text-base text-right">
                حول PulseGoal: تتبع الأهداف واقتراحات ذكية بسهولة لتعزيز روتينك اليومي.
              </div>
            </CardContent>
          </Card>
        </>
      ),
      goals: (
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4 text-right">الأهداف</h2>
          <Card className="mb-4">
            <CardContent className="p-4">
              <div>
                هنا يمكنك عرض وإضافة وتتبع أهدافك.
                <br />
                <span className="block mt-2 text-sm text-muted-foreground">
                  (عرض تجريبي: لا توجد قاعدة بيانات بعد. واجهة فقط.)
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
      account: (
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4 text-right">الحساب</h2>
          <Card className="mb-4">
            <CardContent className="p-4">
              <div>
                إعدادات الحساب ومعلومات المستخدم.
                <br />
                <span className="block mt-2 text-sm text-muted-foreground">
                  (عرض تجريبي: لا توجد إمكانية تعديل بعد.)
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
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
      className="min-h-screen bg-background flex flex-col justify-between items-center relative"
      style={{ fontFamily: "inherit" }}
    >
      <LanguageSwitcher />
      <div className="w-full max-w-md mx-auto flex-1 flex flex-col justify-center items-center pt-20 pb-8">
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
              className={`flex flex-col items-center gap-0 px-2 py-1 text-xs ${isActive ? "text-primary" : ""}`}
              key={idx}
              tabIndex={0}
              aria-current={isActive ? "page" : undefined}
              onClick={() => setActiveSection(item.section as "home" | "goals" | "account")}
            >
              <IconComp />
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

