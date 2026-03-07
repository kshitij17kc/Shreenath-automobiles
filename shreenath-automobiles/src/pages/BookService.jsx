import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BookService() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    brand: "",
    model: "",
    registrationNumber: "",
    serviceType: "",
    pickupDate: "",
    pickupTime: "",
    pickupAddress: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Auto-fill service
  useEffect(() => {
    if (location.state?.service) {
      setFormData((prev) => ({
        ...prev,
        serviceType: location.state.service,
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(
       "https://shreenath-backend.onrender.com/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Something went wrong");
        setLoading(false);
        return;
      }

      setMessage("✅ Booking saved successfully!");
      setFormData({
        customerName: "",
        phone: "",
        brand: "",
        model: "",
        registrationNumber: "",
        serviceType: "",
        pickupDate: "",
        pickupTime: "",
        pickupAddress: "",
      });
    } catch (error) {
      setMessage("❌ Server error");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-black text-white pt-32 px-6 pb-20">
      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
        <h2 className="text-4xl font-bold text-center mb-10">
          Book <span className="text-red-500">Car Service</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="customerName"
            placeholder="Customer Name"
            value={formData.customerName}
            onChange={handleChange}
            required
            className="w-full p-4 rounded bg-black border border-gray-700"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-4 rounded bg-black border border-gray-700"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              name="brand"
              placeholder="Car Brand"
              value={formData.brand}
              onChange={handleChange}
              required
              className="p-4 rounded bg-black border border-gray-700"
            />
            <input
              name="model"
              placeholder="Car Model"
              value={formData.model}
              onChange={handleChange}
              required
              className="p-4 rounded bg-black border border-gray-700"
            />
          </div>

          <input
            name="registrationNumber"
            placeholder="Car Registration Number"
            value={formData.registrationNumber}
            onChange={handleChange}
            required
            className="w-full p-4 rounded bg-black border border-gray-700"
          />

          <select
  name="serviceType"
  value={formData.serviceType}
  onChange={handleChange}
  required
  className="w-full p-4 rounded bg-black border border-gray-700"
>
  <option value="">Select Service Type</option>
  <option value="General Service">General Service</option>
  <option value="Oil Change">Oil Change</option>
  <option value="Mechanical Repair">Mechanical Repair</option>
</select>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              required
              className="p-4 rounded bg-black border border-gray-700"
            />
            <input
              type="time"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
              required
              className="p-4 rounded bg-black border border-gray-700"
            />
          </div>

          <textarea
            name="pickupAddress"
            placeholder="Pickup Address"
            rows="3"
            value={formData.pickupAddress}
            onChange={handleChange}
            required
            className="w-full p-4 rounded bg-black border border-gray-700"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-500 py-4 rounded-xl font-semibold hover:bg-red-600 transition"
          >
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </form>

        {message && (
          <p className="mt-6 text-center font-semibold text-green-400">
            {message}
          </p>
        )}
      </div>
    </section>
  );
}