const express = require('express');
const router = express.Router();

const radiusController = require('../controlers/radius');

router.get('/radius', radiusController.getRadius);

router.get('/radius/:id', radiusController.getRadiusById);

module.exports = router;
