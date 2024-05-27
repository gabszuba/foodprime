import mongoose from "mongoose";

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: String,
  category: String,
  menu: [
    {
      name: String,
      description: String,
      price: Number,
    },
  ],
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;
