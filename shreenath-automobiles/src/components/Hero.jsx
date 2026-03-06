import { Link } from "react-router-dom";

export default function Hero() {
  return (
   <section className="pt-32 min-h-screen flex items-center bg-white dark:bg-black">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight">

            Reliable Car Service <br />
            <span className="text-red-500">You Can Trust</span>
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">

            Here every customer is god. <br />
            Trusted automobile care in Ranchi.
          </p>

          <div className="mt-6 flex gap-4">
            {/* ✅ FIXED BOOK SERVICE BUTTON */}
            <Link
              to="/book-service"
              className="bg-red-500 px-6 py-3 rounded text-white hover:bg-red-600 transition"
            >
              Book Service
            </Link>
<button
  onClick={() => {
    document
      .getElementById("ai-assistant")
      .scrollIntoView({ behavior: "smooth" });
  }}
  className="border border-gray-600 px-6 py-3 rounded text-gray-300 hover:border-red-500 hover:text-white transition"
>
  Talk to AI Assistant
</button>

          </div>
        </div>

        {/* Image */}
        <div>
          <img
            src="/images/workshop-1.png"
            alt="Workshop"
            className="rounded-xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}
