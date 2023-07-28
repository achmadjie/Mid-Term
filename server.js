require("dotenv").config()

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected to Database"));

// routes
app.get("/", (req, res) => {
	res.send("hello world");
})


app.listen(3000, () => {
	console.log("Server Started")
});