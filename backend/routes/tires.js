const express = require('express');
const router = express.Router();

const tiresController = require('../controlers/tires');

router.get('/tires', tiresController.getTires);

router.get('/tires/:id', tiresController.getTireById);

module.exports = router;
