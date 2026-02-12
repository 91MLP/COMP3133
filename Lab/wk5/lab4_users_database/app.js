const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://pyylppppx382_db_user:Pengy8617.@cluster0.mcwppa3.mongodb.net/?appName=Cluster0"
).then(() => console.log("MongoDB connected"))
 .catch(err => console.log(err));

app.use("/", userRoutes);

app.listen(8081, () => {
  console.log("Server running on http://localhost:8081");
});
