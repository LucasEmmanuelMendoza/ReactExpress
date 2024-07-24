const express = require('express');
const CartController = require('../controller/cart.controller');
const cartController = new CartController();
const routerCart = express.Router();

routerCart.get('/:pid', async(req, res) => cartController.findCartById(req, res));
routerCart.post('/', async(req, res) => cartController.findCartById(req, res));
routerCart.delete('/:pid', async(req, res) => cartController.findCartById(req, res));
routerCart.get('/:pid', async(req, res) => cartController.findCartById(req, res));
routerCart.get('/:pid', async(req, res) => cartController.findCartById(req, res));
