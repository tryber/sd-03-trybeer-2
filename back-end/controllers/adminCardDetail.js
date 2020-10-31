const rescue = require('express-rescue');
const uService = require('../services/AdminCardDetalService');

const getAdminDetailCart = rescue(async (req, res) => {
  const { orderId } = req.params;
  const callService = await uService.AdminCartDetailId(orderId);
  /* const callServiceStatus = await uService.AdminCartDetailStatus(orderId); */
  return res.status(200).json(callService);
});

const AdminUpdateStatus = rescue(async (req, res) => {
  const { orderId } = req.params;
  await uService.updateAdminCartStatus(orderId);
  return res.status(200).send();
});

module.exports = { getAdminDetailCart, AdminUpdateStatus };
