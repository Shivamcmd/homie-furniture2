import { useNavigate, useLocation } from "react-router-dom";

const NavMenu = ({ mobile = false, onItemClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }

    // 👇 Drawer close logic
    if (mobile && onItemClick) {
      onItemClick();
    }
  };

  return (
    <div
      className={
        mobile
          ? "flex flex-col space-y-6 text-lg font-medium"
          : "flex items-center gap-8"
      }
    >
      <button
        onClick={() => scrollToSection("categories")}
        className="text-black hover:text-[#A47148] transition"
      >
        Categories
      </button>

      <button
        onClick={() => scrollToSection("combos")}
        className="text-black hover:text-[#A47148] transition"
      >
        Combos
      </button>

      <button
        onClick={() => scrollToSection("offers")}
        className="text-black hover:text-[#A47148] transition"
      >
        Why Homie?
      </button>
    </div>
  );
};

export default NavMenu;