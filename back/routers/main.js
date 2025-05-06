const express = require("express")
const mainRouter = express.Router();

const {editData} = require("../data/dataCont")


mainRouter.use("create",(req, res)=>{
    res.send(`${req.body.login} --- ${req.body.password}`);
})


module.exports = {
    mainRouter
}
    