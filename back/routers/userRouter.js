const express = require("express");
const { addObjectTOArr, getData } = require("../data/dataCont");
const {
  formUser,
  isLoginOrginal,
  auth,
  checkAuth,
} = require("../controllers/userController");
const usersRouter = express.Router();

usersRouter.post("/create", (req, res) => {
  if (isLoginOrginal(req.body.login)) {
    addObjectTOArr(`users`, formUser(req.body));

    console.log(req.session);

    res.send(`добро пожаловать, ${req.body.login} --- ${req.body.password}`);
  } else {
    res.send("логин занят, подумайте ещё");
  }
});

usersRouter.post("/auth", (req, res) => {
  auth(req, res);
});

usersRouter.get("/checkAuth", (req, res) => {
  const isAuth = checkAuth(req, res);

  res.send(JSON.stringify({ isAuth: isAuth }));
});

module.exports = {
  usersRouter,
};
