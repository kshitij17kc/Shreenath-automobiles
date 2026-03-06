import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: "General Service",
      desc: "Complete car inspection, tuning & maintenance",
      icon: "🚗",
      gradient: "from-blue-500/20 to-cyan-500/10",
    },
    {
      title: "Oil Change",
      desc: "Premium engine oil & filter replacement",
      icon: "🛢️",
      gradient: "from-orange-500/20 to-yellow-500/10",
    },
    {
      title: "Mechanical Repair",
      desc: "Expert diagnostics & mechanical fixes",
      icon: "🔧",
      gradient: "from-red-500/20 to-pink-500/10",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white pt-32 pb-24 px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Premium <span className="text-red-500">Car Services</span>
        </h1>
        <p className="text-gray-400 mt-6 text-lg">
          Trusted automobile care backed by experience, technology & passion.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <div
            key={i}
            onClick={() =>
              navigate("/book-service", {
                state: { service: service.title },
              })
            }
            className={`
              cursor-pointer relative overflow-hidden rounded-3xl
              bg-gradient-to-br ${service.gradient}
              backdrop-blur-xl border border-white/10
              p-10 group transition-all duration-500
              hover:scale-[1.05] hover:border-red-500/40
            `}
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-red-500/5 blur-2xl" />

            {/* Icon */}
            <div className="text-6xl mb-6 transform group-hover:scale-110 transition">
              {service.icon}
            </div>

            {/* Content */}
            <h3 className="text-2xl font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-gray-300 mb-8">
              {service.desc}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-2 text-red-400 font-semibold">
              Book Now →
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-24 text-center">
        <p className="text-gray-400 mb-6">
          Not sure what your car needs?
        </p>
        <button
          onClick={() => navigate("/book-service")}
          className="bg-red-500 px-10 py-4 rounded-full text-lg font-semibold hover:bg-red-600 transition"
        >
          Talk to Expert & Book Service
        </button>
      </div>
    </section>
  );
}
