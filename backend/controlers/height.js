const Height = require('../models/height');

exports.getHeight = async (req, res) => {
  try {
    const allheights = await Height.getAllHeights();
    res.json(allheights);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Failed to fetch heights'});
  }
};

exports.getHeightById = async (req, res) => {
  const {id} = req.params;

  try {
    const height = await Height.getHeightById(id);
    res.json(height);
  } catch (error) {
    res.status(500).json({error: 'Failed to fetch height'});
  }
};
