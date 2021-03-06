const express = require('express');

const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');

const routes = express.Router();

routes.post('/user', UserController.store);
routes.post('/auth/login', AuthController.login);

module.exports = routes;