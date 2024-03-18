// Import the necessary modules here
import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts = (req, res) => {
    //  Write your code here
    let products = new ProductModel()
    console.log(products.fetchProducts());
    res.set('Content-Type', 'application/json');
    //return res.send(products.fetchProducts());
    return res.send.json(products.fetchProducts());
  };
}
