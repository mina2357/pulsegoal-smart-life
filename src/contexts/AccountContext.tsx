
import React, { createContext, useContext, useState } from "react";

type User = {
  name: string;
  email: string;
};

const DUMMY_USER = {
  name: "PulseGoal User",
  email: "user@example.com",
};

type AccountContextType = {
  user: User;
  setUser: (u: User) => void;
};

const AccountContext = createContext<AccountContextType | undefined>(undefined);

export const AccountProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState(DUMMY_USER);

  return (
    <AccountContext.Provider value={{ user, setUser }}>
      {children}
    </AccountContext.Provider>
  );
};

export function useAccount() {
  const ctx = useContext(AccountContext);
  if (!ctx) throw new Error("useAccount must be used within AccountProvider");
  return ctx;
}
