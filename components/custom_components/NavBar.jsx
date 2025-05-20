import * as React from "react";

import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";

export default async function NavBar() {
  const session = await auth();
  // console.log(session);
  const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
  };
  const handleLogout = async () => {
    "use server";
    await signOut({ redirectTo: "/" });
  };
  return (
    <div className="w-full flex justify-between items-center p-3 bg-gray-800">
      <Link href="/" className="text-white text-2xl font-bold">
        Home Page
      </Link>

      {session && session?.user ? (
        <div className="flex gap-4 justify-center items-center">
          <Link
            href={`profile/users/${session?.user?.name}`}
            className="text-white hover:underline"
          >
            {session?.user?.name}
          </Link>
          <form action={handleLogout}>
            <button type="submit" className="submit-button-class">
              Logout
            </button>
          </form>
        </div>
      ) : (
        <form action={handleGithubLogin}>
          <button type="submit" className="submit-button-class">
            Sign in with GitHub
          </button>
        </form>
      )}
    </div>
  );
}
