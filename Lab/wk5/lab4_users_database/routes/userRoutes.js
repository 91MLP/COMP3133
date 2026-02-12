const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    res.status(201).json({
      message: "User created successfully",
      data: user
    });
  } catch (error) {
    res.status(400).json({
      message: "Validation error",
      error: error.message
    });
  }
});

module.exports = router;
