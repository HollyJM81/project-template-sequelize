const express = require("express");
// *** CHANGE ***
// const { >>Item<< } = require("./models");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.status(200).send("Hello World!");
});

// *** CHANGE ***
// app.post("/>>items<<", (req, res) => {
// 	>>Item<<.create(req.body).then((>>item<<) => res.status(201).json(>>item<<));
// });

module.exports = app;
