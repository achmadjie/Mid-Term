require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/productModel");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose
  .connect(process.env.DB_URL)
  // const db = mongoose.connection
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server Started");
    });
  })
  .catch((err) => {
    console.log(err);
  });

// routes
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/fatchProduct", async(req, res) => {
	try {
		const products = await Product.find({});
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json({message: error.message});
	}
})

app.get("/fatchProduct/:id", async(req, res) =>{
	try {
		const {id} = req.params;
		const certainProducts = await Product.findById(id);
		if(!certainProducts){
			res.status(404).json({message: `the product doesn't exist or deleted`});
		}
		res.status(200).json(certainProducts);
	} catch (error) {
		res.status(500).json({message: error.message});
	}
})

// Update Product

app.put("/fatchProduct/:id", async(req, res) => {
	try {
		const {id} = req.params;
		const certainProducts = await Product.findByIdAndUpdate(id, req.body);
		// cannot find any product in database
		if(!certainProducts){
			return res.status(404).json({message: `cannot find the product with id: ${id}`});
		}
		const updateProduct = await Product.findById(id);
		res.status(200).json(updateProduct);
	} catch (error) {
		res.status(500).json({message: error.message});
	}
})

// Delete all Product

app.delete("/fatchProduct", async(req, res) => {
	try {
		await Product.deleteMany({});
		res.status(200).json({message: "success delete all product"});
	} catch (error) {
		res.status(500).json({message: error.message});
	}
})

// Delete a certain Product

app.delete("/fatchProduct/:id", async(req, res) => {
	try {
		const {id} = req.params;
		const certainProducts = await Product.findByIdAndDelete(id);
		if(!certainProducts){
			return res.status(404).json({message: `cannot find the product with id: ${id}`});
		}
		res.status(200).json(certainProducts);
	} catch (error) {
		res.status(500).json({message: error.message});
	}
})

app.post("/product", async(req, res) =>{
	try {
		const product = await Product.create(req.body)
		res.status(200).json({product});
	} catch (error) {
		console.log(error.message);
		res.status(500).json({message: error.message});
	}
})