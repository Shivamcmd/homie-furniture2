import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus, ChevronRight, ShoppingCart } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const Cart = () => {

  const { cartItems, addToCart, removeFromCart, decreaseQuantity } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  /* Razorpay Payment */
  const handlePayment = () => {

    const options = {
      key: "rzp_test_SOgxbb6htrGWrX",
      amount: totalPrice * 100,
      currency: "INR",
      name: "Homie Furniture Rentals",
      description: "Furniture Rental Payment",

      handler: function (response) {
        alert("Payment Successful ✅");
        console.log(response);
      },

      theme: {
        color: "#bf6f32"
      }
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  /* EMPTY CART */

  if (cartItems.length === 0) {
    return (
      <div className="max-w-[1100px] mx-auto px-4 py-10">

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-black">Home</Link>
          <ChevronRight size={14} />
          <span className="font-medium text-black">Cart</span>
        </div>

        <div className="relative flex flex-col items-center justify-center h-[60vh] rounded-2xl overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-br from-[#f6efe9] via-[#f3e5db] to-[#e8d5c5]" />

          <div className="absolute w-72 h-72 bg-[#bf6f32]/10 rounded-full blur-3xl top-10 left-10"></div>
          <div className="absolute w-72 h-72 bg-[#bf6f32]/10 rounded-full blur-3xl bottom-10 right-10"></div>

          <div className="relative text-center px-6">

            <ShoppingCart size={70} className="mx-auto text-[#bf6f32] mb-5" />

            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Your Cart is Empty
            </h2>

            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Looks like you haven't rented anything yet.
              Explore our furniture collection and make your home cozy.
            </p>

            <button
              onClick={() => navigate("/category/beds")}
              className="bg-[#bf6f32] text-white px-8 py-3 rounded-full hover:bg-[#a95c27] transition shadow-md"
            >
              Explore Furniture
            </button>

          </div>
        </div>

      </div>
    );
  }

  /* CART WITH ITEMS */

  return (
    <div className="max-w-[1100px] mx-auto px-4 py-10">

      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-black">Home</Link>
        <ChevronRight size={14} />
        <Link to="/categories" className="hover:text-black">
          Furniture
        </Link>
        <ChevronRight size={14} />
        <span className="font-medium text-black">
          Cart
        </span>
      </div>

      <h2 className="text-3xl font-bold mb-8">
        Your Cart
      </h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row gap-6 bg-white border border-gray-200 rounded-xl p-5 shadow-sm mb-6"
        >

          <div className="w-full md:w-40 h-36 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="max-h-full object-contain"
            />
          </div>

          <div className="flex-1 flex flex-col justify-between">

            <div>
              <h3 className="text-lg font-semibold">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Category: {item.category}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                ₹ {item.price} / month
              </p>
            </div>

            <div className="flex items-center justify-between mt-5">

              <div className="flex items-center gap-3">

                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="w-8 h-8 flex items-center justify-center border rounded-full"
                >
                  <Minus size={14} />
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => addToCart(item)}
                  className="w-8 h-8 flex items-center justify-center border rounded-full"
                >
                  <Plus size={14} />
                </button>

              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="flex items-center gap-2 text-red-500 text-sm hover:underline"
              >
                <Trash2 size={16} />
                Remove
              </button>

            </div>

          </div>

          <div className="md:w-32 flex md:flex-col justify-between md:items-end">
            <p className="font-semibold text-lg">
              ₹ {item.price * item.quantity}
            </p>
          </div>

        </div>
      ))}

      <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <h3 className="text-xl font-semibold">
          Total: ₹ {totalPrice}
        </h3>

        <div className="flex gap-4">

          <button
            onClick={() => navigate("/category/beds")}
            className="border border-[#bf6f32] text-[#bf6f32] px-6 py-3 rounded-full hover:bg-[#bf6f32] hover:text-white transition"
          >
            Rent More Items
          </button>

          <button
            onClick={handlePayment}
            className="bg-[#bf6f32] text-white px-8 py-3 rounded-full hover:bg-[#a95c27] transition"
          >
            Proceed to Checkout
          </button>

        </div>

      </div>

    </div>
  );
};

export default Cart;