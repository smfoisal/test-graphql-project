const {
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
} = require('graphql');

const { SiteType } = require('../types');
const { Site } = require('../../models');

const siteQuery = {
  type: new GraphQLList(SiteType),
  args: {
    id: {
      name: 'id',
      type: GraphQLInt,
    },
    siteName: {
      name: 'siteName',
      type: GraphQLString,
    },
    openingHours: {
      name: 'openingHours',
      type: GraphQLInt,
    },
    securityContact: {
      name: 'securityContact',
      type: GraphQLString,
    },
    address: {
      name: 'address',
      type: GraphQLString,
    },
    streetAddress: {
      name: 'streetAddress',
      type: GraphQLString,
    },
    zipCode: {
      name: 'zipCode',
      type: GraphQLInt,
    },
    state: {
      name: 'state',
      type: GraphQLString,
    },
    city: {
      name: 'city',
      type: GraphQLString,
    },
    suburb: {
      name: 'suburb',
      type: GraphQLString,
    },
    totalEmployees: {
      name: 'totalEmployees',
      type: GraphQLInt,
    },
    floors: {
      name: 'floors',
      type: GraphQLString,
    },
    createdAt: {
      name: 'createdAt',
      type: GraphQLString,
    },
    updatedAt: {
      name: 'updatedAt',
      type: GraphQLString,
    },
  },
  resolve: (site, args) => Site.findAll({ where: args }),
};

module.exports = { siteQuery };
