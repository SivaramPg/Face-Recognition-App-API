// Importing npm packages
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");

// importing modules from controllers folder
const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");
const image = require("./controllers/image");

// Creating a variable for knex package for passing authentication
const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true
  }
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Root endpoint
app.get("/", (req, res) => {
  res.send("It is working");
});

// signin endpoint
app.post("/signin", (req, res) => {
  signin.handleSignin(req, res, db, bcrypt);
});

// register endpoint
app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});

// profile endpoint
app.get("/profile/:id", (req, res) => {
  profile.handleProfileGet(req, res, db);
});

// image endpoint for fetching the image from the url
app.put("/image", (req, res) => {
  image.handleImage(req, res, db);
});

// imageurl endpoint for receiving data from clarifai api
app.post("/imageurl", (req, res) => {
  image.handleApiCall(req, res);
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`app is running on ${process.env.PORT}`);
});
