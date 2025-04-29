const Width = require('../models/width');

exports.getWidth = async (req, res) => {
  try {
    const allWidths = await Width.getAllWidths();
    res.json(allWidths);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Failed to fetch widths'});
  }
};

exports.getWidthById = async (req, res) => {
  const {id} = req.params;

  try {
    const width = await Width.getWidthById(id);
    res.json(width);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Failed to fetch width'});
  }
};
