const express = require("express");
const {
  createNotesmessage,
  getAllMessage,
} = require("../controllers/messageNote");

const messageRouter = express.Router();

messageRouter.post("/createNote", createNotesmessage);
messageRouter.get("/getAllnote/:heading", getAllMessage);

module.exports = messageRouter;
