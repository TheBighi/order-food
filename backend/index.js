const fs = require("fs/promises");
const bodyParser = require("body-parser")
const path = require("path");
const express = require("express");
const cors = require('cors')
const { readFileSync } = require("fs");

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static('public'));

app.use(cors({ origin: 'https://curly-guacamole-x5x69vgg9gxhvvgw-3000.app.github.dev'}))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

dataMeals = readFileSync('./data/meals.json')
mealsJSON = JSON.parse(dataMeals)
console.log(mealsJSON)

app.get("/meals", async (req, res) => {
  const meals = mealsJSON
  res.json(meals);
});

app.use((req, res) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: "Not found" });
});

app.listen(3001);