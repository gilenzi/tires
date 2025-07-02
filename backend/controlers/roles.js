const Roles = require('../models/roles');

exports.getAllRoles = async (req, res) => {
  try {
    const allRoles = await Roles.getAllRoles();
    res.json(allRoles);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Failed to fetch roles'});
  }
};

exports.getRoleById = async (req, res) => {
  const {id} = req.params;

  try {
    const role = await Roles.getRoleById(id);
    res.json(role);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Failed to fetch role'});
  }
};
