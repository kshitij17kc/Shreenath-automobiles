const Booking = require("../models/Booking");

const bookService = async (req, res) => {
  try {
    const {
      customerName,
      phone,
      brand,
      model,
      registrationNumber,
      serviceType,
      pickupDate,
      pickupTime,
      pickupAddress
    } = req.body;

    if (
      !customerName ||
      !phone ||
      !brand ||
      !model ||
      !registrationNumber ||
      !serviceType ||
      !pickupDate ||
      !pickupTime ||
      !pickupAddress
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const booking = await Booking.create({
      customerName,
      phone,
      brand,
      model,
      registrationNumber,
      serviceType,
      pickupDate,
      pickupTime,
      pickupAddress
    });

    res.status(201).json({
      message: "Booking created successfully",
      booking
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { bookService };
