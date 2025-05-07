import Link from "next/link";
import React from "react";

export default function UsersPage({}) {
  console.log("");
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-4">
      These are the users:
      <ul className="flex items-center justify-center flex-col gap-4">
        <Link href="/profile/users/1" className="text-blue-500">
          User 1
        </Link>
        <Link href="/profile/users/2">User 2</Link>
        <Link href="/profile/users/3">User 3</Link>
      </ul>
    </div>
  );
}
