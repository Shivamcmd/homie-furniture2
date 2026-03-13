import { useState } from "react";
import { ArrowRight } from "lucide-react";
import homieLogo from "../../Assets/Icons/favicon.png";
import toast from "react-hot-toast";

import registerimage from "../../Assets/register/r1.jpg"
const theme = "rgb(191,111,50)";

const Register = ({ switchToLogin }) => {

  const [form,setForm] = useState({
    name:"",
    email:"",
    password:""
  });

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleRegister = async () => {

    if (!form.name || !form.email || !form.password) {
      toast.error("All fields required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email.trim())) {
      toast.error("Enter a valid email address");
      return;
    }

    try {

      await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify(form)
      });

      toast.success("Registration successful");
      switchToLogin();

    } catch (err) {
      toast.error("Server error");
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-full">

      {/* IMAGE */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={registerimage}
          alt="Living room"
          className="w-full h-full object-cover"
        />
      </div>

      {/* FORM */}
      <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center">

        <div className="w-full max-w-md p-6 md:p-10">

          <div className="flex items-center gap-2 mb-5">
            <img src={homieLogo} alt="Homie" className="w-7 h-7"/>
            <span className="text-lg font-semibold" style={{color:theme}}>
              Homie
            </span>
          </div>

          <h2 className="text-2xl font-bold mb-6">
            <span style={{color:theme}}>Create account</span>
            <br/>
            Start your journey
          </h2>

          <div className="space-y-4">

            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full border border-gray-300 px-5 py-3 rounded-full focus:outline-none focus:ring-2"
              style={{ "--tw-ring-color": theme }}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full border border-gray-300 px-5 py-3 rounded-full focus:outline-none focus:ring-2"
              style={{ "--tw-ring-color": theme }}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full border border-gray-300 px-5 py-3 rounded-full focus:outline-none focus:ring-2"
              style={{ "--tw-ring-color": theme }}
            />

            <button
              onClick={handleRegister}
              className="w-full text-white py-3 rounded-full flex items-center justify-center gap-2 hover:opacity-90"
              style={{backgroundColor:theme}}
            >
              Continue <ArrowRight size={16}/>
            </button>

          </div>

          <p className="mt-6 text-sm text-gray-600">
            Already have an account?
            <span
              onClick={switchToLogin}
              className="cursor-pointer ml-1 font-medium"
              style={{color:theme}}
            >
              Sign in
            </span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Register;