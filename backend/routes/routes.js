const tiresRoutes = require('./tires');
const brandsRoutes = require('./brands');
const heightRoutes = require('./height');
const widthRoutes = require('./width');
const radiusRoutes = require('./radius');
const typeRoutes = require('./type');
const userRoutes = require('./users');
const roleRoutes = require('./roles');

module.exports = [
  tiresRoutes,
  brandsRoutes,
  heightRoutes,
  widthRoutes,
  radiusRoutes,
  typeRoutes,
  userRoutes,
  roleRoutes,
];
