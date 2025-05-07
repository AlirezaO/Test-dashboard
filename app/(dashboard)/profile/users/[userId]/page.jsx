import React from "react";

export default async function EachUser({ params }) {
  const { userId } = await params;
  return (
    <div className="flex items-center justify-center h-screen">
      <h1>Each User Page</h1>
      <h2>User ID: {userId}</h2>
    </div>
  );
}
