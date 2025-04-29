const {Sequelize} = require('sequelize');

// Replace with your actual values
const sequelize = new Sequelize('tires-project', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', // or 'mariadb' if that's what you're using
  logging: false, // optional: disables verbose logging
});

sequelize
  .authenticate()
  .then(() => console.log('✅ Connected to MySQL with Sequelize'))
  .catch((err) => console.error('❌ Failed to connect to DB:', err));

module.exports = sequelize;
