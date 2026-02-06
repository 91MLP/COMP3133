const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect(
   "mongodb+srv://pyylppppx382_db_user:Pengy8617.@cluster0.fk45z0e.mongodb.net/restaurants?appName=Cluster0"
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const restaurantRoutes = require("./routes/restaurants");
app.use("/restaurants", restaurantRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
