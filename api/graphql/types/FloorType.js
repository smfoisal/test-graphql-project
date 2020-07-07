const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
} = require('graphql');

const FloorType = new GraphQLObjectType({
  name: 'Floor',
  description: '',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: (floor) => floor.id,
    },
    siteId: {
      type: GraphQLInt,
      resolve: (floor) => floor.siteId,
    },
    floorNumber: {
      type: GraphQLInt,
      resolve: (floor) => floor.floorNumber,
    },
    wardenRequired: {
      type: GraphQLBoolean,
      resolve: (floor) => floor.wardenRequired,
    },
    peepsRequired: {
      type: GraphQLBoolean,
      resolve: (floor) => floor.peepsRequired,
    },
    floorManagerName: {
      type: GraphQLString,
      resolve: (floor) => floor.floorManagerName,
    },
    managerPhone: {
      type: GraphQLString,
      resolve: (floor) => floor.managerPhone,
    },
    managerEmail: {
      type: GraphQLString,
      resolve: (floor) => floor.managerEmail,
    },
  }),
});

module.exports = { FloorType };
