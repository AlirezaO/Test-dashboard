import AuthButton from "@/app/components/AuthButton";
import SearchForm from "@/app/components/SearchForm";
export default function App() {
  //   throw new Error("This is a test error");

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <AuthButton text="hi" />
      <SearchForm />
    </main>
  );
}
