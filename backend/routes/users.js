const express = require('express');
const router = express.Router();
const {verify} = require('../middlewares/jwt-verify');

const usersController = require('../controlers/users');

router.get('/users', usersController.getAllUsers);

router.get('/user/:id', verify, usersController.getUserById);

module.exports = router;
