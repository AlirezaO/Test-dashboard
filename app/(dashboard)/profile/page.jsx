import React from "react";

export default function ProfilePage() {
  // Intentionally throw an error to test error boundary

  return (
    <div className="flex items-center justify-center h-screen flex-col gap-4">
      <h1>Dashboard Page</h1>
      <h2>This is the Dashboard page</h2>
      {/* <SubmitButton href="/profile/users" /> */}
    </div>
  );
}
