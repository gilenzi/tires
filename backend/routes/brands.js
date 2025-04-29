const express = require('express');
const router = express.Router();

const brandsController = require('../controlers/brands');

router.get('/brands', brandsController.getBrands);

router.get('/brands/:id', brandsController.getBrandById);

module.exports = router;
