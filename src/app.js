const express = require("express");
// *** CHANGE ***
// const { >>Item<< } = require("./models");
const app = express();

app.use(express.json());

// *** CHANGE ***
// app.post("/>>items<<", (req, res) => {
// 	>>Item<<.create(req.body).then((>>item<<) => res.status(201).json(>>item<<));
// });

module.exports = app;
