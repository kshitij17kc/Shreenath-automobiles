export default function Location() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Our Location
          </h2>

          <p className="text-gray-400 mb-6">
            Visit our workshop for reliable and trusted automobile services.
            We are conveniently located in Ranchi.
          </p>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
            <p className="text-white font-semibold">
              📍 Shreenath Automobiles
            </p>

            <p className="text-gray-400 mt-2 text-sm">
              Rani Sati Mandir Lane <br />
              Opposite Minakshi Cinema <br />
              Ratu Road, Ranchi – 834005
            </p>

            <p className="mt-4 text-red-500 text-sm">
              Open: Monday – Saturday | 9:00 AM – 8:00 PM
            </p>
          </div>
        </div>

        {/* DUMMY MAP */}
        <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
          <img
            src="/images/location-map.jpg"
            alt="Workshop Location"
            className="w-full h-full object-cover opacity-90"
          />
        </div>

      </div>
    </section>
  );
}
