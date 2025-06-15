import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useAccount } from "@/contexts/AccountContext";

const DUMMY_USER = {
  name: "PulseGoal User",
  email: "user@example.com",
};

const AccountSection: React.FC = () => {
  const { user, setUser } = useAccount();
  const [editing, setEditing] = useState(false);
  const [fields, setFields] = useState(user);

  const startEdit = () => {
    setEditing(true);
    setFields(user);
  };

  const save = () => {
    setUser(fields);
    setEditing(false);
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 text-left">Your Account</h2>
      <Card className="mb-4">
        <CardContent className="p-4 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <User className="text-yellow-600" />
            <div>
              {editing ? (
                <>
                  <input
                    className="block mb-1 px-2 py-1 border rounded w-full"
                    value={fields.name}
                    onChange={e => setFields({ ...fields, name: e.target.value })}
                  />
                  <input
                    className="block px-2 py-1 border rounded w-full"
                    value={fields.email}
                    onChange={e => setFields({ ...fields, email: e.target.value })}
                  />
                </>
              ) : (
                <>
                  <div className="font-semibold">{user.name}</div>
                  <div className="text-sm text-muted-foreground">{user.email}</div>
                </>
              )}
            </div>
          </div>
          <div>
            {editing ? (
              <Button size="sm" onClick={save}>
                Save
              </Button>
            ) : (
              <Button size="sm" variant="secondary" onClick={startEdit}>
                Edit Profile
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountSection;
