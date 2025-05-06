const { getLength, getNewObjID } = require("../data/dataCont");

const formUser = ({ login, password }) => {
//   const user = {
//     id: getNewObjID('users'),
//     login: login,
//     password: password,
//     constactIDs: [],
//     chatIDs: [],
//   };

  return {
    id: (getNewObjID('users') || 1),
    login: login,
    password: password,
    constactIDs: [],
    chatIDs: [],
  };
};


module.exports = {
    formUser,
  };