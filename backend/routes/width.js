const express = require('express');
const router = express.Router();

const widthController = require('../controlers/width');

router.get('/width', widthController.getWidth);

router.get('/width/:id', widthController.getWidthById);

module.exports = router;
