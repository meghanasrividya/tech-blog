// config/database.js
require("dotenv").config();
const { Sequelize } = require('sequelize');

// Create and export sequelize instance
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Important to avoid certificate errors
    }
  }
});

module.exports = sequelize;
