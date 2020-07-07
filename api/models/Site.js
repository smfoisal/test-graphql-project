const Sequelize = require('sequelize');

const sequelize = require('../../config/database');
const { Floor } = require('./floor');

const tableName = 'sites';

const Site = sequelize.define(
  'Site',
  {
    site: {
      type: Sequelize.STRING,
    },
  },
  { tableName },
);

Floor.hasMany(Floor, { as: 'floors', foreignKey: 'siteId' });

module.exports = { Site };
