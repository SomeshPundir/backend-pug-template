const express = require("express");
const router = express.Router();
const addproduct = require("./add_product.route");

router.get("/product", (req, res) => {
    console.log(addproduct.products)
  res.render("showproduct.views.pug", {
    doctitle: "showing Products",
    products: addproduct.products,
  });
});

module.exports = router;
