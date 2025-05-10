const { getNewObjID, getData } = require("../data/dataCont");

const formUser = ({ login, password }) => {
  return {
    ID: `U${getNewObjID("users") || 1}`,
    login: login,
    password: password,
    constactIDs: [],
    chatIDs: [],
  };
};

const isLoginOrginal = (login) => {
  if (getData("users").find((el) => el.login === login)) {
    return false;
  } else return true;
};

const auth = (req, res) => {
  const data = getData("users");
  const currentUser = data.find((el) => el.login === req.body.login);

  if (!currentUser) {
    res.send("пользователь не найден");
    return;
  }

  if (!currentUser.password === req.body.password) {
    res.send("неверный пароль");
    return;
  }

  req.session.currentUserID = currentUser.ID;
  res.send("success");
  // res.send(`${req.session.currentUserID}`)
  // res.redirect("/angular-app/chats")
};

const checkAuth = (req, res) => {
  if (req.session.currentUserID) {
    return true;
  } else {
    return false;
  }
};

// const findUserByLogin = () => {};

// const findByID = (type, ID) => {
//   switch (type) {
//     case user:
//       const result = getData(`${fileName}`).find((el) => el.ID === ID);
//       break;

//     default:
//       break;
//   }

//   if (result) {
//     return result;
//   } else {
//     return "not found";
//   }
// };

module.exports = {
  formUser,
  isLoginOrginal,
  auth,
  checkAuth,
};
