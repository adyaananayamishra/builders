// import { useState } from "react";

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState("");

//   const handleSearch = () => {
//     onSearch(query);
//   };

//   return (
//     <div className="flex items-center bg-gray-100 p-2 rounded-lg">
//       <input
//         type="text"
//         className="flex-grow p-2 bg-transparent outline-none"
//         placeholder="Search for properties..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button
//         onClick={handleSearch}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         Search
//       </button>
//     </div>
//   );
// };

// export default SearchBar;
import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center bg-gray-300 p-3 rounded-full w-full ">
      <Search size={20} className="text-black-500 ml-2" />
      <input
        type="text"
        className="flex-grow p-2 bg-transparent outline-none text-gray-700 placeholder-gray-500"
        placeholder="Search for products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

