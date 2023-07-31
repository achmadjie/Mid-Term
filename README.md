# API Documentation - The Product

## Database Structure
The database structure for the Tokopedia Play Clone is defined using Mongoose schemas. There is one main schemas: productSchema.

### Product Schema
```javascript
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
```
The productSchema defines the structure of a product. It includes the product's title, price, and image.

## API Structure
The API follows providing endpoints to manage products. It supports various HTTP methods like GET, POST, PUT, and DELETE for different operations.

### API Endpoints
Product Endpoints
-`POST /product`: Create a new product,
-`GET /products`: Find and show all products
-`GET /product/:id`: Find and show a certain product
-`PUT /product/:id`: Find and Update a certain product
-`DELETE /product/:id`: Remove a certain product
-`DELETE /products`: Remove all products

## How to Run Locally
1. Clone the repository
```
git clone https://github.com/achmadjie/Mid-Term.git
cd Mid-Term
```
2. Install dependencies
```
npm install
```
3. Set up your local db (MongoDB) and update the connection string in the .env file.
4. Start the server
```
npm run devstart
```
5. The API will be accessible at `http://localhost:3000`
