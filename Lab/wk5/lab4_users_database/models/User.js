const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },

  username: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 100
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
  },

  address: {
    city: {
      type: String,
      required: true,
      match: [/^[A-Za-z\s]+$/, "City must contain only letters and spaces"]
    },
    zipcode: {
      type: String,
      required: true,
      match: [/^\d{5}-\d{4}$/, "Zipcode format must be 12345-1234"]
    }
  },

  phone: {
    type: String,
    required: true,
    match: [/^1-\d{3}-\d{3}-\d{4}$/, "Phone format must be 1-123-123-1234"]
  },

  website: {
    type: String,
    required: true,
    match: [/^https?:\/\/.+/, "Website must start with http or https"]
  }
});

module.exports = mongoose.model("User", userSchema);
