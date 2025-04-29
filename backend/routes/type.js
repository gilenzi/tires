const express = require('express');
const router = express.Router();

const typeController = require('../controlers/type');

router.get('/type', typeController.getType);

router.get('/type/:id', typeController.getTypeById);

module.exports = router;
