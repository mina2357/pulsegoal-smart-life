
import React, { createContext, useContext, useState, useCallback } from "react";

export type Goal = {
  id: number;
  text: string;
  completed: boolean;
};

type GoalsContextType = {
  goals: Goal[];
  addGoal: (text: string) => void;
  toggleGoal: (id: number) => void;
  deleteGoal: (id: number) => void;
};

const initialGoals: Goal[] = [
  { id: 1, text: "Drink 2L of water", completed: false },
  { id: 2, text: "Walk 5,000 steps", completed: false },
  { id: 3, text: "Read for 20 minutes", completed: true },
];

const GoalsContext = createContext<GoalsContextType | undefined>(undefined);

export const GoalsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [goals, setGoals] = useState<Goal[]>(initialGoals);

  const addGoal = useCallback((text: string) => {
    setGoals(goals => [...goals, { id: Date.now(), text, completed: false }]);
  }, []);
  const toggleGoal = useCallback((id: number) => {
    setGoals(goals => goals.map(g => g.id === id ? { ...g, completed: !g.completed } : g));
  }, []);
  const deleteGoal = useCallback((id: number) => {
    setGoals(goals => goals.filter(g => g.id !== id));
  }, []);

  return (
    <GoalsContext.Provider value={{ goals, addGoal, toggleGoal, deleteGoal }}>
      {children}
    </GoalsContext.Provider>
  );
};

export function useGoals() {
  const ctx = useContext(GoalsContext);
  if (!ctx) throw new Error("useGoals must be used within GoalsProvider");
  return ctx;
}
