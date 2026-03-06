const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    customerName: String,
    phone: String,
    brand: String,
    model: String,
    registrationNumber: String,
    serviceType: String,
    pickupDate: String,
    pickupTime: String,
    pickupAddress: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
