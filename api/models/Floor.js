const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const tableName = 'floors';

const Floor = sequelize.define(
  'Floor',
  {
    floorNumber: {
      type: Sequelize.STRING,
    },
    wardenRequired: {
      type: Sequelize.BOOLEAN,
    },
    peepsRequired: {
      type: Sequelize.BOOLEAN,
    },
    floorManagerName: {
      type: Sequelize.STRING,
    },
    managerPhone: {
      type: Sequelize.STRING,
    },
    managerEmail: {
      type: Sequelize.STRING,
    },
    siteId: {
      type: Sequelize.INTEGER,
    },
  },
  { tableName },
);

module.exports = { Floor };
