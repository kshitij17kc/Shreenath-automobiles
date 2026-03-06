const services = [
  {
    title: "General Car Service",
    desc: "Complete inspection, oil check, filter cleaning and safety check."
  },
  {
    title: "Oil & Filter Change",
    desc: "Engine oil replacement with genuine, high-quality oils."
  },
  {
    title: "Brake Inspection & Repair",
    desc: "Brake pad, disc and brake fluid inspection for safety."
  },
  {
    title: "Engine Diagnostics",
    desc: "Computerized engine scanning and problem detection."
  },
  {
    title: "AC Service & Repair",
    desc: "Cooling check, gas refill and AC performance optimization."
  },
  {
    title: "Battery Check & Replacement",
    desc: "Battery health check and replacement if required."
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Our Services
        </h2>

        <p className="text-gray-400 text-center mb-12">
          Reliable, affordable and professional car services for all major brands
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
  key={i}
  className="bg-black border border-gray-800 p-6 rounded-xl
             hover:border-red-500 hover:scale-105
             transition duration-300"
>

              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-400 text-sm">
                {service.desc}
              </p>

              <p className="mt-4 text-red-500 text-sm font-medium">
                ✔ Available at Shreenath Automobiles
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
