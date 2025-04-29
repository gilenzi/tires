const Type = require('../models/type');

exports.getType = async (req, res) => {
  try {
    const allTypes = await Type.getAllTypes();
    res.json(allTypes);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Failed to fetch types'});
  }
};

exports.getTypeById = async (req, res) => {
  const {id} = req.params;

  try {
    const type = await Type.getTypeById(id);
    res.json(type);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Failed to fetch type'});
  }
};
