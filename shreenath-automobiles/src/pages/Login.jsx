import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://shreenath-backend.onrender.com/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message);
        return;
      }

      localStorage.setItem("token", data.token);
      setMessage("Login successful");
    } catch (error) {
      setMessage("Server error");
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-black text-white">

      {/* 🌌 Gradient + ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black"></div>

      {/* 🚗 MOVING MARUTI CAR */}
      <img
        src="/images/maruti-car.png"
        alt="Maruti Car"
        className="absolute bottom-24 left-[-300px] w-[420px] opacity-40 blur-[1px] animate-carDrive"
      />

      {/* 🌫 Motion streaks */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="h-px w-full bg-white absolute top-1/3 animate-slide"></div>
        <div className="h-px w-full bg-white absolute top-2/3 animate-slide delay-200"></div>
      </div>

      {/* 🪟 Glassmorphism Login Card */}
      <div className="relative z-10 w-[90%] max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl animate-fadeIn">

        <h2 className="text-3xl font-bold text-center mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-300 mb-6">
          Login to <span className="text-red-500 font-semibold">Shreenath Automobiles</span>
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 focus:outline-none focus:border-red-500 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 focus:outline-none focus:border-red-500 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-red-500 hover:bg-red-600 transition font-semibold tracking-wide shadow-lg"
          >
            Login
          </button>
        </form>

        {message && (
          <p className="text-center mt-4 text-sm text-red-400">
            {message}
          </p>
        )}

        <p className="text-center mt-6 text-xs text-gray-400">
          “Here every customer is god”
        </p>
      </div>
    </div>
  );
}
