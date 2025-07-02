const express = require('express');
const router = express.Router();

const authenticationtController = require('../controlers/authentication');
const {verify} = require('../middlewares/jwt-verify');

router.post('/login', authenticationtController.login);
router.post('/logout', verify, authenticationtController.logout);
router.post('/refresh', authenticationtController.refresh);

module.exports = router;
