import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TopCategories from "./TopCategories";
import FiltersSidebar from "./FiltersSidebar";
import ProductGrid from "./ProductGrid";

const CategoryPage = () => {

  const { name } = useParams();
  const [priceFilter, setPriceFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState(null);
const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [name]);

 const SectionHeader = ({ title }) => {
  return (
    <div className="flex items-center justify-between mb-5 mt-0 md:hidden">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-3 flex-1">
        
        <h2 className="text-xs sm:text-sm font-semibold tracking-wide text-gray-700 dark:text-gray-200 uppercase whitespace-nowrap">
          {title}
        </h2>

        {/* LINE */}
        <div className="h-[1px] flex-1 bg-gray-300 dark:bg-gray-700"></div>
      </div>

      {/* RIGHT SIDE */}
      <button className="flex items-center gap-1 text-[13px] sm:text-xs font-medium text-[#bf6f32] ml-3"
        onClick={() => scrollToSection("combos")} >
        View Packages
        <span className="text-[10px]">●</span>
      </button>

    </div>
  );
};

  const formattedName = name
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

    const formatTitle = (category) => {
  if (!category) return "Products for You";

  const name = category.replace(/-/g, " ");

  if (name.toLowerCase() === "sofa") return "Sofas for You";
  if (name.toLowerCase() === "chair") return "Chairs for You";
  if (name.toLowerCase() === "bed") return "Beds for You";

  return `${name} for You`;
};

  return (
    <div className="w-[95%] m-auto">

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mt-6 mb-4">

        <Link to="/" className="hover:text-[#8B5E3C] transition">
          Home
        </Link>

        <span className="mx-2">›</span>

        <span className="text-gray-800 dark:text-gray-500 font-medium">
          {formattedName}
        </span>

      </div>

      {/* Categories Strip */}
      <div className="flex justify-center mt-4">
        <TopCategories activeCategory={name} />
      </div>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-8 mt-1">

        {/* Filters */}
        <div className="w-full lg:w-[22%] ">
          <div className="sticky top-[90px]">

            <FiltersSidebar
              priceFilter={priceFilter}
              setPriceFilter={setPriceFilter}
              ratingFilter={ratingFilter}
              setRatingFilter={setRatingFilter}
            />

          </div>
        </div>

        {/* Products */}
        <div className="w-full lg:w-[78%]">

<SectionHeader title={formatTitle(name)} />

          <ProductGrid
            category={name}
            priceFilter={priceFilter}
            ratingFilter={ratingFilter}
          />

        </div>

      </div>

    </div>
  );
};

export default CategoryPage;