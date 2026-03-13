import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TopCategories from "./TopCategories";
import FiltersSidebar from "./FiltersSidebar";
import ProductGrid from "./ProductGrid";

const CategoryPage = () => {

  const { name } = useParams();

  const [priceFilter, setPriceFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [name]);

  const formattedName = name
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="w-[95%] m-auto">

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mt-6 mb-4">

        <Link to="/" className="hover:text-[#8B5E3C] transition">
          Home
        </Link>

        <span className="mx-2">›</span>

        <span className="text-gray-800 font-medium">
          {formattedName}
        </span>

      </div>

      {/* Categories Strip */}
      <div className="flex justify-center mt-4">
        <TopCategories activeCategory={name} />
      </div>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-8 mt-6">

        {/* Filters */}
        <div className="w-full lg:w-[22%]">
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