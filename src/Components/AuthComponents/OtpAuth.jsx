import { useState } from "react";
import toast from "react-hot-toast";

const OtpAuth = ({ onLoginSuccess }) => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [name, setName] = useState("");

  // SEND OTP
  const sendOtp = () => {
    if (!phone) return toast.error("Enter phone number");

    const fakeOtp = Math.floor(1000 + Math.random() * 9000);
    setGeneratedOtp(fakeOtp);

    console.log("OTP:", fakeOtp); // 👈 console me milega

    toast.success("OTP sent");
    setStep(2);
  };

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
        setStep(3);
      } else {
        localStorage.setItem("user", JSON.stringify(data[0]));
        toast.success("Login success 🎉");
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

    try {
      await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      localStorage.setItem("user", JSON.stringify(newUser));
      toast.success("Account created successfully🚀");
      onLoginSuccess(newUser);
    } catch {
      toast.error("Error creating account");
    }
  };

  return (
    <div className="p-6">

      {step === 1 && (
        <>
          <h2 className="text-lg font-semibold mb-4">Login with OTP</h2>
          <input
            placeholder="Enter phone number"
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-3 rounded mb-3"
          />
          <button onClick={sendOtp} className="w-full bg-black text-white p-3 rounded">
            Send OTP
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="text-lg font-semibold mb-4">Enter OTP</h2>
          <input
            placeholder="Enter OTP"
            onChange={(e) => setOtp(e.target.value)}
            className="w-full border p-3 rounded mb-3"
          />
          <button onClick={verifyOtp} className="w-full bg-green-700 text-white p-3 rounded">
            Verify OTP
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <h2 className="text-lg font-semibold mb-4">Complete Profile</h2>
          <input
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-3 rounded mb-3"
          />
          <button onClick={registerUser} className="w-full bg-[#bf6f32] text-white p-3 rounded">
            Continue
          </button>
        </>
      )}

    </div>
  );
};

export default OtpAuth;