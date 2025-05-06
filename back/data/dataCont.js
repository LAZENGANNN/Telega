const path = require("path");
const fs = require("fs");

function getData(fileName) {
  try {
    const filePath = path.join(__dirname, `../data/${fileName}.json`);
    const data = JSON.parse(fs.readFileSync(filePath));
    return data;
  } catch (e) {
    console.error(e);
  }
}

function editData(fileName, newData) {
  try {
    const filePath = path.join(__dirname, `../data/${fileName}.json`);
    fs.writeFileSync(filePath, JSON.stringify(newData));
  } catch (e) {
    console.error(e);
  }
}

function addObjectTOArr(fileName, obj) {
  try {
    const filePath = path.join(__dirname, `../data/${fileName}.json`);
    let data = JSON.parse(fs.readFileSync(filePath));

    console.log(data, obj);

    data.push(obj);

    console.log(data, obj);

    fs.writeFileSync(filePath, JSON.stringify(data));
  } catch (e) {
    console.error(e);
  }
}

function clearFile(fileName) {
  try {
    const filePath = path.join(__dirname, `../data/${fileName}.json`);
    fs.writeFileSync(filePath, JSON.stringify([]));
  } catch (e) {
    console.error(e);
  }
}

function getLength(fileName) {
  try {
    const filePath = path.join(__dirname, `../data/${fileName}.json`);
    const data = JSON.parse(fs.readFileSync(filePath));
    return data.length;
  } catch (e) {
    console.error(e);
  }
}

function getNewObjID(fileName) {
  try {
    const filePath = path.join(__dirname, `../data/${fileName}.json`);
    const data = JSON.parse(fs.readFileSync(filePath));

    const id = (data.reverse()[0].id || 0);

    return id + 1;
  } catch (e) {
    console.error(e);
  }
}

//   const id = getData(users).length + 1

// const user = {
//   id: id,
//   login: login,
//   password: password,
//   chatsID: [],
//   contactsID: [],
// };

module.exports = {
  getData,
  editData,
  addObjectTOArr,
  clearFile,
  getLength,
  getNewObjID,
};
