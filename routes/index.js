const express= require('express');
const addproduct = require('./add_product.route');
const showproduct= require('./show_product.route');

const router=express.Router();
router.use('/add', addproduct.router);
router.use('/show', showproduct);

module.exports = router;
