const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderhub";

main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("Hi, i am root");
});

app.get("/Listing", async (req, res) => {
  let sampleListing = new Listing({
    title: "My new villa",
    description: "By the beach",
    price: 1200,
    location: "Calangute Goa",
    country: "India",
  });

  await sampleListing.save();
  console.log("sample was saved");
  res.send("successfull testing");
});

app.listen(3000, () => {
  console.log("Server is listening to port 3000");
});
