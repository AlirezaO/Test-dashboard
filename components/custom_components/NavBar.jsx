import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function NavBar() {
  const session = await auth();
  // console.log(session);

  const handleLogout = async () => {
    "use server";
    await signOut();
    redirect("/auth");
  };
  return (
    <div className="w-full flex justify-between items-center p-3 bg-gray-800 fixed top-0 z-10">
      <Link href="/" className="text-white text-2xl font-bold">
        Home Page
      </Link>

      {session && session?.user ? (
        <div className="flex gap-4 justify-center items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white cursor-pointer hover:text-gray-400">
              {session?.user?.name}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="base-class flex-col">
              <DropdownMenuItem asChild>
                <Link
                  href={`profile/users/${session?.user?.name}`}
                  className="w-full text-left cursor-pointer hover:bg-red-400 focus:bg-red-400 focus-visible:bg-red-400 active:bg-red-400"
                >
                  Profile
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator className="bg-gray-400 w-9/10" />

              <form action={handleLogout} className="w-full">
                <DropdownMenuItem asChild>
                  <button
                    type="submit"
                    className="w-full text-left cursor-pointer hover:bg-red-400 focus:bg-red-400 focus-visible:bg-red-400 active:bg-red-400"
                  >
                    Logout
                  </button>
                </DropdownMenuItem>
              </form>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <Link href="/auth" className="submit-button-class">
          Sign up
        </Link>
      )}
    </div>
  );
}
