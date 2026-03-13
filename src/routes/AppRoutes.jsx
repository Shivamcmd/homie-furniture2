import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";

import Home from "../pages/home";
import CategoryPage from "../pages/categories/CategoryPage";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/cart";
import About from "../pages/about";
import Contact from "../pages/contact";
import Career from "../pages/careers";
import CheckoutAddress from "../pages/CheckoutAddress";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>

        <Route path="/" element={<Home />} />

        {/* this is - Only dynamic category page */}
        <Route path="/category/:name" element={<CategoryPage />} />

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Career />} />
<Route path="/checkout" element={<CheckoutAddress />} />
<Route path="/cart" element={<Cart />} />

      </Route>
    </Routes>
  );
};

export default AppRoutes;