import { useState } from "react";

export default function AddVehicle() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [regNo, setRegNo] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("Please login first");
      return;
    }

    try {
      const res = await fetch("https://shreenath-automobiles.onrender.com/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          brand,
          model,
          registrationNumber: regNo,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message);
        return;
      }

      setMessage("Vehicle added successfully");
      setBrand("");
      setModel("");
      setRegNo("");
    } catch (error) {
      setMessage("Server error");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add Vehicle</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          placeholder="Brand (Maruti)"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />

        <input
          placeholder="Model (Swift)"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />

        <input
          placeholder="Registration Number"
          value={regNo}
          onChange={(e) => setRegNo(e.target.value)}
        />

        <button type="submit">Add Vehicle</button>
      </form>

      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}
