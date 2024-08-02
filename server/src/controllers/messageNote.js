const message = require("../models/noteMessage");

const createNotesmessage = async (req, res) => {
  const { heading, text } = req.body;

  if (!heading || !text) {
    return res.status(400).send({
      message: "All fields are requred",
      status: 0,
    });
  }
  try {
    const newMessageNote = new message({
      heading,
      text,
    });
    await newMessageNote.save();
    res.send({
      message: "note message created",
      status: 1,
    });
  } catch (error) {
    res.status(400).res.send({
      message: "Errors",
      status: 0,
    });
    console.log("error from set note message", error);
  }
};
const getAllMessage = async (req,res) => {
  const { heading } = req.params;
  try {
    const notemessages = await message.find({ heading });
    res.send({
      notemessages,
      message: " Success",
      status: 1,
    });
  } catch (error) {
    res.status(400).send({
      message: "Errors",
      status: 0,
    });
    console.log("error from get messages:)", error);
  }
};
module.exports = { createNotesmessage, getAllMessage };
