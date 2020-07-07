const { createSite, updateSite, deleteSite } = require('./SiteMutation');
const { createFloor, updateFloor, deleteFloor } = require('./FloorMutation');

module.exports = {
  createSite,
  updateSite,
  deleteSite,
  createFloor,
  updateFloor,
  deleteFloor,
};
