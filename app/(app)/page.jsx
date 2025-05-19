import AuthButton from "@/app/components/AuthButton";
import SearchForm from "@/app/components/SearchForm";

export default async function App({ searchParams }) {
  const search = await searchParams?.search;
  //   throw new Error("This is a test error");

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4">
      <SearchForm search={search} />
      {search && <p className="text-white">Search value: {search}</p>}
    </main>
  );
}
