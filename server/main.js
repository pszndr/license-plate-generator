const yargs = require("yargs");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const http = require("http");
const socketIO = require("socket.io");
const RandExp = require("randexp");
const path = require("path");

const PlateFormats = require("./utils/PlateFormats");
const plateFormatsKeys = Object.keys(PlateFormats);

const { argv } = yargs
  .command("lpr-server", "Generates random license plates")
  .option("interval", {
    alias: "i",
    default: 5,
    description: "Time in seconds between each plate generation",
    type: "number"
  })
  .option("formats", {
    alias: "f",
    choices: plateFormatsKeys,
    default: plateFormatsKeys,
    description: "List of formats to use",
    type: "array"
  })
  .help()
  .alias("help", "h");

const generators = argv.formats.map(
  format => new RandExp(PlateFormats[format.toUpperCase()])
);

const app = express();
app.use(cors());
app.use(helmet());
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.SERVER_PORT || 2000;
const API_PREFIX = "/api";
let latestPlate = "";

// API routes
app.get(`${API_PREFIX}/settings`, (_req, res) => {
  res.status(200).json({ port: PORT });
});

app.get(`${API_PREFIX}/latest`, (_req, res) => {
  res.status(200).json({ latestPlate });
});

// Create websocket
server.listen(PORT);

app.use(express.static(path.join(__dirname, "static")));

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "static/index.html"), () => {
    res.status(404).send("<h1>Not found</h1>");
  });
});

const getGeneratorAtRandom = () => {
  if (generators.length === 1) return generators[0];
  return generators[Math.floor(Math.random() * generators.length)];
};

// Create generator function
const generate = () => {
  return getGeneratorAtRandom().gen();
};

// Create interval and emit generated value
setInterval(() => {
  latestPlate = generate();
  io.emit("generate", latestPlate);
}, argv.interval * 1000);
