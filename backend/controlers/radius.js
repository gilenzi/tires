const Radius = require('../models/radius');

exports.getRadius = async (req, res) => {
  try {
    const allRadius = await Radius.getAllRadiuses();
    res.json(allRadius);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'Failed to fetch radiuses'});
  }
};

exports.getRadiusById = async (req, res) => {
  const {id} = req.params;

  try {
    const radius = await Radius.getRadiusById(id);
    res.json(radius);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Failed to fetch radius'});
  }
};
