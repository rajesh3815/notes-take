const express = require("express");
const {
  createNotesHeader,
  getAllheading,
} = require("../controllers/notes.controllers");

const headingRouter = express.Router();

headingRouter.post("/createHeading", createNotesHeader);
headingRouter.get("/getAllheader", getAllheading);

module.exports = headingRouter;
