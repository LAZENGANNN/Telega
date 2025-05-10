const express = require("express");
const { getData, getObjByID } = require("../data/dataCont");
const { getChatsList } = require("../controllers/chatsController");
const chatsRouter = express.Router();


chatsRouter.get('/', (req,res)=>{
  res.redirect("/angular-app")
})


chatsRouter.get("/getChatsList", (req, res) => {
  getChatsList(req, res)
  // const chatIDs = getData("users").find(
  //   (el) => el.ID === req.session.currentUserID
  // ).chatIDs;

  // const data = [];

  // const chats = getData("chats");

  // console.log(chatIDs, chats);

  // chats.forEach((el) => {
  //   if (chatIDs.includes(el.ID)) {
  //     let chatWith = "";

  //     console.log(el.usersIDs[1]);

  //     if (el.usersIDs[0] === req.session.currentUserID) {
  //       chatWith = getObjByID("users", el.usersIDs[0]).login;
  //     } else {
  //       chatWith = getObjByID("users", el.usersIDs[1]).login;
  //     }

  //     const chat = {
  //       chatID: el.ID,
  //       chatWith: chatWith,
  //       messages: el.messages,
  //     };

  //     data.push(chat);
  //   }
  // }); 

  // res.send(JSON.stringify(data));
});

module.exports = {
  chatsRouter,
};
