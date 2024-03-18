// Please don't change the pre-written code
// Import the necessary modules here
import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts = (req, res) => {
    // Write your code here
    let prods = new ProductModel();
    console.log(prods.fetchProducts());
    let products = prods.fetchProducts();
    res.render("product",{prods : products});
  };
}


