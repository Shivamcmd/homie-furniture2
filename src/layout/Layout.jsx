import Navbar from "../Components/NavbarComponents/NavbarMainContainer";
import { Outlet } from "react-router-dom";
import Footer from "../Components/footer";
const Layout = () => {
  return (
    <>
  
      <div> 
      
        <Navbar />
        <Outlet />

      <Footer/>
      </div>
    </>
  );
};

export default Layout;