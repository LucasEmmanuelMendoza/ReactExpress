const express = require('express');
const routerUser = express.Router();
const UserController = require('../controller/user.controller');
const userController = new UserController;

routerUser.get('/:uid', userController.getUser);
routerUser.get('/', userController.getUsers);
routerUser.delete('/:uid', userController.deleteUser);
routerUser.post('/', userController.addUser)
routerUser.put('/:uid', userController.updateUser);

module.exports = routerUser;