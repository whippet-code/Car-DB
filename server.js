const express = require("express");
// add mongoose
const mongoose = require("mongoose");
// cors middlewear
const cors = require("cors");

// import model
const { Car } = require("./models/carModel");
const server = express();

// setup cors use for local dev requests development
server.use(cors());
// use .json() middlewear
server.use(express.json());

const port = 5000;

// CODE FETCH CALLS HERE - GET / PUT / PATCH / DELETE *** CONTROLLER PART OF APP

//get car by ID
server.get("/cars/id:id", async (req, res) => {
  const results = await Car.findById(req.params.id);
  res.json(results);
});

// get car by query single or multiple conditions
// all Cars send no query params
server.get("/cars/find/", async (req, res) => {
  // init empty query obj
  let query = {};
  // build query from any params sent in req
  if (req.query.type) query.type = req.query.type;
  if (req.query.make) query.make = req.query.make;
  if (req.query.model) query.model = req.query.model;
  if (req.query.registration) query.registration = req.query.registration;
  if (req.query.color) query.color = req.query.color;
  if (req.query.owner) query.owner = req.query.owner;
  if (req.query.address) query.address = req.query.address;

  console.log(`Search Query ${JSON.stringify(query)}`);
  // send query to DB and await result
  const results = await Car.find(query);
  res.json(results);
});

// Add a new Car to DB
server.post("/cars/", async (req, res) => {
  // get car data from request
  console.log("Post req started server.js");
  let data = req.body;
  const newCar = new Car(data);
  // make request to save to DB
  const result = await newCar.save();
  console.log(`Post req complete with - ${result}`);
});

// update a car
server.patch("/cars/:registration", async (req, res) => {
  console.log("Patch request to update car doc");
  // get car data from req.body
  const { registration } = req.params;
  await Car.updateOne({ registration }, req.body);
  const updatedCar = await Car.find({ registration });
  return res.status(200).json(updatedCar);
});

// Delete specified car (by id (DB generated) '_id' also used as unique key in React view)
server.delete("/cars/", async (req, res) => {
  const id = req.body.id;
  console.log(`Delete request for document id-${id}`);
  const result = await Car.findByIdAndDelete({ _id: id });
  res.send(result);
});

// use async to allow time for mongoose connect to DB before starting server.
//If fail to complete, exit server and alert user.
const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mark:Password@hyperiondevtask.qkcy9dp.mongodb.net/?retryWrites=true&w=majority"
    );
    server.listen(port, console.log(`Listening started on port ${port}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// call start fun to begin server and link to DB via mongoose
start();
