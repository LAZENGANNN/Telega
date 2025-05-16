const { getData, getObjByID } = require("../data/dataCont");

module.exports = {
  getChatsList(req, res) {
    const chatIDs = getData("users").find(
      (el) => el.ID === req.session.currentUserID
    ).chatIDs;

    const data = [];

    const chats = getData("chats");

    chats.forEach((el) => {
      if (chatIDs.includes(el.ID)) {
        let chatWith = "";

        if (el.usersIDs[0] === req.session.currentUserID) {
          chatWith = getObjByID("users", el.usersIDs[1]).login;
        } else {
          chatWith = getObjByID("users", el.usersIDs[0]).login;
        }

        const chat = {
          chatID: el.ID,
          chatWith: chatWith,
          messages: el.messages,
        };

        data.push(chat);
      }
    });

    res.send(JSON.stringify(data));
  },
  userEnteredChat(req, res){
    console.log(`user ${req.body.userName} Entered Chat!`)
    res.send(`user ${req.body.userName} Entered Chat!`)
  }
};
