import pkg from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";
const __dirname = path.resolve();

const app = pkg();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


const io = new Server(3000);

io.on("connection", (socket) => {
  // send a message to the client
  socket.emit("hello from server", 1, "2", { 3: Buffer.from([4]) });

  // receive a message from the client
  socket.on("hello from client", (...args) => {
    // ...
  });
});
