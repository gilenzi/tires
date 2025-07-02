const express = require('express');
const router = express.Router();

const rolesController = require('../controlers/roles');

router.get('/roles', rolesController.getAllRoles);

router.get('/role/:id', rolesController.getRoleById);

module.exports = router;
