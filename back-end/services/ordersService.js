const { getAllById } = require('../models/getOrdersModels');

const ordersService = async (userId) => {
  const getAllOrders = await getAllById(userId);
  if (getAllOrders.length < 1) return false;
  return getAllOrders;
};

module.exports = ordersService;
