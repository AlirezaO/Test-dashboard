import { auth } from "@/auth";
import AuthButton from "@/components/custom_components/Buttons/AuthButton";
import SimpleButton from "@/components/custom_components/Buttons/SimpleButton";
import { StartupCard } from "@/components/custom_components/StartupCard";
import SearchForm from "@/components/custom_components/TextFields/SearchForm";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { PlusIcon } from "lucide-react";

export default async function App({ searchParams }) {
  const query = (await searchParams).search;
  //   throw new Error("This is a test error");
  const params = { search: query || null };
  const startups = await client.fetch(STARTUPS_QUERY, params);

  const session = await auth();
  console.log("session:  ", session);
  return (
    <main className="flex flex-col items-center justify-center w-full gap-4 overflow-y-scroll p-10">
      <section className="flex flex-row gap-2">
        <SearchForm search={query} />
        <SimpleButton type="redirect" href="/create-startup">
          <PlusIcon />
        </SimpleButton>
      </section>
      {query && <p className="text-white">Search value: {query}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {startups.map((startup, index) => (
          <StartupCard data={startup} key={index} />
        ))}
      </div>
    </main>
  );
}
