import { NavLink } from "react-router-dom";
import logo from "../../assets/Icons/favicon.png";

const Logo = () => {
  return (
    <NavLink
      to="/"
      className="flex items-center "
    >
      <div className="flex items-center ">
<img
        src={logo}
        alt="Homie Logo"
        className="w-22 h-20 object-contain  pt-2 "
      />

      <div className="flex flex-col leading-none">
        <span className="text-2xl font-bold text-[#4B2E2B]">
          Homie
        </span>
        <span className="text-[10px] text-gray-500">
          Furniture Rentals
        </span>
      </div>
      </div>
      
    </NavLink>
  );
};

export default Logo;

