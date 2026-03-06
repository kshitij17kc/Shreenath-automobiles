const steps = [
  {
    step: "01",
    title: "Book Service",
    desc: "Customer books a service online or visits the workshop."
  },
  {
    step: "02",
    title: "Vehicle Inspection",
    desc: "Our mechanics inspect the vehicle and identify issues."
  },
  {
    step: "03",
    title: "Repair & Service",
    desc: "Required repairs and servicing are carried out using genuine parts."
  },
  {
    step: "04",
    title: "Delivery",
    desc: "Vehicle is tested and delivered safely to the customer."
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-black border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-white text-center mb-4">
          How It Works
        </h2>

        <p className="text-gray-400 text-center mb-12">
          Simple and transparent service process
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <div
              key={i}
              className="bg-gray-950 border border-gray-800 p-6 rounded-xl
                         hover:border-red-500 hover:scale-105
                         transition duration-300 text-center"
            >
              <div className="text-red-500 text-3xl font-bold mb-4">
                {item.step}
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
