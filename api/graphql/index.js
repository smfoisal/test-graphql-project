const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { siteQuery, floorQuery } = require('./queries');
const {
  createSite,
  updateSite,
  deleteSite,
  addFloor,
  updateFloor,
  deleteFloor,
} = require('./mutations');

const RootQuery = new GraphQLObjectType({
  name: 'rootQuery',
  description:
    'This is the root query which holds all possible READ entrypoints for the GraphQL API',
  fields: () => ({
    site: siteQuery,
    floor: floorQuery,
  }),
});

const RootMutation = new GraphQLObjectType({
  name: 'rootMutation',
  description:
    'This is the root mutation which holds all possible WRITE entrypoints for the GraphQL API',
  fields: () => ({
    createSite,
    updateSite,
    deleteSite,
    addFloor,
    updateFloor,
    deleteFloor,
  }),
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

module.exports = { schema };
