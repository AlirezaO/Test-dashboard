import React from "react";

export default function EachUser({ params }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1>Each User Page</h1>
      <h2>User ID: {params.userId}</h2>
    </div>
  );
}
