const { GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql');
const merge = require('lodash.merge');

const { SiteType } = require('../types');
const { Site } = require('../../models');

const createSite = {
  type: SiteType,
  description: '',
  args: {
    siteName: {
      name: 'siteName',
      type: new GraphQLNonNull(GraphQLString),
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
  },
  resolve: (
    value,
    {
      siteName,
      openingHours,
      securityContact,
      address,
      streetAddress,
      zipCode,
      state,
      city,
      suburb,
      totalEmployees,
    },
  ) => Site.create({
    siteName,
    openingHours,
    securityContact,
    address,
    streetAddress,
    zipCode,
    state,
    city,
    suburb,
    totalEmployees,
  }),
};

const updateSite = {
  type: SiteType,
  description: '',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLInt),
    },
    siteName: {
      name: 'siteName',
      type: new GraphQLNonNull(GraphQLString),
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
  },
  resolve: async (
    value,
    {
      id,
      siteName,
      openingHours,
      securityContact,
      address,
      streetAddress,
      zipCode,
      state,
      city,
      suburb,
      totalEmployees,
    },
  ) => {
    const foundSite = await Site.findByPk(id);

    if (!foundSite || !foundSite.dataValues) {
      throw new Error(`Site with id: ${id} not found!`);
    }
    console.log(foundSite);

    const updatedSite = merge(foundSite.foundSite, {
      siteName,
      openingHours,
      securityContact,
      address,
      streetAddress,
      zipCode,
      state,
      city,
      suburb,
      totalEmployees,
    });

    return await foundSite.update(updatedSite);
  },
};

const deleteSite = {
  type: SiteType,
  description: '',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: async (value, { id }) => {
    const foundSite = await Site.findByPk(id);

    if (!foundSite) {
      throw new Error(`Site with id: ${id} not found!`);
    }

    await Site.destroy({
      where: {
        id,
      },
    });

    return foundSite;
  },
};

module.exports = {
  createSite,
  updateSite,
  deleteSite,
};
