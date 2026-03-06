const Vehicle = require("../models/Vehicle");

// ➕ Add a vehicle for a user
const addVehicle = async (req, res) => {
  try {
    const { userId, brand, model, registrationNumber } = req.body;

    if (!userId || !brand || !model || !registrationNumber) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const exists = await Vehicle.findOne({ registrationNumber });
    if (exists) {
      return res.status(400).json({ message: "Vehicle already exists" });
    }

    const vehicle = await Vehicle.create({
      user: userId,
      brand,
      model,
      registrationNumber,
    });

    res.status(201).json({
      message: "Vehicle added successfully",
      vehicle,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📄 Get vehicles of a user
const getUserVehicles = async (req, res) => {
  try {
    const { userId } = req.params;

    const vehicles = await Vehicle.find({ user: userId }).populate(
      "user",
      "name email phone"
    );

    res.status(200).json({
      count: vehicles.length,
      vehicles,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addVehicle, getUserVehicles };
