"use client";
import { signOut } from "@/auth";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function LogoutButton({ className, ...props }) {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/auth");
  };

  return (
    <button
      onClick={handleLogout}
      className={cn(
        className,
        "w-full text-left cursor-pointer hover:bg-red-400 focus:bg-red-400 focus-visible:bg-red-400 active:bg-red-400"
      )}
      {...props}
    >
      Logout
    </button>
  );
}
