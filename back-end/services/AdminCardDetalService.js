const AdminModell = require('../models/AdminCardModel');

const AdminCartDetailId = async (id) => AdminModell.AdminCardDetail(id);
const AdminCartDetailStatus = async (id) => AdminModell.getStatus(id);
const updateAdminCartStatus = async (id) => AdminModell.updateStatus(id);

module.exports = {
  AdminCartDetailId,
  AdminCartDetailStatus,
  updateAdminCartStatus,
};
