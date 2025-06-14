
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, CheckCircle, Trash2 } from "lucide-react";

type Goal = {
  id: number;
  text: string;
  completed: boolean;
};

const initialGoals: Goal[] = [
  { id: 1, text: "Drink 2L of water", completed: false },
  { id: 2, text: "Walk 5,000 steps", completed: false },
  { id: 3, text: "Read for 20 minutes", completed: true },
];

const GoalsSection: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>(initialGoals);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    setGoals([
      ...goals,
      { id: Date.now(), text: input.trim(), completed: false },
    ]);
    setInput("");
  };

  const handleToggle = (id: number) => {
    setGoals(goals =>
      goals.map(goal =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  const handleDelete = (id: number) => {
    setGoals(goals => goals.filter(goal => goal.id !== id));
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 text-left">Your Goals</h2>
      <Card className="mb-4">
        <CardContent className="p-4 space-y-3">
          <form
            onSubmit={e => {
              e.preventDefault();
              handleAdd();
            }}
            className="flex gap-2"
          >
            <input
              className="flex-1 px-3 py-2 border rounded-lg"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Add new goal..."
              aria-label="Add new goal"
            />
            <Button type="submit" size="sm" variant="secondary">
              <Plus className="mr-1" /> Add
            </Button>
          </form>
          <ul className="space-y-2 mt-3">
            {goals.length === 0 && (
              <li className="text-muted-foreground text-sm">
                No goals yet. Add your first goal!
              </li>
            )}
            {goals.map(goal => (
              <li
                key={goal.id}
                className={`flex items-center gap-3 py-2 px-2 rounded group ${
                  goal.completed
                    ? "bg-green-50 dark:bg-green-900/30 line-through text-green-700 dark:text-green-300"
                    : "bg-accent/30 dark:bg-accent/20"
                }`}
              >
                <button
                  onClick={() => handleToggle(goal.id)}
                  aria-label={goal.completed ? "Mark as incomplete" : "Mark as complete"}
                  className="text-lg p-1 rounded hover:bg-green-100 dark:hover:bg-green-900/50 transition"
                  type="button"
                >
                  <CheckCircle
                    className={goal.completed ? "text-green-600" : "text-gray-400"}
                    fill={goal.completed ? "currentColor" : "none"}
                  />
                </button>
                <span className="flex-1">{goal.text}</span>
                <button
                  onClick={() => handleDelete(goal.id)}
                  aria-label="Delete goal"
                  className="text-red-500 hover:text-red-700 p-1"
                  type="button"
                >
                  <Trash2 />
                </button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoalsSection;
