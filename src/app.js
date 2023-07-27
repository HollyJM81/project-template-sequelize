const express = require("express");
const { Book } = require("./models");
const app = express();

app.use(express.json());

app.post("/books", (req, res) => {
	Book.create(req.body).then((book) => res.status(201).json(book));
});

module.exports = app;
