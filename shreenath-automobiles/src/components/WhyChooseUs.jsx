const reasons = [
  {
    title: "Experienced Mechanics",
    desc: "Our skilled mechanics ensure quality service with attention to every detail."
  },
  {
    title: "Maruti Suzuki Specialists",
    desc: "Special focus on Maruti Suzuki cars with proper tools and expertise."
  },
  {
    title: "Genuine Spare Parts",
    desc: "We use only genuine and reliable spare parts for long-lasting performance."
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden charges. Clear pricing explained before starting the service."
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Why Choose Shreenath Automobiles
        </h2>

        <p className="text-gray-400 text-center mb-12">
          Trusted by customers for honest service and reliable car care
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, i) => (
            <div
  key={i}
  className="bg-black border border-gray-800 p-6 rounded-xl
             hover:border-red-500 hover:scale-105
             transition duration-300"
>

              <div className="text-red-500 text-3xl mb-4">
                ★
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
