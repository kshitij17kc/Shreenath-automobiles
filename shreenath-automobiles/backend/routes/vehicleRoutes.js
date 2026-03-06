const express = require("express");
const router = express.Router();

const {
  addVehicle,
  getUserVehicles,
} = require("../controllers/vehicleController");

// ➕ Add vehicle
router.post("/add", addVehicle);

// 📄 Get vehicles of a user
router.get("/user/:userId", getUserVehicles);

module.exports = router;
