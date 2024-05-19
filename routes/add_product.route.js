const express= require('express');
const app=  express();
const router= express.Router();
const products= [];

router.get('/product', (req, res) =>{
    res.render("product.views.pug");

})

router.post('/product',(req, res) =>{
if(!req.body  && !req.body.productItem){
    console.log('error the product is not submitted');
}
products.push({item:req.body.productItem })
// console.log(products);
res.redirect('/show/product');
})

exports.router= router;
exports.products= products