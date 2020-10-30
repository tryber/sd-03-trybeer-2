const rescue = require('express-rescue');
const uService = require('../services/AdminCardDetalService');

const getAdminDetailCart = rescue(async (req, res) => {
  const { id } = req.user.id;
  const callService = await uService.AdminCartDetailId(id);
  const callServiceStatus = await uService.AdminCartDetailStatus(id);
  return res.status(200).json({ callService, callServiceStatus });
})

module.exports = { getAdminDetailCart };