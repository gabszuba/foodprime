import express from "express";
import cors from "cors";
import restaurants from "./routes/restaurant.js";
import dotenv from "dotenv";
import scraper from "./bot.js";
import mongoose from "mongoose"

//porta definida no .env ou 3000
const PORT = process.env.PORT || 3000;

//instancia o express
const app = express();

//carrega configurações do ambiente virtual
dotenv.config(); 

app.use(cors());
app.use(express.json());
//endpoint restaurantes
app.use("/restaurantes", restaurants);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const dbURL = process.env.USER && process.env.USER_KEY && process.env.DB_URL 
  ? `mongodb://${process.env.USER}:${process.env.USER_KEY}@${process.env.DB_URL}` 
  : process.env.DB_URL 

try {
  await mongoose.connect(dbURL);
  await scraper();
} catch (error) {
  throw(error);
}

