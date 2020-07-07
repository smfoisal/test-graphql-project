const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const tableName = 'floors';

const Floor = sequelize.define(
  'Floor',
  {
    floor: {
      type: Sequelize.STRING,
    },
  },
  { tableName },
);

module.exports = { Floor };
