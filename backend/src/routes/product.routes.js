const express = require('express');
const routerProduct = express.Router();
const ProductController = require('../controller/product.controller.js');
const productController = new ProductController();

routerProduct.get('/', productController.getProducts);
routerProduct.get('/:pid', productController.getProductById);
routerProduct.post('/', productController.addProduct);
routerProduct.delete('/:pid', productController.deleteProductById);
routerProduct.put('/:pid', productController.updateProduct);

module.exports = routerProduct