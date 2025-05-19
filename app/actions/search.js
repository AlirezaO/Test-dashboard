"use server";

import { redirect } from "next/navigation";

export async function handleSearch(formData) {
  const searchQuery = formData.get("search");

  if (searchQuery) {
    redirect(`/?search=${encodeURIComponent(searchQuery)}`);
  } else {
    redirect("/");
  }
}
