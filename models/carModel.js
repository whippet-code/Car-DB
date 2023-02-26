const mongoose = require("mongoose");

// Create Schema for each car in
const CarSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: Number,
    required: true,
  },
  registration: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
  },
  owner: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
});

// Create model from schema
const Car = mongoose.model("Car", CarSchema);

// export model
module.exports = { Car };
