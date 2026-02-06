const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");

router.get("/", async (req, res) => {
  const data = await Restaurant.find();
  res.json(data);
});


router.get("/cuisine/:type", async (req, res) => {
  const data = await Restaurant.find({ cuisine: req.params.type });
  res.json(data);
});

router.get("/", async (req, res) => {
  const sortOrder = req.query.sortBy === "DESC" ? -1 : 1;

  const data = await Restaurant.find(
    {},
    { _id: 1, cuisine: 1, name: 1, city: 1, restaurant_id: 1 }
  ).sort({ restaurant_id: sortOrder });

  res.json(data);
});

router.get("/Delicatessen", async (req, res) => {
  const data = await Restaurant.find(
    {
      cuisine: "Delicatessen",
      city: { $ne: "Brooklyn" }
    },
    {
      _id: 0,
      cuisine: 1,
      name: 1,
      city: 1
    }
  ).sort({ name: 1 });

  res.json(data);
});

module.exports = router
