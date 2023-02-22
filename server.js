const express = require("express");
// add mongoose
const mongoose = require("mongoose");

// import model
const { Car } = require("./models/carModel");
const server = express();

const port = 5000;

// test fetch
server.get("/", async (req, res) => {
  res.send("All good here");
});

// test model get (use 'Car', as mongoose translates this to 'cars' to make the query)
// returns all cars
server.get("/cars", async (req, res) => {
  const allCars = await Car.find();
  res.send(allCars);
});

// CODE FETCH CALLS HERE - GET / PUT / PATCH / DELETE

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
