export default function SearchForm() {
  return (
    <form onSubmit="/search">
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </form>
  );
}
