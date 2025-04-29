const Brands = require('../models/brands');

exports.getBrands = async (req, res) => {
  try {
    const allBrands = await Brands.getAllBrands();
    res.json(allBrands);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Failed to fetch brands'});
  }
};

exports.getBrandById = async (req, res) => {
  const {id} = req.params;
  try {
    const brand = await Brands.getBrandById(id);
    if (!brand) {
      return res.status(404).json({error: 'Brand not found'});
    }
    res.json(brand);
  } catch (error) {
    res.status(500).json({error: 'Failed to fetch brand'});
  }
};
