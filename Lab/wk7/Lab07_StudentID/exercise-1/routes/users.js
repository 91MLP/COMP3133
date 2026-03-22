const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.send("respond with a resource");
});

router.post("/", (req, res) => {
  console.log("POST /users payload:", req.body);
  res.send("POST received!");
});

module.exports = router;
