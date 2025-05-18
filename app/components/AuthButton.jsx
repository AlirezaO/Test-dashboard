"use client";
import { signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function AuthButton({ text }) {
  const [clickCounter, setClickCounter] = useState(0);

  const onClick = async () => {
    switch (text) {
      case "Sign in with GitHub":
        "use server";
        await signIn("github");
        break;
      case "Sign in with Google":
        "use server";
        await signIn("google");
        break;
      case "Logout":
        "use server";
        await signOut();
        break;
      case "Add":
        setClickCounter(prev => prev + 1);
        break;
      case "Reset":
        console.log("HERE!")
        setClickCounter(0);
        break;
      default:
        console.log("Clicked: ", text);
        break;
    }
  };
console.log("COUNT: ", clickCounter)
  return (
    <form action={onClick} className="flex flex-col items-center justify-center gap-4">
      <button type="submit" className="submit-button-class">
        {text}
      </button>
      {clickCounter > 0 && <p className=" text-sm text-gray-600">Clicked {clickCounter} Times!</p>}
    </form>
  );
}
