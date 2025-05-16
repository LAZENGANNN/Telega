const express = require("express");
const { getData, getObjByID } = require("../data/dataCont");
const {
  getChatsList,
  userEnteredChat,
} = require("../controllers/chatsController");
const chatsRouter = express.Router();

chatsRouter.get("/", (req, res) => {
  res.redirect("/angular-app");
});

chatsRouter.get("/getChatsList", (req, res) => {
  getChatsList(req, res);
});

chatsRouter.post("/userEnteredChat", (req, res) => {
  userEnteredChat(req, res);
});

module.exports = {
  chatsRouter,
};
