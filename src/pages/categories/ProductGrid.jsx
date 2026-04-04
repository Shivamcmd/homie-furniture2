import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const MobileFeatures = () => {
  const features = [
    { icon: "🚚", text: "Free Relocation" },
    { icon: "🛠", text: "Free Repair" },
    { icon: "💰", text: "Postpaid" },
    { icon: "🏠", text: "Easy Upgrade" },
  ];

  return (
    <div className="md:hidden col-span-2 my-4">
      <h3 className="text-center text-sm font-bold text-[#bf6f32] mb-3">
        WHY CHOOSE HOMIE
      </h3>

      <div className="grid grid-cols-2 gap-3">
        {features.map((f, i) => (
          <div
            key={i}
            className="border border-red-300 rounded-xl p-3 flex items-center gap-2 bg-red-50 text-xs font-medium text-red-500"
          >
            <span className="text-lg">{f.icon}</span>
            {f.text}
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductGrid = ({ category, priceFilter = [], ratingFilter }) => {
  const [products, setProducts] = useState([]);
  const [ratings, setRatings] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);

        const tempRatings = {};
        data.forEach(p => {
          tempRatings[p.id] = Number(
            (Math.random() * (5 - 3.5) + 3.5).toFixed(1)
          );
        });

        setRatings(tempRatings);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const normalizedCategory = category
    ? category.replace(/-/g, " ").toLowerCase()
    : null;

  const filteredProducts = products.filter(item => {
    const categoryMatch = normalizedCategory
      ? item.category.toLowerCase() === normalizedCategory
      : true;

    const priceMatch =
      priceFilter.length === 0 ||
      priceFilter.some(([min, max]) => item.price >= min && item.price <= max);

    const ratingMatch =
      !ratingFilter || ratings[item.id] >= ratingFilter;

    return categoryMatch && priceMatch && ratingMatch;
  });

  if (loading) {
    return <div className="text-center mt-10">Loading products... ⏳</div>;
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-[1200px] mx-auto px-2">

        {filteredProducts.map((item, index) => (
          <div key={item.id} className="contents">

            {index === 6 && (
              <div className="col-span-2 md:col-span-3">
                <MobileFeatures />
              </div>
            )}

            <ProductCard
              item={item}
              rating={ratings[item.id]}
            />
          </div>
        ))}

      </div>

      <div className="mt-10 mb-16 text-center">
        <h2 className="text-gray-500 text-sm md:text-base">
          You reached the end 🚀
        </h2>
      </div>
    </>
  );
};

export default ProductGrid;














{/*
// ProductGrid.jsx
import { Heart , Clock} from "lucide-react";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext"; 
import toast from "react-hot-toast";
import ProductCard from "./ProductCard";


const MobileFeatures = () => {
  return (
    <div className="md:hidden col-span-2 my-4">

      <h3 className="text-center text-sm font-bold text-[#bf6f32] mb-3">
        WHY CHOOSE HOMIE
      </h3>

      <div className="grid grid-cols-2 gap-3">

        <div className="border border-red-400 rounded-xl p-3 flex items-center gap-2 bg-red-50">
          <span className="text-xl">🚚</span>
          <p className="text-xs font-medium text-red-500">
            Free Relocation
          </p>
        </div>

        <div className="border border-red-400 rounded-xl p-3 flex items-center gap-2 bg-red-50">
          <span className="text-xl">🛠</span>
          <p className="text-xs font-medium text-red-500">
            Free Repair & Maintenance
          </p>
        </div>

        <div className="border border-red-400 rounded-xl p-3 flex items-center gap-2 bg-red-50">
          <span className="text-xl">💰</span>
          <p className="text-xs font-medium text-red-500">
            Postpaid Rentals
          </p>
        </div>

        <div className="border border-red-400 rounded-xl p-3 flex items-center gap-2 bg-red-50">
          <span className="text-xl">🏠</span>
          <p className="text-xs font-medium text-red-500">
            Upgrade with Ease
          </p>
        </div>

      </div>

    </div>
  );
};
const ProductGrid = ({ category, priceFilter = [], ratingFilter }) => {

  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();

  const [likedItems, setLikedItems] = useState([]);
  const [addedId, setAddedId] = useState(null);
  const [addingId, setAddingId] = useState(null);

  const [ratings] = useState(() =>
    allProducts.reduce((acc, product) => {
      acc[product.id] = Number(
        (Math.random() * (5 - 3.5) + 3.5).toFixed(1)
      );
      return acc;
    }, {})
  );

  const toggleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    );
  };

const handleWishlist = (item) => {
  const isLiked = wishlistItems.some(i => i.id === item.id);

  if (isLiked) {
    removeFromWishlist(item.id);
    setLikedItems(prev => prev.filter(id => id !== item.id));
    
  } else {
    addToWishlist(item);
    setLikedItems(prev => [...prev, item.id]);
    toast("Added to Wishlist 🩷")
  }
};

  const handleAddToCart = (item) => {

    setAddingId(item.id);

    setTimeout(() => {
      addToCart(item);
      setAddingId(null);
      setAddedId(item.id);
    }, 700);

  };

  const normalizedCategory = category
    ? category.replace(/-/g, " ").toLowerCase()
    : null;

  const filteredProducts = allProducts.filter((item) => {

    const itemCategoryNormalized = item.category
      .replace(/-/g, " ")
      .toLowerCase();

    const categoryMatch = normalizedCategory
      ? itemCategoryNormalized === normalizedCategory
      : true;

    const priceMatch =
      priceFilter.length === 0 ||
      priceFilter.some(
        ([min, max]) =>
          item.price >= min && item.price <= max
      );

    const ratingMatch =
      !ratingFilter ||
      ratings[item.id] >= ratingFilter;

 
    return categoryMatch && priceMatch && ratingMatch;

  });

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 max-w-[1200px] mx-auto px-2 md:px-0">

        {filteredProducts.map((item, index) => (
          <div key={item.id} className="contents">

            {index === 6 && (
              <div className="col-span-2 md:col-span-3">
                <MobileFeatures />
              </div>
            )}

             <div className="group relative bg-whitedark:bg-[#1c1c1c] rounded-xl border border-gray-300 dark:border-[#2a2a2c] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">

            <button
  onClick={() => handleWishlist(item)}
  className="absolute top-2 right-2 z-20 bg-white/90 dark:bg-[#2a2a2a]/90 backdrop-blur p-1.5 rounded-full shadow"
>
  <Heart
    size={16}
    className={
      likedItems.includes(item.id)
        ? "fill-red-500 text-red-500"
        : "text-gray-400"
    }
  />
</button>

              <div className="relative overflow-hidden rounded-t-xl bg-gray-100 dark:bg-[#222] h-36 md:h-48">
<img
  src={item.image}
  alt={item.name}
  onClick={() => navigate(`/ProductDetails/${item.id}`)}
  className="w-full h-full object-cover transition duration-500 group-hover:scale-105 cursor-pointer"
/>

                <div className="absolute top-3 left-3 bg-white  dark:bg-[#2a2a2a] px-2 py-1 rounded-full flex items-center gap-1 shadow text-xs ">
                  <span className="text-[#bf6f32]">★</span>
                  <span className="font-semibold text-gray-700 dark:text-gray-200 ">
                    {ratings[item.id]}
                  </span>
                </div>

              </div>

             <div className="p-4 flex flex-col flex-1">

                <h3 className="font-semibold text-[13px] md:text-base line-clamp-2 leading-tight">
                  {item.name}
                </h3>

                <div className="flex items-center justify-between mt-2">

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    ₹ {item.price} / month
                  </p>

                  <span className="flex items-center gap-1 text-[10px] bg-yellow-50 text-yellow-700 border-yellow-200
dark:bg-[#2a2a2a] dark:text-yellow-400 dark:border-[#333] px-2 py-[2px] rounded-full font-semibold w-fit">
                    <Clock size={14} />
                    Delivery in 24 Hours
                  </span>

                </div>

                <div className="flex-grow"></div>

                <button
                  onClick={() => {
                    if (addedId === item.id) {
                      navigate("/cart");
                    } else {
                      handleAddToCart(item);
                    }
                  }}
                  disabled={addingId === item.id}
                  className="flex items-center justify-center gap-1 mt-4 bg-[#bf6f32] text-white px-3 py-2 rounded-md text-xs font-semibold shadow-sm transition-all duration-300 hover:bg-[#a95c27] hover:shadow-md active:scale-95"
                >

                  {addingId === item.id ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Adding ...
                    </>
                  ) : addedId === item.id ? (
                    <>
                      <ShoppingCart size={18} />
                      View Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={18} />
                      Add to Cart
                    </>
                  )}

                </button>

              </div>

            </div> 
 <ProductCard item={item} ratings={ratings} />
          </div>
        ))}

      </div>
      {/* 🔥 END MESSAGE */}
     
      {/*
<div className="mt-10 mb-16 flex flex-col items-center justify-center text-center">

  <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mb-4"></div>

  <h2 className="text-lg md:text-2xl font-semibold text-gray-700 dark:text-gray-200 tracking-wide">
    You reached the end
  </h2>

  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
    No more products to show
  </p>

  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="mt-6 px-6 py-2.5 bg-[#bf6f32] text-white 
    rounded-full text-sm font-medium 
    hover:bg-[#a95c27] transition duration-300"
  >
    ↑ Back to Top
  </button>

</div>
    </>
  );
};

export default ProductGrid;
export { allProducts };
*/}






































//! this code is applied if we dont want rating //

// const ProductGrid = ({ category, priceFilter }) => {

//   // ✅ Hook always inside component
//   const [likedItems, setLikedItems] = useState([]);

//   const toggleLike = (id) => {
//     setLikedItems((prev) =>
//       prev.includes(id)
//         ? prev.filter((itemId) => itemId !== id)
//         : [...prev, id]
//     );
//   };

//   const normalizedCategory = category
//     ? category.replace(/-/g, " ").toLowerCase()
//     : null;

//   const filteredProducts = allProducts.filter((item) => {
//     const itemCategoryNormalized = item.category
//       .replace(/-/g, " ")
//       .toLowerCase();

//     const categoryMatch = normalizedCategory
//       ? itemCategoryNormalized === normalizedCategory
//       : true;

//     const priceMatch = priceFilter
//       ? item.price >= priceFilter[0] &&
//         item.price <= priceFilter[1]
//       : true;

//     return categoryMatch && priceMatch;
//   });
//   return (
//   <>
//     {/* Product Grid */}
//     <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
//       {filteredProducts.map((item) => (
//         <div
//           key={item.id}
//           className="group relative bg-white rounded-xl md:rounded-2xl overflow-hidden 
//           shadow-sm hover:shadow-2xl hover:-translate-y-2 
//           transition-all duration-300"
//         >
//           {/* ❤️ Like Button */}
//           <button
//             onClick={() => toggleLike(item.id)}
//             className="absolute top-2 right-2 md:top-4 md:right-4 
//             z-20 bg-white p-1 md:p-2 rounded-full shadow-md 
//             hover:scale-110 transition"
//           >
//             <Heart
//               size={14}
//               className={
//                 likedItems.includes(item.id)
//                   ? "fill-red-500 text-red-500"
//                   : "text-gray-400"
//               }
//             />
//           </button>

//           {/* Image */}
//           <div className="relative overflow-hidden">
//             {item.image ? (
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="h-32 md:h-64 w-full object-cover 
//                 hover:scale-105 transition duration-500"
//               />
//             ) : (
//               <div className="h-32 md:h-64 w-full bg-gray-200 flex items-center justify-center">
//                 No Image
//               </div>
//             )}
//           </div>

//           {/* Content */}
//           <div className="p-2 md:p-5 flex flex-col gap-1 md:gap-3">
//             <h3 className="font-semibold text-xs md:text-lg line-clamp-2">
//               {item.name}
//             </h3>

//             <p className="text-[11px] md:text-sm text-gray-500">
//               ₹ {item.price} / month
//             </p>

//             <button
//               className="mt-1 flex items-center justify-center gap-1.5 
//               bg-[#bf6f32] text-white py-1.5 md:py-2.5 
//               rounded-md md:rounded-xl 
//               text-[11px] md:text-sm font-medium 
//               hover:bg-[#a95c27] transition duration-300"
//             >
//               🛒 Add to Cart
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>

//     {/* End Section */}
//     <div className="mt-10 mb-10 flex flex-col items-center justify-center text-center">
      
//       <div className="w-20 h-[2px] bg-gray-300 mb-4"></div>

//       <h2 className="text-lg md:text-2xl font-semibold text-gray-700 tracking-wide">
//         You are at the end
//       </h2>

//       <p className="text-sm text-gray-500 mt-2">
//         No more products to show
//       </p>

//       <button
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         className="mt-6 px-6 py-2.5 bg-[#bf6f32] text-white 
//         rounded-full text-sm font-medium 
//         hover:bg-gray-800 transition duration-300"
//       >
//         ↑ Back to Top
//       </button>
//     </div>
//   </>
// );
// };

// export default ProductGrid;











































