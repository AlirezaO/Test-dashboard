"use server";

import { signIn } from "@/auth";

export async function handleGithubLogin() {
  await signIn("github", { redirectTo: "/" });
}
