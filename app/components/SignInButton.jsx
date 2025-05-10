"use client";

import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

export default function SignInButton() {
  return (
    <Button
      onClick={() => signIn("github")}
      className="px-4 py-2 text-white bg-black rounded hover:bg-gray-800"
    >
      Sign in with GitHub
    </Button>
  );
}
