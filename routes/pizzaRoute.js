const express = require("express");
const router = express.Router();
const pizzaModel = require("../models/pizzaModel");

//GET All Pizza @GET Request

router.get("/getAllPizzas", async (req, res) => {
  try {
    const pizzas = await pizzaModel.find({});
    res.send(pizzas);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports= router;