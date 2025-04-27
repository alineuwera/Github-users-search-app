import { useState } from "react";
import { Search } from "lucide-react";

function SearchBar({ onSearch, error }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    onSearch(input);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex  items-start p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md mb-6"
    >
      <div className="flex items-center w-full mb-2">
        <Search className="h-5 w-5 text-blue-600 mr-4" />

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search GitHub username…"
          className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400"
        />
        {error && (
        <p className="text-red-500 text-sm font-medium ml-9">{error}</p>
      )}
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-semibold ml-2"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
