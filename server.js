const express = require("express");
// add mongoose
const mongoose = require("mongoose");

// import model
const { Car } = require("./models/carModel");
const server = express();

const port = 5000;

// CODE FETCH CALLS HERE - GET / PUT / PATCH / DELETE *** CONTROLLER PART OF APP

//get car by ID
server.get("/cars/id:id", async (req, res) => {
  const results = await Car.findById(req.params.id);
  res.json(results);
});

// get car by query single or multiple conditions
// all Cars send no query params
server.get("/cars/find", async (req, res) => {
  // init empty query obj
  let query = {};
  // build query from any params sent in req
  if (req.query.make) query.make = req.query.make;
  if (req.query.model) query.model = req.query.model;
  if (req.query.registration) query.registration = req.query.registration;
  if (req.query.color) query.color = req.query.color;
  if (req.query.owner) query.owner = req.query.owner;
  if (req.query.address) query.address = req.query.address;

  console.log(`Query ${JSON.stringify(query)}`);
  // send query to DB and await result
  const results = await Car.find(query);
  res.json(results);
});

// Add a new Car to DB
server.post("/cars:newCar", async (req, res) => {
  // get car data from request
  const newCar = new Car(JSON.parse(req.params.newCar));
  console.log(newCar);
  // make request to DB
  const result = await newCar.save();
  res.json(result);
});

// Delete specified car (by id (DB generated) '_id' also used as unique key in React view)
server.delete("/cars/:id", async (req, res) => {
  const id = req.params.id;
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
