const Sequelize = require('sequelize');

const sequelize = require('../../config/database');
const { Floor } = require('./floor');

const tableName = 'sites';

const Site = sequelize.define(
  'Site',
  {
    siteName: {
      type: Sequelize.STRING,
    },
    openingHours: {
      type: Sequelize.INTEGER,
    },
    securityContact: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    streetAddress: {
      type: Sequelize.STRING,
    },
    zipCode: {
      type: Sequelize.INTEGER,
    },
    state: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    suburb: {
      type: Sequelize.STRING,
    },
    totalEmployees: {
      type: Sequelize.INTEGER,
    },
  },
  { tableName },
);

Site.hasMany(Floor, { as: 'floors', foreignKey: 'siteId' });

module.exports = { Site };
