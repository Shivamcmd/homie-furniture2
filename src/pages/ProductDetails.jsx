import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaTruck, FaUndoAlt, FaTools } from "react-icons/fa";

import FAQSection from "../Components/FAQsection";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
const [showReviewBox, setShowReviewBox] = useState(false);
const [userRating, setUserRating] = useState(0);
const [userComment, setUserComment] = useState("");
const [reviews, setReviews] = useState([]);
const [editId, setEditId] = useState(null);


  // 🔥 FETCH
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then(res => res.json())
      .then(data => {
        // dummy extra data add kar rahe
        data.images = [data.image, data.image, data.image];
        data.description =
          "This premium product is crafted with high-quality materials, ensuring durability and comfort. Designed for modern homes with elegant styling.";
      data.rating = data.rating || null;

       // ✅ LOCALSTORAGE LOAD
  const stored = localStorage.getItem(`reviews_${id}`);

  data.reviews = stored
    ? JSON.parse(stored)
    : data.reviews || [];

        setProduct(data);
        setReviews(data.reviews);
      });
  }, [id]);

  if (!product) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  const nextImage = () => {
    setActiveIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleAddToCart = () => {
    setAdding(true);
    setTimeout(() => {
      addToCart({ ...product, qty });
      setAdding(false);
      setAdded(true);
    }, 600);
  };

  return (
    <div className="max-w-[1200px] mx-auto p-4">

      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full 
        bg-gray-100 hover:bg-gray-200 transition text-sm mb-5 dark:text-black"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      <div className="grid md:grid-cols-2 gap-6">

        {/* 🔥 IMAGE SLIDER */}
        <div>
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">

           <div className="overflow-hidden rounded-xl">
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{
      transform: `translateX(-${activeIndex * 100}%)`,
    }}
  >
    {product.images.map((img, i) => (
      <img
        key={i}
        src={img}
        className="w-full flex-shrink-0 object-cover aspect-[4/3]"
      />
    ))}
  </div>
</div>

            {/* NAV BUTTONS */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
            >
              <FaChevronRight />
            </button>

            {/* INDEX */}
            <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
              {activeIndex + 1} / {product.images.length}
            </div>
          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-2 mt-3">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveIndex(i)}
                className={`w-14 h-14 object-cover rounded cursor-pointer border 
                ${i === activeIndex ? "border-black" : ""}`}
              />
            ))}
          </div>
        </div>

        {/* 🔥 DETAILS */}
        <div className="flex flex-col gap-3">

          <h1 className="text-xl md:text-2xl font-bold">
            {product.name}
          </h1>

  <p
onClick={() => {
  setActiveTab("reviews");

  setTimeout(() => {
    document
      .getElementById("reviews-section")
      ?.scrollIntoView({ behavior: "smooth" });
  }, 100);
}}
  className="text-sm text-gray-500 cursor-pointer hover:underline"
>
 ⭐ {
  reviews.length
    ? (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1)
    : "New"
} ({reviews.length} reviews)
</p>

<p className="text-2xl md:text-3xl text-[#bf6f32] font-semibold">
  ₹ {product.price}
  <span className="text-sm md:text-base font-normal text-gray-500 ml-2">
    / month
  </span>
</p>

          <p className="text-gray-600 text-sm leading-relaxed">
            {product.description}
          </p>

          {/* QUANTITY */}
          <div className="flex items-center gap-3 mt-2">
            <button
              onClick={() => setQty(q => Math.max(1, q - 1))}
              className="px-3 py-1 border"
            >-</button>

            <span>{qty}</span>

            <button
              onClick={() => setQty(q => q + 1)}
              className="px-3 py-1 border"
            >+</button>
          </div>

          {/* BUTTON */}
          <button
            onClick={() => (added ? navigate("/cart") : handleAddToCart())}
            className="mt-3 bg-[#bf6f32] text-white py-2 rounded-md"
          >
            {adding ? "Adding..." : added ? "View Cart" : "Add to Cart"}
          </button>


