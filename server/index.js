require("dotenv").config();
require("./db")()
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const router = require("./router");
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", process.env.CLIENT],
    method: ["GET", "POST"],
  },
});

app.use(cors({ origin: ["http://localhost:3000", process.env.CLIENT] }));
app.use(express.json())
app.use("/",router)
app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});
  

server.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
