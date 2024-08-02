const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      require: true,
    },
    color: {
      type: String,
      require: true,
    }
  },
  { timestamps: { createdAt: "", updatedAt: "" } }
);

const note = new mongoose.model("note", noteSchema);

module.exports = note;
