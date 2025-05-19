import * as React from "react";

import AuthButton from "./AuthButton";
import { auth } from "@/auth";
import Link from "next/link";

export default async function NavBar() {
  const session = await auth();
  // console.log(session);
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
          <AuthButton text="Logout" />
        </div>
      ) : (
        <AuthButton text="Sign in with GitHub" />
      )}
    </div>
  );
}
