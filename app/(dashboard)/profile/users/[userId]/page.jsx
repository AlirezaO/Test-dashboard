import AuthButton from "@/components/custom_components/Buttons/AuthButton";
import SimpleButton from "@/components/custom_components/Buttons/SimpleButton";
import React from "react";

export default async function EachUser({ params }) {
  const { userId } = await params;

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <h1>Each User Page</h1>
      <h2>User ID: {userId}</h2>
      <SimpleButton text="Add" />
    </div>
  );
}
