import { useState } from "react";
import { ShieldCheck, Truck, Sparkles } from "lucide-react";
import homieLogo from "../../Assets/Icons/favicon.png";
import toast from "react-hot-toast";
import loginimage from "../../Assets/login/fg.jpg";
import { useEffect } from "react";

const theme = "rgb(191,111,50)";

const Login = ({ onLoginSuccess, openRegisterWithPhone }) => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [name, setName] = useState("");
const [timer, setTimer] = useState(0);

  // SEND OTP
const sendOtp = () => {
  if (!phone) return toast.error("Enter phone number");

  const fakeOtp = Math.floor(1000 + Math.random() * 9000);
  setGeneratedOtp(fakeOtp);

  console.log("OTP:", fakeOtp);

  toast.success("OTP sent successfully");
  setStep(2);

  setTimer(20); // 👈 timer start
};

  useEffect(() => {
  if (timer <= 0) return;

  const interval = setInterval(() => {
    setTimer((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(interval);
}, [timer]);



  // VERIFY OTP
  const verifyOtp = async () => {
    if (otp != generatedOtp) {
      toast.error("Invalid OTP");
      return;
    }


    try {
      const res = await fetch(`http://localhost:5000/users?phone=${phone}`);
      const data = await res.json();

      if (data.length === 0) {
  // ✅ NEW USER → REGISTER PAGE KHOL
  toast.success("New user, please register");
  openRegisterWithPhone(phone);
} else {
  // ✅ EXISTING USER → LOGIN
  localStorage.setItem("user", JSON.stringify(data[0]));
  toast.success(`Welcome back, ${data[0].name}`);
  onLoginSuccess(data[0]);
}
    } catch {
      toast.error("Server error");
    }
  };

  // REGISTER NEW USER
  const registerUser = async () => {
    if (!name) return toast.error("Enter name");

    const newUser = { name, phone };

    await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    localStorage.setItem("user", JSON.stringify(newUser));
    toast.success("Account created 🎉");
    onLoginSuccess(newUser);
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-full border rounded-2xl overflow-hidden">

      {/* LEFT IMAGE */}
      <div className="hidden md:block md:w-1/2">
        <img src={loginimage} className="w-full h-full object-cover" />
      </div>

      {/* RIGHT */}
    <div className="w-full md:w-1/2 bg-[#f6f6f6] dark:bg-[#111] flex items-center justify-center">

  <div className="w-full max-w-[420px] px-6 py-8">

    {/* LOGO */}
    <div className="flex flex-col leading-tight gap-1 mb-8">
      <span className="text-3xl font-bold text-[#9c6e4f] dark:text-white">
        Homie
      </span>
      <span className="text-xs text-[#9c6e4f] dark:text-gray-400 tracking-wide">
        Furniture Rentals
      </span>
    </div>

    {/* FEATURES */}
    <div className="grid grid-cols-3 gap-4 mb-8 text-xs">
      <div className="bg-white dark:bg-[#1a1a1a] rounded-xl py-3 flex flex-col items-center shadow-sm">
        <ShieldCheck size={18} color={theme}/>
        <span className="mt-1">Offers</span>
      </div>
      <div className="bg-white dark:bg-[#1a1a1a] rounded-xl py-3 flex flex-col items-center shadow-sm">
        <Truck size={18} color={theme}/>
        <span className="mt-1">Delivery</span>
      </div>
      <div className="bg-white dark:bg-[#1a1a1a] rounded-xl py-3 flex flex-col items-center shadow-sm">
        <Sparkles size={18} color={theme}/>
        <span className="mt-1">Premium</span>
      </div>
    </div>

    {/* HEADING */}
   {step === 1 && (
  <h2 className="text-[26px] font-bold leading-snug mb-8">
    <span style={{color:theme}}>Enter your number to</span><br/>
    Signup or Login
  </h2>
)}

    {/* STEP 1 */}
    {step === 1 && (
    <div className="relative">

  <input
    type="tel"
    placeholder="Enter your phone number"
    onChange={(e) => setPhone(e.target.value)}
    
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        sendOtp(); //   function called 
      }
    }}

    className="w-full pl-5 pr-16 py-4 rounded-full border border-gray-600 text-lg focus:outline-none focus:ring-2"
    style={{ "--tw-ring-color": theme }}
  />

  <button
    onClick={sendOtp}
    className="absolute right-1 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white text-lg"
    style={{ backgroundColor: theme }}
  >
    →
  </button>

</div>
    )}

    {/* STEP 2 */}
    {step === 2 && (
      <div className="space-y-7">

        {/* HEADING */}
        <div>
          <h2 className="text-xl font-bold">
            <span style={{ color: theme }}>Enter OTP sent</span>
          </h2>
          <p className="text-m mt-1 text-gray-600">
            to <span className="font-semibold text-black dark:text-white">+91 {phone}</span>{" "}
            <span
              className="underline cursor-pointer ml-1"
              style={{ color: theme }}
              onClick={() => setStep(1)}
            >
              Change Number
            </span>
          </p>
        </div>

        {/* OTP BOXES */}
        <div className="flex justify-between gap-3">
          {[0,1,2,3].map((_, index) => (
            <input
              key={index}
              autoFocus={index === 0}
              type="text"
              maxLength={1}
              value={otp[index] || ""}
              onChange={(e) => {
                const newOtp = otp.split("");
                newOtp[index] = e.target.value;
                setOtp(newOtp.join(""));

                if (e.target.nextSibling && e.target.value) {
                  e.target.nextSibling.focus();
                }
              }}
              className="w-[60px] h-[60px] text-center text-xl rounded-full border border-gray-600 focus:outline-none focus:ring-2"
              style={{ "--tw-ring-color": theme }}
            />
          ))}
        </div>

{/* BUTTONS */}
<div className="flex gap-3">
<button
  type="button"
  onClick={sendOtp}
  disabled={timer > 0}
  className={`flex-1 py-3 rounded-full border text-sm flex items-center justify-center gap-2 transition-all
    ${
      timer > 0
        ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
        : "bg-white text-black hover:bg-gray-50 border-gray-300"
    }`}
>
  ↻
   {timer > 0 ? ` Resend in ${timer}s` : "Resend OTP"}
</button>

          <button
            type="submit"
            onClick={verifyOtp}
            className="flex-1 text-white py-3 rounded-full text-sm"
            style={{ backgroundColor: "#bf6f32" }}
          >
            Continue →
          </button>

        </div>
      </div>
    )}

  </div>
</div>
    </div>
  );
};

export default Login;