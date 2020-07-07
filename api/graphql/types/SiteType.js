const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} = require('graphql');

const { FloorType } = require('./FloorType');

const SiteType = new GraphQLObjectType({
  name: 'Site',
  description: '',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: (site) => site.id,
    },
    siteName: {
      type: GraphQLString,
      resolve: (site) => site.siteName,
    },
    openingHours: {
      type: GraphQLInt,
      resolve: (site) => site.openingHours,
    },
    securityContact: {
      type: GraphQLString,
      resolve: (site) => site.securityContact,
    },
    address: {
      type: GraphQLString,
      resolve: (site) => site.address,
    },
    streetAddress: {
      type: GraphQLString,
      resolve: (site) => site.streetAddress,
    },
    zipCode: {
      type: GraphQLInt,
      resolve: (site) => site.zipCode,
    },
    state: {
      type: GraphQLString,
      resolve: (site) => site.state,
    },
    city: {
      type: GraphQLString,
      resolve: (site) => site.city,
    },
    suburb: {
      type: GraphQLString,
      resolve: (site) => site.suburb,
    },
    totalEmployees: {
      type: GraphQLInt,
      resolve: (site) => site.totalEmployees,
    },
    floors: {
      type: new GraphQLList(FloorType),
      resolve: (site) => site.getFloors(),
    },
    createdAt: {
      type: GraphQLString,
      resolve: (site) => site.createdAt,
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (site) => site.updatedAt,
    },
  }),
});

module.exports = { SiteType };
