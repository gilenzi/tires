const express = require('express');
const router = express.Router();

const heightController = require('../controlers/height');

router.get('/height', heightController.getHeight);

router.get('/height/:id', heightController.getHeightById);

module.exports = router;
