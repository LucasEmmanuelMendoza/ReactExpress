const express = require('express');
const routerCart = express.Router();
const CartController = require('../controller/cart.controller');
const cartController = new CartController();

routerCart.post('/', cartController.createCart);
routerCart.delete('/:cid', cartController.deleteCart);
routerCart.get('/:cid', cartController.findCartById);
routerCart.post('/:cid/:pid', cartController.addToCart);
routerCart.delete('/:cid/:pid', cartController.deleteProductFromCart);

module.exports = routerCart