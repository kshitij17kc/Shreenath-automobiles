const stats = [
  { number: "1200+", label: "Cars Serviced" },
  { number: "20+", label: "Years of Experience" },
  { number: "1000+", label: "Happy Customers" },
  { number: "10+", label: "Expert Mechanics" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-black border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((item, i) => (
            <div
  key={i}
  className="bg-gray-950 border border-gray-800 rounded-xl p-8
             hover:border-red-500 hover:scale-105
             transition duration-300"
>

              <p className="text-4xl font-bold text-red-500">
                {item.number}
              </p>
              <p className="mt-2 text-gray-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
