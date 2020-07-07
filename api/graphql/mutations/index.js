const { createSite, updateSite, deleteSite } = require('./SiteMutation');
const { addFloor, updateFloor, deleteFloor } = require('./FloorMutation');

module.exports = {
  createSite,
  updateSite,
  deleteSite,
  addFloor,
  updateFloor,
  deleteFloor,
};
