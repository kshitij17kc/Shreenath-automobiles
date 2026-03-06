const testimonials = [
  {
    name: "Rahul Sharma",
    review:
      "Excellent service and honest pricing. My Maruti Swift runs smoothly after service.",
    rating: 5,
  },
  {
    name: "Ankit Verma",
    review:
      "Very professional staff. They explained the problem clearly before starting work.",
    rating: 4,
  },
  {
    name: "Pooja Singh",
    review:
      "Quick service and genuine spare parts. Highly recommended workshop in Ranchi.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-white text-center mb-4">
          What Our Customers Say
        </h2>

        <p className="text-gray-400 text-center mb-12">
          Real feedback from satisfied customers
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-black border border-gray-800 p-6 rounded-xl
                         hover:border-red-500 hover:scale-105
                         transition duration-300"
            >
              {/* Stars */}
              <div className="text-red-500 mb-3">
                {"★".repeat(item.rating)}
                {"☆".repeat(5 - item.rating)}
              </div>

              <p className="text-gray-300 text-sm mb-4">
                “{item.review}”
              </p>

              <p className="text-white font-semibold">
                — {item.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
