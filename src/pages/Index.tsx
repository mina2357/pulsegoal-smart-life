import React from "react";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Card, CardContent } from "@/components/ui/card";
import { Info, PieChart, Check, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import GoalsSection from "@/components/GoalsSection";
import AccountSection from "@/components/AccountSection";
import { GoalsProvider, useGoals } from "@/contexts/GoalsContext";
import { AccountProvider, useAccount } from "@/contexts/AccountContext";

// Animated Home Section with dynamic, real stats
const HomeSection: React.FC = () => {
  const { goals } = useGoals();
  const { user } = useAccount();

  const totalGoals = goals.length;
  const completedGoals = goals.filter(g => g.completed).length;
  const percent = totalGoals === 0 ? 0 : Math.round((completedGoals / totalGoals) * 100);

  // Animation helpers
  const [showTip, setShowTip] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setShowTip(true), 350);
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-4 text-left animate-fade-in">PulseGoal Smart Life</h1>
      <div className="flex flex-col gap-4 w-full mb-6">
        {/* Stats cards, animated */}
        <Card className="p-0 flex flex-row items-center gap-4 border animate-fade-in" style={{ animationDelay: "100ms", animationFillMode: "backwards" }}>
          <div className="p-4"><Check className="text-green-600" /></div>
          <div className="flex-1">
            <div className="font-semibold">Goals Completed</div>
            <div className="text-xl">{completedGoals} / {totalGoals === 0 ? 1 : totalGoals}</div>
          </div>
        </Card>
        <Card className="p-0 flex flex-row items-center gap-4 border animate-fade-in" style={{ animationDelay: "250ms", animationFillMode: "backwards" }}>
          <div className="p-4"><PieChart className="text-blue-600" /></div>
          <div className="flex-1">
            <div className="font-semibold">Weekly Progress</div>
            <div className="text-xl">{percent}%</div>
          </div>
        </Card>
        <Card className="p-0 flex flex-row items-center gap-4 border animate-fade-in" style={{ animationDelay: "400ms", animationFillMode: "backwards" }}>
          <div className="p-4"><User className="text-yellow-600" /></div>
          <div className="flex-1">
            <div className="font-semibold">Signed-in as</div>
            <div className="text-xl">{user.name ? user.name : "User"}</div>
          </div>
        </Card>
      </div>
      <Card className={`mb-4 w-full ${showTip ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "600ms", animationFillMode: "backwards" }}>
        <CardContent className="p-4 flex items-center gap-2">
          <Info className="text-purple-700" />
          <span className="font-medium text-lg">
            {/* Message appears with fade-in */}
            Small achievements add up! Keep going.
          </span>
        </CardContent>
      </Card>
      <Card className="mb-2 w-full animate-fade-in" style={{ animationDelay: "800ms", animationFillMode: "backwards" }}>
        <CardContent className="p-4">
          <div className="text-base text-left">
            <div className="font-medium mb-1">Recent Achievement:</div>
            {completedGoals > 0 ? (
              <div className="mb-2 text-green-700">
                • Completed &quot;{goals.filter(g => g.completed).slice(-1)[0]?.text}&quot;
              </div>
            ) : (
              <div className="mb-2 text-muted-foreground">No completed goals yet.</div>
            )}
            <div className="text-muted-foreground">
              About PulseGoal: Effortless goal tracking and smart suggestions, designed to enhance your daily routine.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};


// --- PAGE WRAPPER WITH CONTEXT PROVIDERS ---
function MainPage() {
  const { language } = useLanguage();
  const dir = language === "ar" ? "rtl" : "ltr";
  const [activeSection, setActiveSection] = React.useState<"home" | "goals" | "account">("home");

  React.useEffect(() => {
    // When language changes, reset to "home"
    setActiveSection("home");
  }, [language]);

  return (
    <GoalsProvider>
      <AccountProvider>
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
            {activeSection === "home" && <HomeSection />}
            {activeSection === "goals" && <GoalsSection />}
            {activeSection === "account" && <AccountSection />}
          </div>

          {/* Bottom navigation bar */}
          <nav className="w-full max-w-md fixed bottom-0 left-1/2 -translate-x-1/2 bg-card border-t flex justify-around items-center py-2 z-20">
            {[
              { icon: PieChart, label: "Home", section: "home" },
              { icon: Check, label: "Goals", section: "goals" },
              { icon: User, label: "Account", section: "account" },
            ].map((item, idx) => {
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
      </AccountProvider>
    </GoalsProvider>
  );
}

// Wrap the page in the language provider for proper context
const Index = () => (
  <LanguageProvider>
    <MainPage />
  </LanguageProvider>
);

export default Index;
