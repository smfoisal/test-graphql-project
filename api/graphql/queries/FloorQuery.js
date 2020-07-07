const {
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
} = require('graphql');

const { FloorType } = require('../types');
const { Floor } = require('../../models');

const floorQuery = {
  type: new GraphQLList(FloorType),
  args: {
    id: {
      name: 'id',
      type: GraphQLInt,
    },
    siteId: {
      name: 'siteId',
      type: GraphQLInt,
    },
    floorNumber: {
      name: 'floorNumber',
      type: GraphQLInt,
    },
    wardenRequired: {
      name: 'wardenRequired',
      type: GraphQLBoolean,
    },
    peepsRequired: {
      name: 'peepsRequired',
      type: GraphQLBoolean,
    },
    floorManagerName: {
      name: 'floorManagerName',
      type: GraphQLString,
    },
    managerPhone: {
      name: 'managerPhone',
      type: GraphQLString,
    },
    managerEmail: {
      name: 'managerEmail',
      type: GraphQLString,
    },
  },
  resolve: (site, args) => Floor.findAll({ where: args }),
};

module.exports = { floorQuery };
