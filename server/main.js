"use strict";

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const http = require("http");
const socketIO = require("socket.io");
const RandExp = require("randexp");
const path = require("path");

const app = express();
app.use(cors());
app.use(helmet());
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.SERVER_PORT || 2000;
const API_PREFIX = "/api";
const INTERVAL = 5000;
const PLATE_REGEX = /[A-Z]{3}\d{1}[A-Z]{1}\d{2}/g;

const plateGenerator = new RandExp(PLATE_REGEX);

let latestPlate = "";

// API routes
app.get(`${API_PREFIX}/settings`, function (_req, res) {
  console.log("/settings");
  res.status(200).json({ port: PORT });
});

app.get(`${API_PREFIX}/latest`, function (_req, res) {
  console.log("/latest");
  res.status(200).json({ latestPlate });
});

// Log client connections
io.on("connection", function (socket) {
  console.log("client connected:", socket.client.conn.remoteAddress);
  socket.on("disconnect", function () {
    console.log("client disconnected:", socket.client.conn.remoteAddress);
  });
});

// Create websocket
server.listen(PORT, function () {
  console.log(`Server is active, listening on port ${PORT}`);
});

app.use(express.static(path.join(__dirname, "static")));

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "static/index.html"));
});

// Create generator function
const generate = () => {
  return plateGenerator.gen();
};

// Create interval and emit generated value
setInterval(() => {
  latestPlate = generate();
  io.emit("generate", latestPlate);
}, INTERVAL);