{/* 🔥 TRUST FEATURES */}
<div className="mt-6 grid grid-cols-3 gap-3">

  {/* DELIVERY */}
  <div className="flex flex-col items-center justify-center bg-[#fafafa] dark:bg-[#1a1a1a] rounded-xl p-4 border hover:shadow-sm transition">
    <FaTruck className="text-[#bf6f32] text-lg mb-2" />
    <p className="text-xs sm:text-sm font-medium text-center text-gray-600">
      Delivery in 24 hrs
    </p>
  </div>

  {/* INSTALLATION */}
  <div className="flex flex-col items-center justify-center bg-[#fafafa] dark:bg-[#1a1a1a] rounded-xl p-4 border hover:shadow-sm transition">
    <FaTools className="text-[#bf6f32] text-lg mb-2" />
    <p className="text-xs sm:text-sm font-medium text-center text-gray-600">
      Free Installation
    </p>
  </div>

  {/* RETURN */}
  <div className="flex flex-col items-center justify-center bg-[#fafafa] dark:bg-[#1a1a1a] rounded-xl p-4 border hover:shadow-sm transition">
    <FaUndoAlt className="text-[#bf6f32] text-lg mb-2" />
    <p className="text-xs sm:text-sm font-medium text-center text-gray-600">
      7-Day Return
    </p>
  </div>

</div>

        </div>

      </div>

