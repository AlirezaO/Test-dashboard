import React from "react";
import { SubmitButton } from "@/app/components/submitButton";

export default function ProfilePage() {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-4">
      <h1>Dashboard Page</h1>
      <h2>This is the Dashboard page</h2>
      <SubmitButton href="/profile/users" />
    </div>
  );
}
