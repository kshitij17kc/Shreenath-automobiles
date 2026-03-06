import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message);
        return;
      }

      setMessage("Signup successful! Please login.");
      setForm({ name: "", email: "", phone: "", password: "" });
    } catch (error) {
      setMessage("Server error");
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-black text-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black"></div>

      {/* Signup Card */}
      <div className="relative z-10 w-[90%] max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl animate-fadeIn">

        <h2 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-300 mb-6">
          Join <span className="text-red-500 font-semibold">Shreenath Automobiles</span>
        </p>

        <form onSubmit={handleSignup} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 focus:outline-none focus:border-red-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 focus:outline-none focus:border-red-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 focus:outline-none focus:border-red-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 focus:outline-none focus:border-red-500"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-red-500 hover:bg-red-600 transition font-semibold shadow-lg"
          >
            Sign Up
          </button>
        </form>

        {message && (
          <p className="text-center mt-4 text-sm text-green-400">
            {message}
          </p>
        )}

        <p className="text-center mt-6 text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-red-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
