const Tires = require('../models/tires');
exports.getTires = async (req, res) => {
  try {
    const tires = await Tires.getAllTires();
    res.json(tires);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Failed to fetch tires'});
  }
};

exports.getTireById = async (req, res) => {
  const {id} = req.params;

  try {
    const tire = await Tires.getTireById(id);
    res.json(tire);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Failed to fetch tire'});
  }
};
