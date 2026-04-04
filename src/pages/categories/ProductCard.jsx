import { Heart, Clock, ShoppingCart } from "lucide-react";
import { FaTruck } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const ProductCard = ({ item}) => {
  const { addToCart } = useCart();
  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  const isLiked = wishlistItems.some(i => i.id === item.id);
const handleWishlist = () => {
  if (isLiked) {
    removeFromWishlist(item.id);
    toast("Removed from Wishlist 💔");
  } else {
    addToWishlist(item);
    toast("Added to Wishlist 🩷");
  }
};

  const handleCart = () => {
    setLoading(true);

    setTimeout(() => {
      addToCart(item);
      setLoading(false);
      setAdded(true);
    }, 600);
  };

  return (
    <div className="
group relative 
bg-white dark:bg-[#1c1c1c] 
rounded-2xl 
border border-gray-200/70 dark:border-white/10
shadow-[0_2px_12px_rgba(0,0,0,0.05)]
hover:shadow-[0_6px_22px_rgba(0,0,0,0.08)]
hover:-translate-y-[2px]
transition-all duration-300 
flex flex-col overflow-hidden
">

      {/* ❤️ Wishlist */}
      <button
        onClick={handleWishlist}
       className="absolute top-2 right-2 z-10 bg-white/90 p-1.5 sm:p-1 rounded-full shadow"
      >
        <Heart
  size={16}
  className={isLiked ? "fill-red-500 text-red-500" : "text-gray-400"}
/>
      </button>

      {/* IMAGE */}
      <div className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden bg-gray-100 dark:bg-[#222]">
        <img
          src={item.image}
          alt={item.name}
          onClick={() => navigate(`/ProductDetails/${item.id}`)}
          className="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition duration-500"
        />

        {/* Rating */}
        <div className="absolute top-2 left-2 bg-white dark:bg-[#2a2a2a] px-2 py-1 rounded-full text-xs shadow flex items-center gap-1">
          <span className="text-[#bf6f32]">★</span>
          <span className="font-semibold text-gray-700 dark:text-gray-200">
          {
  item.reviews?.length
    ? (
        item.reviews.reduce((a, r) => a + r.rating, 0) /
        item.reviews.length
      ).toFixed(1)
    : "New"
}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-3 md:p-4 flex flex-col flex-1">

       <h3 className="text-[13px] sm:text-sm md:text-base font-semibold line-clamp-2 leading-tight">
          {item.name}
        </h3>
   
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 gap-2">
  {/* 💰 RENT */}
  <div>
  <p className="hidden sm:block text-[10px] text-gray-500">
  Monthly rent
</p>

<p className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100">
  ₹ {item.price}
  <span className="text-xs sm:text-sm font-normal text-gray-500 ml-1">
    /month
  </span>
</p>
  </div>

  {/* 🚚 DELIVERY */}
 <div className="flex items-center gap-1 px-2 py-[3px] rounded-full 
bg-[#bf6f32]/10 text-[#bf6f32] text-[9px] sm:text-[10px] font-medium 
border border-[#bf6f32]/20 w-fit">

    <FaTruck size={11} />
  <span className="whitespace-nowrap sm:whitespace-normal">
    Delivery in 24 hours
  </span>
</div>

</div>
        <button
          onClick={() => (added ? navigate("/cart") : handleCart())}
          className="mt-3 bg-[#bf6f32] text-white py-2 rounded-md 
text-[11px] sm:text-xs md:text-sm 
flex items-center justify-center gap-1 
hover:bg-[#a95c27] transition"
        >
          {loading ? (
            "Adding to Cart..."
          ) : added ? (
            <>
              <ShoppingCart size={14} />
              View Cart
            </>
          ) : (
            <>
              <ShoppingCart size={14} />
              Add to Cart
            </>
          )}
        </button>

      </div>
    </div>
  );
};

export default ProductCard;