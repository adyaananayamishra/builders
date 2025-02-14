import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex justify-center mt-6">
    <div className="flex items-center bg-gray-300 px-5 py-3 rounded-full w-150 mt-6 ">
      <Search size={20} className="text-black-500 ml-3" />
      <input
        type="text"
        className="flex-grow px-4 bg-transparent outline-none text-gray-900 placeholder-gray-500"
        placeholder="Search for products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
    </div>
  );
};

export default SearchBar;