{/* 🔥 PRODUCT DETAILS SECTION */}
<div className="mt-14">

  {/* HEADER */}
  <div className="mb-8">
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
      <span className="text-[#bf6f32]">Product</span> Details
    </h2>
    <p className="text-gray-500 text-base mt-2">
      Everything you need to know before making a decision.
    </p>
  </div>

  {/* 🔥 TABS */}
  <div className="flex gap-3 mb-5 flex-wrap">
    {["description", "specs", "reviews"].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition 
        ${
          activeTab === tab
            ? "bg-[#bf6f32] text-white shadow-md"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        {tab === "description"
          ? "Description"
          : tab === "specs"
          ? "Specifications"
          : "Reviews"}
      </button>
    ))}
  </div>

  {/* 🔥 CONTENT BOX */}
  <div className="bg-[#fafafa] dark:bg-[#1a1a1a] p-8 mb-12 rounded-3xl shadow-sm">

    {/* 📝 DESCRIPTION */}
    {activeTab === "description" && (
      <div className="space-y-8">

        <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
          {product.description} This product is designed with a focus on durability,
          modern aesthetics, and long-term usability. Whether you are upgrading your
          living space or setting up a new home, this product blends comfort with
          functionality seamlessly.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* FEATURES */}
          <div className="bg-white dark:bg-[#2a2a2a] p-5 rounded-xl border">
            <h3 className="font-semibold text-lg mb-4">Features & Specs</h3>
            <ul className="space-y-2 text-sm">
              {product.features?.map((f, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[#bf6f32]">•</span> {f}
                </li>
              ))}
            </ul>
          </div>

          {/* IN BOX */}
          <div className="bg-white dark:bg-[#2a2a2a] p-5 rounded-xl border">
            <h3 className="font-semibold text-lg mb-4">What’s in the box?</h3>
            <ul className="space-y-2 text-sm">
              {product.inBox?.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[#bf6f32]">•</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* DIMENSIONS */}
          <div className="bg-white dark:bg-[#2a2a2a] p-5 rounded-xl border">
            <h3 className="font-semibold text-lg mb-4">Dimensions</h3>
            <p className="text-sm text-gray-600">
              {product.dimensions}
            </p>
          </div>

        </div>
      </div>
    )}

    {/* 📊 SPECS */}
    {activeTab === "specs" && (
      <div className="grid md:grid-cols-2 gap-6">

        {product.features?.map((item, i) => (
          <div
            key={i}
            className="bg-white dark:bg-[#2a2a2a] p-5 rounded-xl border hover:shadow-sm transition"
          >
            <p className="text-base font-medium">{item}</p>
          </div>
        ))}

      </div>
    )}

    {/* ⭐ REVIEWS */}
    {activeTab === "reviews" && (
      <div id="reviews-section" className="space-y-8 ">

        <div>
          <h3 className="text-2xl font-semibold">
            Customer Reviews
          </h3>
          <button
  onClick={() => setShowReviewBox(true)}
  className="mt-3 bg-[#bf6f32] text-white px-4 py-2 rounded-md text-sm"
>
  Write a Review
</button>

          <p className="text-gray-500 text-sm">
            Real feedback from users who rented this product.
          </p>
        </div>

        {/* REVIEWS GRID */}
        <div className="grid md:grid-cols-3 gap-6">

         {reviews.map((review) => (
  <div
    key={review.id}
    className="p-5 rounded-xl border bg-white dark:bg-[#1c1c1c] hover:shadow-sm transition space-y-2"
  >

    {/* HEADER */}
    <div className="flex justify-between items-center">
      <p className="font-semibold">{review.user}</p>

      <div className="flex gap-2 text-xs">
        <button
          onClick={() => setEditId(review.id)}
          className="text-blue-500"
        >
          Edit
        </button>

        <button
        onClick={() => {
  const updated = reviews.filter(r => r.id !== review.id);
  setReviews(updated);

  localStorage.setItem(
    `reviews_${product.id}`,
    JSON.stringify(updated)
  );
}}
          className="text-red-500"
        >
          Delete
        </button>
      </div>
    </div>

    {/* RATING */}
    <p className="text-yellow-500 text-sm">
      {"★".repeat(review.rating)}
    </p>

    {/* COMMENT */}
   {editId === review.id ? (
  <div className="space-y-2">

    {/* ⭐ EDIT RATING */}
    <div className="flex gap-1">
      {[1,2,3,4,5].map((star) => (
        <span
          key={star}
          onClick={() => {
            setReviews(prev =>
              prev.map(r =>
                r.id === review.id
                  ? { ...r, rating: star }
                  : r
              )
            );
          }}
          className={`cursor-pointer text-lg ${
            star <= review.rating
              ? "text-yellow-500"
              : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>

    {/* ✏ COMMENT */}
    <textarea
      defaultValue={review.comment}
      onBlur={(e) => {
  const updated = reviews.map(r =>
    r.id === review.id
      ? { ...r, comment: e.target.value }
      : r
  );

  setReviews(updated);

  localStorage.setItem(
    `reviews_${product.id}`,
    JSON.stringify(updated)
  );

  setEditId(null);
}}
      className="w-full border p-2 rounded text-sm"
    />

  </div>
) : (
      <p className="text-sm text-gray-600">
        {review.comment}
      </p>
    )}

    <p className="text-xs text-gray-400">
      {review.date}
    </p>

  </div>
))}

        </div>

      </div>
    )}

  </div>

</div>

{/* 🔥 FAQ */}
  <FAQSection/>

{showReviewBox && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white p-5 rounded-xl w-[90%] max-w-sm">

      <h3 className="text-lg font-semibold mb-3">
        Add Review
      </h3>

      <div className="flex gap-1 mb-3">
        {[1,2,3,4,5].map((star) => (
          <span
            key={star}
            onClick={() => setUserRating(star)}
            className={`cursor-pointer text-xl ${
              star <= userRating ? "text-yellow-500" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      <textarea
        value={userComment}
        onChange={(e) => setUserComment(e.target.value)}
        className="w-full border p-2 rounded text-sm mb-3"
        placeholder="Write your review..."
      />

      <div className="flex justify-end gap-2">

        <button onClick={() => setShowReviewBox(false)}>
          Cancel
        </button>

        <button
          onClick={() => {
            const newReview = {
              id: Date.now(),
              user: "You",
              rating: userRating,
              comment: userComment,
              date: "Just now"
            };

            const updated = [newReview, ...reviews];

            setReviews(updated);

            localStorage.setItem(
              `reviews_${product.id}`,
              JSON.stringify(updated)
            );

            setShowReviewBox(false);
            setUserRating(0);
            setUserComment("");
          }}
          className="bg-[#bf6f32] text-white px-4 py-1 rounded"
        >
          Submit
        </button>

      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default ProductPage;