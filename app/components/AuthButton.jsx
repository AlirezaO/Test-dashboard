"use client";
import { Button } from "@mui/material";
import { signIn, signOut } from "next-auth/react";

export default function AuthButton({ text }) {
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
      default:
        console.log("Clicked: ", text);
    }
  };

  return (
    <form action={onClick}>
      <Button type="submit" variant="contained" className="submit-button-class">
        {text}
      </Button>
    </form>
  );
}
