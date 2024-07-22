const express = require('express');
const routerProduct = express.Router();
const ProductController = require('../controller/product.controller.js');
const Product = new ProductController();

routerProduct.get('/', async(req, res) => {
    const foundProducts = await Product.getProducts();

    foundProducts ? res.status(200).json(foundProducts) : res.status(400).json('Error el devolver los productos');
})

routerProduct.get('/:pid', async(req, res) => {
    const productId = req.params.pid;
    const foundProduct = await Product.getProductById(productId);
    foundProduct ? res.status(200).json(foundProduct) : res.status(400).json('Error al devolver el producto');
})

routerProduct.post('/', async(req, res) => {
    const product = req.body;
    const addProd = await Product.addProduct(product);    
    addProd ? res.status(200).json('Producto agregado con éxito') : res.status(400).json('Error al agregar el producto');

})

routerProduct.delete('/:pid', async(req, res) => {
    const productId = req.params.pid;
    const deleteProd = await Product.deleteProductById(productId);
    deleteProd ? res.status(200).json('Producto eliminado con éxito') : res.status(400).json('Error al eliminar el producto');
})

routerProduct.post('/:pid', async(req, res) => {
    const productId = req.params.pid;
    const updatedProd = req.body;
    const updateProd = await Product.updateProduct(productId, updatedProd);
    updateProd ? res.status(200).json('Producto actualizado con éxito') : res.status(400).json('Error al actualizar el producto');
})

module.exports = routerProduct