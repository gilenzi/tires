const Users = require('../models/users');

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await Users.getAllUsers();
    res.json(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Failed to fetch users'});
  }
};

exports.getUserById = async (req, res) => {
  const {id} = req.params;

  try {
    const user = await Users.getUserById(id);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Failed to fetch user'});
  }
};
