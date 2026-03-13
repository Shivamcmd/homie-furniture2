import { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

import Logo from "./Logo";
import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";
import AuthModal from "../AuthComponents/AuthModal";

const NavbarMainContainer = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const { cartItems } = useCart();

  const totalProducts = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-40 w-full bg-white border-b border-amber-700">

        <nav className="w-[95%] m-auto">

          <div className="h-[65px] flex items-center justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-3">

              {/* HAMBURGER */}
              <button
                className="md:hidden"
                onClick={() => setIsOpen(true)}
              >
                <Menu size={22} />
              </button>

              <Logo />

              <div className="hidden md:block ml-6">
                <NavMenu />
              </div>

            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">

              <div className="hidden md:block">
                <SearchBar />
              </div>

              {/* CART */}
              <div className="relative">

                <Link to="/cart">
                  <ShoppingCart
                    size={21}
                    className="cursor-pointer text-gray-700 hover:text-[#8B5E3C]"
                  />
                </Link>

                {totalProducts > 0 && (
                  <span className="absolute -top-3 -right-3 bg-[#bf6f32] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                    {totalProducts}
                  </span>
                )}

              </div>

              {/* USER */}
              {user ? (
                <div
                  onClick={handleLogout}
                  className="flex items-center gap-2 cursor-pointer text-sm font-medium"
                >
                  <User size={18} />
                  {user.name}
                </div>
              ) : (
                <User
                  size={21}
                  onClick={() => setIsAuthOpen(true)}
                  className="cursor-pointer text-gray-700 hover:text-[#8B5E3C]"
                />
              )}

            </div>

          </div>

        </nav>

      </header>
{/* MOBILE SIDEBAR */}
{isOpen && (
  <div className="fixed inset-0 z-50 flex">

    {/* SIDEBAR (LEFT) */}
    <div className="w-[260px] bg-white h-full shadow-lg p-6">

      {/* CLOSE */}
      <div className="flex justify-between items-center mb-6">
        <Logo />

        <button onClick={() => setIsOpen(false)}>
          <X size={22} />
        </button>
      </div>

      {/* SEARCH */}
      <div className="mb-6">
        <SearchBar />
      </div>

      {/* MENU */}
      <NavMenu
        mobile={true}
        onItemClick={() => setIsOpen(false)}
      />

    </div>

    {/* OVERLAY */}
    <div
      className="flex-1 bg-black/40"
      onClick={() => setIsOpen(false)}
    ></div>

  </div>
)}

      {/* AUTH MODAL */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        setUser={setUser}
      />

    </>
  );
};

export default NavbarMainContainer;