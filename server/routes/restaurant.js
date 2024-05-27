import express from "express";
import Restaurant from "../models/restaurant.js";

const router = express.Router();

//Métodos HTTP GET, POST, PUT E DELETE, nem todos são usados.
router.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json({ restaurants });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({ _id: req.params.id });
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurante não encontrado" });
    }
    res.json({ restaurant });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newRestaurant = new Restaurant(req.body);
    await newRestaurant.save();
    res.status(201).json({ restaurant: newRestaurant });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedRestaurant = await Restaurant.findOneAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedRestaurant) {
      return res.status(404).json({ message: "Restaurante não encontrado" });
    }
    res.json({ restaurant: updatedRestaurant });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedRestaurant = await Restaurant.findOneAndRemove({ _id: req.params.id });
    if (!deletedRestaurant) {
      return res.status(404).json({ message: "Restaurante não encontrado" });
    }
    res.json({ message: "Restaurante deletado com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;