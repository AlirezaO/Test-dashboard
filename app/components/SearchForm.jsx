export default function SearchForm() {
  return (
    <form onSubmit="/search" className="flex gap-2">
      <input 
      type="text" 
      name="search" 
      className="border-2 border-gray-800 rounded-md p-2 text-gray-800 bg-gray-100"
      placeholder="Search"
      />
      <button type="submit" className="submit-button-class border-2 border-gray-800">Search</button>
    </form>
  );
}
