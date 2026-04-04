import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex">

      {/* SIDEBAR */}
      <div className="w-64 h-screen bg-black text-white p-5 space-y-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

        <Link to="/admin/products">Products</Link><br/>
        <Link to="/admin/orders">Orders</Link><br/>
        <Link to="/admin/users">Users</Link><br/>
        <Link to="/admin/profile">Profile</Link>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>

    </div>
  );
};

export default AdminDashboard;