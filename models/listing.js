const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://media.istockphoto.com/id/1126841725/photo/spring-meadow.webp?b=1&s=170667a&w=0&k=20&c=T5OOBJu--j-BBnNFCcQNWY2cvxQHysiYvsbE6OHTOiw=",
    set: (v) =>
      v === ""
        ? "https://media.istockphoto.com/id/1126841725/photo/spring-meadow.webp?b=1&s=170667a&w=0&k=20&c=T5OOBJu--j-BBnNFCcQNWY2cvxQHysiYvsbE6OHTOiw="
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
