const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Product = require("./models/Product");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/studentdb")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


// CREATE
app.post("/products", async (req, res) => {
  const product = new Product(req.body);
 console.log(product);
 
  await product.save();
  
  res.json(product);
});


// READ ALL
app.get("/products", async (req, res) => {
  const products = await Product.find();

  res.json(products);
});


// READ ONE
app.get("/products/:id", async (req, res) => {
  const product = await Product.findById(
    req.params.id
  );

  res.json(product);
});


// UPDATE
app.put("/products/:id", async (req, res) => {
  await Product.findByIdAndUpdate(
    req.params.id,
    req.body
  );

  res.json({
    message: "Updated Successfully"
  });
});


// DELETE
app.delete("/products/:id", async (req, res) => {
  await Product.findByIdAndDelete(
    req.params.id
  );

  res.json({
    message: "Deleted Successfully"
  });
});


app.listen(5000, () => {
  console.log("Server Running On Port 5000");
});