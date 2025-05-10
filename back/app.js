const express = require("express");
const session = require("express-session");

const path = require("path");
const http = require("http");

const bodyParser = require("body-parser");

const { Server } = require("socket.io");
const { mainRouter } = require("./routers/main");
const { console } = require("inspector");
const { usersRouter } = require("./routers/userRouter");
const { chatsRouter } = require("./routers/chatsRouter");

const app = express();

const server = http.createServer(app);
// const io = new Server(server, {});

const PORT = 7777;

const appPath = path.join(__dirname, "..", "front/dist/telega/browser");

app.use("/angular-app", express.static(appPath));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(express.json());

app.use(session({
   secret: "sessionSecret", 
   resave: true, 
   saveUninitialized: true }));

// app.post("/angular-app/user/create", (req, res) => {
//   res.send(`${req.body.login} --- ${req.body.password}`);
// });

app.use("/angular-app/user/", usersRouter);
app.use("/angular-app/chats/", chatsRouter);

// app.get("/angular-app/*", (req, res) => {
//   res.sendFile(path.join(appPath, "index.html"));
// });

// app.use("/", mainRouter)

app.get("/", (req, res) => {
  res.redirect("/angular-app");
});

server.listen(PORT, () => {
  console.log(`http://localhost:7777`);
});
