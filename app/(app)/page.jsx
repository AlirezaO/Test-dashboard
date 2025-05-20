import AuthButton from "@/components/custom_components/Buttons/AuthButton";
import SearchForm from "@/components/custom_components/TextFields/SearchForm";

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
