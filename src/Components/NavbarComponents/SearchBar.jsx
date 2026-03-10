import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative w-full md:w-[360px]">
      <input
        type="text"
        placeholder="Search sofas, beds..."
        className="w-full py-2 pl-10 pr-4 rounded-full bg-gray-100 text-gray-700 outline-none focus:ring-1 focus:ring-[#8B5E3C]"
      />
      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
      />
    </div>
  );
};

export default SearchBar;