const express = require('express');
const CartController = require('../controller/cart.controller');
const cartController = new CartController();
const routerCart = express.Router();

routerCart.post('/', async(req, res) => cartController.createCart(req, res));
routerCart.delete('/:cid', async(req, res) => cartController.deleteCart(req, res));
routerCart.get('/:cid', async(req, res) => cartController.findCartById(req, res));
routerCart.post('/:cid/:pid', async(req, res) => cartController.addToCart(req, res));
routerCart.delete('/:cid/:pid', async(req, res) => cartController.deleteProductFromCart(req, res));

