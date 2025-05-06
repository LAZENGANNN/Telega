const express = require("express");
const { addObjectTOArr, getData } = require("../data/dataCont");
const { formUser } = require("../utils/userController");
const usersRouter = express.Router();

usersRouter.use("/create", (req, res) => {
  //   console.log(`sdf`, getData(`users`));

  user = formUser(req.body);

  addObjectTOArr(`users`, formUser(req.body));

  res.send(`${req.body.login} --- ${req.body.password}`);
});

module.exports = {
  usersRouter,
};
