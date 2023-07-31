const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
	{
		titleProduct:{
			type: String,
			require: [true, "Please enter the product title!"],
		},
		priceProduct:{
			type: Number,
			require: true,
		},
		imageProduct:{
			type: String,
			require: false,
		},
	}
);

const product = mongoose.model('product', productSchema);

module.exports = product;
