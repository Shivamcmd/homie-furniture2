import { useState } from "react";
import { ShieldCheck, Truck, Sparkles, ArrowRight } from "lucide-react";
import homieLogo from "../../Assets/Icons/favicon.png";
import toast from "react-hot-toast";

const theme = "rgb(191,111,50)";

const Login = ({ switchToRegister, onLoginSuccess }) => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {

    if (!form.email || !form.password) {
      toast.error("Please fill all fields");
      return;
    }

    try {

      const res = await fetch(
        `http://localhost:5000/users?email=${form.email}&password=${form.password}`
      );

      const data = await res.json();

      if (data.length === 0) {
        toast.error("Invalid email or password");
        return;
      }

      toast.success(`Welcome back, ${data[0].name}`);
      onLoginSuccess(data[0]);

    } catch (err) {
      toast.error("Server error");
    }
  };

return (
  <div className="flex flex-col md:flex-row w-full h-full">

    {/* LEFT IMAGE */}
    <div className="hidden md:block md:w-1/2">
      <img
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
        className="w-full h-full object-cover"
      />
    </div>

    {/* FORM */}
    <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center">

      <div className="w-full max-w-[360px] p-5 md:p-7">

        {/* LOGO */}
        <div className="flex items-center gap-2 mb-4">
          <img src={homieLogo} className="w-6 h-6"/>
          <span className="text-base font-semibold" style={{color:theme}}>
            Homie
          </span>
        </div>

        {/* FEATURES */}
        <div className="flex flex-wrap gap-2 mb-5 text-[11px]">
          <span className="flex items-center gap-1 bg-white px-2 py-1 rounded shadow-sm">
            <ShieldCheck size={12} color={theme}/> Secure
          </span>
          <span className="flex items-center gap-1 bg-white px-2 py-1 rounded shadow-sm">
            <Truck size={12} color={theme}/> Orders
          </span>
          <span className="flex items-center gap-1 bg-white px-2 py-1 rounded shadow-sm">
            <Sparkles size={12} color={theme}/> Benefits
          </span>
        </div>

        <h2 className="text-xl font-semibold mb-5">
          <span style={{color:theme}}>Welcome back</span>
          <br/>
          Sign in to continue
        </h2>

        <div className="space-y-3">

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2.5 rounded-full text-sm focus:outline-none focus:ring-2"
            style={{ "--tw-ring-color": theme }}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2.5 rounded-full text-sm focus:outline-none focus:ring-2"
            style={{ "--tw-ring-color": theme }}
          />

          <button
            onClick={handleLogin}
            className="w-full text-white py-2.5 rounded-full flex justify-center items-center gap-2 text-sm"
            style={{backgroundColor:theme}}
          >
            Continue <ArrowRight size={14}/>
          </button>

        </div>

        <p className="mt-5 text-xs text-gray-600">
          Don’t have an account?
          <span
            onClick={switchToRegister}
            className="cursor-pointer ml-1 font-medium"
            style={{color:theme}}
          >
            Register
          </span>
        </p>

      </div>
    </div>
  </div>
);
};

export default Login;