const note = require("../models/note");

const createNotesHeader = async (req, res) => {
  const { heading, color } = req.body;

  if (!heading || !color) {
    return res.status(400).send({
      message: "All fields are requred",
      status: 0,
    });
  }
  try {
    
    const newNote = new note({
      heading,
      color,
    });
    await newNote.save();
    res.send({
      message: "note heading created",
      status: 1,
    });
  } catch (error) {
    res.status(400).res.send({
      message: "Errors",
      status: 0,
    });
    console.log("error from set note heading)", error);
  }
};
const getAllheading = async (req,res) => {
  try {
    const noteHeadings = await note.find({});
    res.send({
      noteHeadings,
      message: " Success",
      status: 1,
    });
  } catch (error) {
    res.status(400).send({
      message: "Errors",
      status: 0,
    });
    console.log("error from get all headings:)", error);
  }
};
module.exports = { createNotesHeader, getAllheading };
