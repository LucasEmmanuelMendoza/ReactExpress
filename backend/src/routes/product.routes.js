const express = require('express');
const routerProduct = express.Router();
const ProductController = require('../controller/product.controller.js');
const productController = new ProductController();

routerProduct.get('/', (req, res) => productController.getProducts(req, res));
routerProduct.get('/:pid', (req, res) => productController.getProductById(req, res));
routerProduct.post('/', (req, res) => productController.addProduct(req, res));
routerProduct.delete('/:pid', (req, res) => productController.deleteProductById(req, res));
routerProduct.put('/:pid', (req, res) => productController.updateProduct(req, res));

module.exports = routerProduct