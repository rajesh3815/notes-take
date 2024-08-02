const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now(),
  },
});

const message = new mongoose.model("message", messageSchema);

module.exports = message;
