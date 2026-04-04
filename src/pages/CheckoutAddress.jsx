import { useState, useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
const CheckoutAddress = () => {

  const navigate = useNavigate();
  const locationRef = useRef(null);

  // ✅ FIX: hook yaha hona chahiye
  const { cartItems, clearCart } = useCart();

  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    location: ""
  });

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity * ((item.months || 3) / 3),
    0
  );

  useEffect(() => {
    const saved = localStorage.getItem("addresses");
    if (saved) setAddresses(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  useEffect(() => {
    if (window.google && locationRef.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(
        locationRef.current
      );

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        setForm(prev => ({
          ...prev,
          location: place.formatted_address
        }));
      });
    }
  }, []);

  const handleAddAddress = () => {
    if (editId) {
      const updated = addresses.map(a =>
        a.id === editId ? { ...a, ...form } : a
      );
      setAddresses(updated);
      setEditId(null);
    } else {
      setAddresses([...addresses, { id: Date.now(), ...form }]);
    }

    setShowForm(false);
    setForm({ name: "", phone: "", address: "", location: "" });
  };

  const handleDelete = (id) => {
    const updated = addresses.filter(a => a.id !== id);
    setAddresses(updated);
    if (selectedAddress === id) setSelectedAddress(null);
  };

  const handleEdit = (addr) => {
    setForm(addr);
    setEditId(addr.id);
    setShowForm(true);
  };

  const handlePayment = () => {

    const options = {
      key: "rzp_test_SOgxbb6htrGWrX",
      amount: (totalPrice + 0) * 100,
      currency: "INR",
      name: "Homie Furniture Rentals",

      handler: function () {

        const user = JSON.parse(localStorage.getItem("user"));

        const existingOrders =
          JSON.parse(localStorage.getItem("orders")) || [];

        const newOrder = {
          id: Date.now(),
          userId: user?.id,
          items: cartItems,
          address: addresses.find(a => a.id === selectedAddress),
          total: totalPrice + 149,
          date: new Date().toISOString()
        };

        localStorage.setItem(
          "orders",
          JSON.stringify([newOrder, ...existingOrders])
        );

        clearCart();
        toast.success("Order Placed Successfully 🎉");
        navigate("/orders");
      }
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6 lg:py-10 
    lg:h-[calc(100vh-120px)] 
    grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-6 lg:gap-10 
    bg-white dark:bg-[#121212] 
    text-black dark:text-white 
    overflow-hidden">

      {/* LEFT SIDE */}

      <div className="lg:overflow-y-auto pr-2 pb-24 lg:hide-scrollbar">

        <button
          onClick={() => navigate("/cart")}
          className="mb-6 text-white bg-[#9c6e4f] rounded-md px-3 py-1 text-sm"
        >
          ← Back to Cart
        </button>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
          <h2 className="text-base sm:text-lg font-semibold">
            Select Delivery Address
          </h2>

          <button
            onClick={() => {
              setShowForm(true);
              setEditId(null);
            }}
            className="text-[#bf6f32] font-semibold text-sm sm:text-base"
          >
            + ADD NEW ADDRESS
          </button>
        </div>

        {/* ADDRESS LIST */}

        <div className="space-y-4">

          {addresses.map(addr => (

            <div
              key={addr.id}
              className={`border rounded-xl p-4 md:p-6 transition ${
                selectedAddress === addr.id
                  ? "bg-[#f8efe8] dark:bg-[#2a1d14] border-[#bf6f32] shadow-md"
                  : "hover:border-gray-400 dark:hover:border-gray-600"
              }`}
            >

              <div className="flex flex-col sm:flex-row sm:justify-between gap-4">

                <div className="flex gap-3">

                  <input
                    type="radio"
                    checked={selectedAddress === addr.id}
                    onChange={() => setSelectedAddress(addr.id)}
                  />

                  <div>

                    <h3 className="font-semibold">{addr.name}</h3>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {addr.address}
                    </p>

                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {addr.location}
                    </p>

                    <p className="text-sm mt-2">{addr.phone}</p>

                    <button
                      className="mt-4 bg-[#bf6f32] text-white px-4 py-2 rounded text-sm"
                      onClick={() => setSelectedAddress(addr.id)}
                    >
                      Deliver to this Address
                    </button>

                  </div>

                </div>

                {/* ICONS */}

                <div className="flex gap-2">

                  <button
                    onClick={() => handleEdit(addr)}
                    className="p-2 md:p-4 rounded-lg bg-gray-100 dark:bg-gray-700 
                    text-gray-700 dark:text-gray-200 
                    hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    onClick={() => handleDelete(addr.id)}
                    className="p-2 md:p-4 rounded-lg bg-red-100 dark:bg-red-900 
                    text-red-600 dark:text-red-300 
                    hover:bg-red-200 dark:hover:bg-red-800 transition"
                  >
                    <Trash2 size={16} />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* FORM */}

        {showForm && (

          <div className="border dark:border-gray-700 rounded-xl p-4 md:p-6 mt-6 bg-white dark:bg-[#1e1e1e]">

            <h3 className="font-semibold mb-4">
              {editId ? "Edit Address" : "Add New Address"}
            </h3>

            <input
              placeholder="Full Name"
              value={form.name}
              className="border dark:border-gray-600 bg-transparent p-2 w-full mb-3 rounded"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              placeholder="Phone"
              value={form.phone}
              className="border dark:border-gray-600 bg-transparent p-2 w-full mb-3 rounded"
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <input
              ref={locationRef}
              placeholder="Search Location"
              className="border dark:border-gray-600 bg-transparent p-2 w-full mb-3 rounded"
              defaultValue={form.location}
            />

            <textarea
              placeholder="House / Flat / Street"
              value={form.address}
              className="border dark:border-gray-600 bg-transparent p-2 w-full mb-3 rounded"
              onChange={(e) =>
                setForm({ ...form, address: e.target.value })
              }
            />

            <button
              onClick={handleAddAddress}
              className="bg-[#bf6f32] text-white px-6 py-2 rounded"
            >
              {editId ? "Update Address" : "Save Address"}
            </button>

          </div>

        )}

      </div>

      {/* RIGHT SIDE */}

      <div className="space-y-6 lg:sticky lg:top-24 h-fit">

        <div className="bg-white dark:bg-[#1e1e1e] border dark:border-gray-700 rounded-xl p-6">

          <h3 className="text-lg font-semibold mb-4">
            Price Details
          </h3>

          <div className="space-y-3 text-sm">

            <div className="flex justify-between">
              <span>Items Total</span>
              <span>₹ {totalPrice}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span>₹0</span>
            </div>

          </div>

          <div className="border-t dark:border-gray-700 mt-4 pt-4 flex justify-between font-semibold text-lg">

            <span>Total</span>
            <span>₹ {totalPrice + 0}</span>

          </div>

        </div>

        <button
          onClick={handlePayment}
          disabled={!selectedAddress}
          className={`w-full py-3 rounded-full text-white font-semibold ${
            selectedAddress
              ? "bg-[#bf6f32]"
              : "bg-gray-400 dark:bg-gray-700 cursor-not-allowed"
          }`}
        >
          Proceed to Pay
        </button>

      </div>

    </div>

  );

};

export default CheckoutAddress;