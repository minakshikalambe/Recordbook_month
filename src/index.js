const express = require("express");
const registrationController = require("./controller/user.controller");

const app = express();

app.use(express.json());

app.use("/registration", registrationController); 

module.exports = app;
