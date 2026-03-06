export default function Gallery() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Our Workshop
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <img src="/images/logo.png" alt="Workshop logo" className="rounded-xl" />
          <img src="/images/hero-car.png" alt="Car service" className="rounded-xl" />
          <img src="/images/service-1.jpg" alt="Vehicle repair service" className="rounded-xl" />
          <img src="/images/service-2.jpg" alt="Automobiles maintenance" className="rounded-xl" />
        </div>
      </div>
    </section>
  );
}

