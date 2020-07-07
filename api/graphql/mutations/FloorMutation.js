const {
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLBoolean,
} = require('graphql');
const merge = require('lodash.merge');

const { FloorType } = require('../types');
const { Floor } = require('../../models');

const addFloor = {
  type: FloorType,
  description: 'addFloor',
  args: {
    siteId: {
      name: 'siteId',
      type: new GraphQLNonNull(GraphQLInt),
    },
    floorNumber: {
      name: 'floorNumber',
      type: new GraphQLNonNull(GraphQLInt),
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
  resolve: (
    value,
    {
      siteId,
      floorNumber,
      wardenRequired,
      peepsRequired,
      floorManagerName,
      managerPhone,
      managerEmail,
    },
  ) => Floor.create({
    siteId,
    floorNumber,
    wardenRequired,
    peepsRequired,
    floorManagerName,
    managerPhone,
    managerEmail,
  }),
};

const updateFloor = {
  type: FloorType,
  description: 'updateFloor',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLInt),
    },
    siteId: {
      name: 'siteId',
      type: new GraphQLNonNull(GraphQLInt),
    },
    floorNumber: {
      name: 'floorNumber',
      type: new GraphQLNonNull(GraphQLInt),
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
  resolve: async (
    value,
    {
      id,
      siteId,
      floorNumber,
      wardenRequired,
      peepsRequired,
      floorManagerName,
      managerPhone,
      managerEmail,
    },
  ) => {
    const foundFloor = await Floor.findByPk(id);

    if (!foundFloor || !foundFloor.dataValues) {
      throw new Error(`Floor with id: ${id} not found!`);
    }

    return await foundFloor.update({
      floorNumber,
      wardenRequired,
      peepsRequired,
      floorManagerName,
      managerPhone,
      managerEmail,
    });
  },
};

const deleteFloor = {
  type: FloorType,
  description: '',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: async (value, { id }) => {
    const foundFloor = await Floor.findByPk(id);

    if (!foundFloor) {
      throw new Error(`Floor with id: ${id} not found!`);
    }

    await Floor.destroy({
      where: {
        id,
      },
    });

    return foundFloor;
  },
};

module.exports = {
  addFloor,
  updateFloor,
  deleteFloor,
};
