import { useState, useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutAddress = () => {

  const { cartItems } = useCart();
  const navigate = useNavigate();
  const locationRef = useRef(null);

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

  /* LOAD ADDRESSES */
  useEffect(() => {
    const saved = localStorage.getItem("addresses");
    if (saved) {
      setAddresses(JSON.parse(saved));
    }
  }, []);

  /* SAVE ADDRESSES */
  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  /* GOOGLE AUTOCOMPLETE */
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

  /* ADD OR UPDATE ADDRESS */
  const handleAddAddress = () => {

    if (editId) {

      const updated = addresses.map((a) =>
        a.id === editId ? { ...a, ...form } : a
      );

      setAddresses(updated);
      setEditId(null);

    } else {

      const newAddress = {
        id: Date.now(),
        ...form
      };

      setAddresses([...addresses, newAddress]);
    }

    setShowForm(false);

    setForm({
      name: "",
      phone: "",
      address: "",
      location: ""
    });

  };

  /* DELETE ADDRESS */
  const handleDelete = (id) => {

    const updated = addresses.filter((addr) => addr.id !== id);
    setAddresses(updated);

    if (selectedAddress === id) {
      setSelectedAddress(null);
    }

  };

  /* EDIT ADDRESS */
  const handleEdit = (addr) => {

    setForm(addr);
    setEditId(addr.id);
    setShowForm(true);

  };

  /* PAYMENT */
  const handlePayment = () => {

    const options = {
      key: "rzp_test_SOgxbb6htrGWrX",
      amount: (totalPrice + 1)*100 ,
      currency: "INR",
      name: "Homie Furniture Rentals",

      handler: function (response) {
        alert("Payment Successful");
        console.log(response);
      }

    };

    const razor = new window.Razorpay(options);
    razor.open();

  };

  return (

    <div className="max-w-[1200px] mx-auto px-4 py-10 grid lg:grid-cols-[1.3fr_0.7fr] gap-10">

      {/* LEFT SIDE */}

      <div>

        <button
          onClick={() => navigate("/cart")}
          className="mb-6 text-white bg-[#9c6e4f] hover:bg-[#8c5e3b] rounded-md px-3 py-1 text-sm"
        >
          ← Back to Cart
        </button>

        <div className="flex justify-between mb-6">

          <h2 className="text-lg font-semibold">
            Select Delivery Address
          </h2>

          <button
            onClick={() => {
              setShowForm(true);
              setEditId(null);
            }}
            className="text-[#bf6f32] font-semibold"
          >
            + ADD NEW ADDRESS
          </button>

        </div>

        {/* SCROLLABLE ADDRESS LIST */}

        <div className="max-h-[65vh] overflow-y-auto pr-2">

          {addresses.map(addr => (

            <div
              key={addr.id}
              className={`border rounded-xl p-6 mb-4 transition ${
                selectedAddress === addr.id
                  ? "bg-[#f8efe8] border-[#bf6f32] shadow-md"
                  : "hover:border-gray-400"
              }`}
            >

              <div className="flex justify-between items-start">

                <div className="flex gap-3">

                  <input
                    type="radio"
                    checked={selectedAddress === addr.id}
                    onChange={() => setSelectedAddress(addr.id)}
                  />

                  <div>

                    <h3 className="font-semibold">
                      {addr.name}
                    </h3>

                    <p className="text-sm text-gray-600 mt-1">
                      {addr.address}
                    </p>

                    <p className="text-sm text-gray-600">
                      {addr.location}
                    </p>

                    <p className="text-sm mt-2">
                      {addr.phone}
                    </p>

                    <button
                      className="mt-4 bg-[#bf6f32] text-white px-5 py-2 rounded text-sm hover:bg-[#a95c27]"
                      onClick={() => setSelectedAddress(addr.id)}
                    >
                      Deliver to this Address
                    </button>

                  </div>

                </div>

                {/* EDIT DELETE */}

                <div className="flex gap-3 mt-3">

                  <button
                    onClick={() => handleEdit(addr)}
                    className="px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200"
                  >
                    ✏️ Edit
                  </button>

                  <button
                    onClick={() => handleDelete(addr.id)}
                    className="px-3 py-1 text-sm bg-red-50 text-red-600 rounded hover:bg-red-100"
                  >
                    🗑 Delete
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* ADDRESS FORM */}

        {showForm && (

          <div className="border rounded-xl p-6 mt-6">

            <h3 className="font-semibold mb-4">
              {editId ? "Edit Address" : "Add New Address"}
            </h3>

            <input
              placeholder="Full Name"
              value={form.name}
              className="border p-2 w-full mb-3 rounded"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              placeholder="Phone"
              value={form.phone}
              className="border p-2 w-full mb-3 rounded"
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <input
              ref={locationRef}
              placeholder="Search Location"
              className="border p-2 w-full mb-3 rounded"
              defaultValue={form.location}
            />

            <textarea
              placeholder="House / Flat / Street"
              value={form.address}
              className="border p-2 w-full mb-3 rounded"
              onChange={(e) =>
                setForm({ ...form, address: e.target.value })
              }
            />

            <button
              onClick={handleAddAddress}
              className="bg-[#bf6f32] text-white px-6 py-2 rounded hover:bg-[#a95c27]"
            >
              {editId ? "Update Address" : "Save Address"}
            </button>

          </div>

        )}

      </div>

      {/* RIGHT SIDE */}

      <div className="space-y-6 sticky top-20 h-fit">

        <div className="bg-white border rounded-xl p-6 shadow-sm">

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
              <span>₹149</span>
            </div>

          </div>

          <div className="border-t mt-4 pt-4 flex justify-between font-semibold text-lg">

            <span>Total</span>
            <span>₹ {totalPrice + 0}</span>

          </div>

        </div>

        <button
          onClick={handlePayment}
          disabled={!selectedAddress}
          className={`w-full py-3 rounded-full text-white font-semibold transition ${
            selectedAddress
              ? "bg-[#bf6f32] hover:bg-[#a95c27]"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Proceed to Pay
        </button>

      </div>

    </div>

  );

};

export default CheckoutAddress;