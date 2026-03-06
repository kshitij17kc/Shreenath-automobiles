import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-300 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Shreenath Automobiles"
            className="h-9"
          />
          <span className="text-black dark:text-white font-bold text-lg">
            Shreenath <span className="text-red-500">Automobiles</span>
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-gray-800 dark:text-gray-300">
          <Link to="/" className="hover:text-red-500 transition">Home</Link>
          <Link to="/services" className="hover:text-red-500 transition">Services</Link>
          <Link to="/gallery" className="hover:text-red-500 transition">Gallery</Link>
          <Link to="/book-service" className="hover:text-red-500 transition">Book Service</Link>
        </div>

        {/* DESKTOP BUTTONS */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="border border-gray-600 px-3 py-2 rounded text-black dark:text-white hover:border-red-500 transition"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

          {!isLoggedIn ? (
            <>
              <Link to="/login">
                <button className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600 transition">
                  Login
                </button>
              </Link>

              <Link to="/signup">
                <button className="border border-red-500 px-4 py-2 rounded text-red-500 hover:bg-red-500 hover:text-white transition">
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/book-service">
                <button className="bg-green-600 px-4 py-2 rounded text-white hover:bg-green-700 transition">
                  Dashboard
                </button>
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-black dark:text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 animate-slideDown">
          <div className="px-6 py-4 flex flex-col gap-4 text-gray-300">

            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
            <Link to="/book-service" onClick={() => setOpen(false)}>Book Service</Link>

            <button
              onClick={() => {
                setDarkMode(!darkMode);
                setOpen(false);
              }}
              className="border border-gray-600 py-2 rounded text-white"
            >
              {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>

            {!isLoggedIn ? (
              <>
                <Link to="/login" onClick={() => setOpen(false)}>
                  <button className="bg-red-500 py-2 rounded text-white">
                    Login
                  </button>
                </Link>

                <Link to="/signup" onClick={() => setOpen(false)}>
                  <button className="border border-red-500 py-2 rounded text-red-500 hover:bg-red-500 hover:text-white transition">
                    Sign Up
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/book-service" onClick={() => setOpen(false)}>
                  <button className="bg-green-600 py-2 rounded text-white">
                    Dashboard
                  </button>
                </Link>

                <button
                  onClick={handleLogout}
                  className="bg-red-600 py-2 rounded text-white"
                >
                  Logout
                </button>
              </>
            )}

          </div>
        </div>
      )}
    </nav>
  );
}
