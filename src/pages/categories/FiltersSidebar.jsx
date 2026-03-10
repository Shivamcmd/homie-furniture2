import React from "react";
import { SlidersHorizontal, ArrowUpDown, IndianRupee, Flame } from "lucide-react";

const FiltersSidebar = ({ priceFilter, setPriceFilter }) => {
  const colors = [
    { name: "Cherry Red", value: "#DC2626" },
    { name: "Royal Blue", value: "#2563EB" },
    { name: "Emerald", value: "#10B981" },
    { name: "Sunflower", value: "#EAB308" },
    { name: "Lavender", value: "#A855F7" },
    { name: "Coral", value: "#FB7185" },
  ];

  const handlePrice = (range) => {
    setPriceFilter(range);
  };

  return (
    <>
      {/* 📱 MOBILE FILTER BAR */}
      <div className="md:hidden mb-6">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">

          <button className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium whitespace-nowrap">
            <SlidersHorizontal size={16} />
            Filters
          </button>

          <button className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium whitespace-nowrap">
            <ArrowUpDown size={16} />
            Sort by
          </button>

          <button className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium whitespace-nowrap">
            <IndianRupee size={16} />
            Budget
          </button>

          <button className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium whitespace-nowrap">
            <Flame size={16} />
            Most Rented
          </button>

        </div>
      </div>

      {/* 💻 DESKTOP SIDEBAR */}
      <div className="hidden md:block bg-white p-6 rounded-xl shadow-sm space-y-5">

        <h2 className="text-xl font-semibold">Filters</h2>

        {/* Product Status */}
        <div>
          <h3 className="font-medium mb-3">Product Status</h3>
          <div className="space-y-2 text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-[#8B5E3C]" />
              In Stock
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-[#8B5E3C]" />
              Out of Stock
            </label>
          </div>
        </div>

        {/* Monthly Budget */}
        <div>
          <h3 className="font-medium mb-3">Monthly Budget</h3>
          <div className="space-y-2 text-sm">
            {[
              [0, 100],
              [100, 299],
              [300, 349],
              [350, 649],
            ].map((range) => (
              <label key={range[0]} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={
                    priceFilter?.[0] === range[0] &&
                    priceFilter?.[1] === range[1]
                  }
                  onChange={() => handlePrice(range)}
                />
                ₹{range[0]} - ₹{range[1]}
              </label>
            ))}
          </div>
        </div>

        {/* Color Filter */}
        <div>
          <h3 className="font-medium mb-3">Color</h3>
          <div className="flex flex-wrap gap-3">
            {colors.map((color) => (
              <label
                key={color.name}
                className="relative cursor-pointer group"
                title={color.name}
              >
                <input type="checkbox" className="absolute opacity-0 peer" />
                <div
                  className="w-7 h-7 rounded-full border border-gray-300 
                  peer-checked:ring-2 peer-checked:ring-[#8B5E3C] 
                  transition-all duration-200"
                  style={{ backgroundColor: color.value }}
                />
              </label>
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default FiltersSidebar;