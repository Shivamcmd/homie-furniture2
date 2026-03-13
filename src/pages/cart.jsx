import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus, ChevronRight, ShoppingCart } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {

  const {
    cartItems,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    updateMonths
  } = useCart();

  const navigate = useNavigate();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity * ((item.months || 3) / 3),
    0
  );

  const handlePayment = () => {

    const options = {
      key: "rzp_test_SOgxbb6htrGWrX",
      amount: (totalPrice + 149) * 100,
      currency: "INR",
      name: "Homie Furniture Rentals",
      description: "Furniture Rental Payment",

      handler: function (response) {

        console.log(response);

        setOrderPlaced(true);

      },

      theme: {
        color: "#bf6f32"
      }
    };

    const razor = new window.Razorpay(options);
    razor.open();

  };

  /* ORDER SUCCESS SCREEN */

  if (orderPlaced) {

    return (

      <div className="max-w-[900px] mx-auto px-4 py-20 flex items-center justify-center">

        <div className="bg-white border rounded-2xl shadow-lg p-12 text-center">

          <div className="text-green-500 text-6xl mb-6">
            ✓
          </div>

          <h2 className="text-3xl font-bold mb-3">
            Order Placed Successfully
          </h2>

          <p className="text-gray-600 mb-6">
            Thanks for shopping with <span className="font-semibold">Homie</span>
          </p>

          <button
            onClick={() => navigate("/")}
            className="bg-[#bf6f32] text-white px-8 py-3 rounded-full hover:bg-[#a95c27] transition"
          >
            Continue Shopping
          </button>

        </div>

      </div>

    );

  }

  /* EMPTY CART */

  if (cartItems.length === 0) {

    return (

      <div className="max-w-[1100px] mx-auto px-4 py-10">

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-black">Home</Link>
          <ChevronRight size={14} />
          <span className="font-medium text-black">Cart</span>
        </div>

        <div className="flex flex-col items-center justify-center h-[60vh] text-center">

          <ShoppingCart size={70} className="text-[#bf6f32] mb-5" />

          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Your Cart is Empty
          </h2>

          <button
            onClick={() => navigate("/category/beds")}
            className="bg-[#bf6f32] text-white px-8 py-3 rounded-full hover:bg-[#a95c27] transition"
          >
            Explore Furniture
          </button>

        </div>

      </div>

    );

  }

  /* CART PAGE */

  return (

    <div className="max-w-[1200px] mx-auto px-4 py-10">

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

      <div className="grid lg:grid-cols-2 gap-10">

        {/* LEFT SIDE */}

        <div>

          {cartItems.map((item) => {

            const months = item.months || 3;

            const itemTotal =
              item.price * item.quantity * (months / 3);

            return (

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
                      Base Price (3 months): ₹ {item.price}
                    </p>

                    <div className="mt-3">

                      <label className="text-sm mr-2">
                        Rent Duration:
                      </label>

                      <select
                        value={months}
                        onChange={(e) =>
                          updateMonths(item.id, e.target.value)
                        }
                        className="border rounded-md px-2 py-1 text-sm"
                      >

                        <option value={3}>3 Months</option>
                        <option value={6}>6 Months</option>
                        <option value={9}>9 Months</option>

                      </select>

                    </div>

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
                    ₹ {itemTotal}
                  </p>

                </div>

              </div>

            );

          })}

        </div>

        {/* RIGHT SIDE */}

        <div className="space-y-6">

          <div className="bg-white border rounded-xl p-6 shadow-sm">

            <h3 className="text-lg font-semibold mb-4">
              Order Summary
            </h3>

            <div className="space-y-3 text-sm">

              <div className="flex justify-between">
                <span>Items Total</span>
                <span>₹ {totalPrice}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span>₹149</span>
              </div>

            </div>

            <div className="border-t mt-4 pt-4 flex justify-between font-semibold text-lg">

              <span>Total</span>

              <span>₹ {totalPrice + 0}</span>

            </div>

          </div>

          <div className="flex flex-col gap-4">

            <button
              onClick={() => navigate("/category/beds")}
              className="border border-[#bf6f32] text-[#bf6f32] px-6 py-3 rounded-full hover:bg-[#bf6f32] hover:text-white transition"
            >
              Rent More Items
            </button>

            <button
              onClick={() => navigate("/checkout")}
              className="bg-[#bf6f32] text-white px-8 py-3 rounded-full hover:bg-[#a95c27] transition"
            >
              Proceed to Checkout
            </button>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Cart;