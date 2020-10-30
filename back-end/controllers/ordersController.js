const { getAll, getOrderUser } = require('../services/ordersService');
const { getAllOrders, getAllDetails } = require('../models/getOrdersModels');

const getByUserId = async (req, res) => {
  try {
    const userId = req.user.id;
    const getOrders = await getAll(userId);
    if (getOrders) return res.status(201).json(getOrders);
    return res.status(400).json({ err: true });
  } catch (error) {
    return error;
  }
};
// Alterar request getAllDetails para service.
const getByOrderId = async (req, res) => {
  try {
    const { orderId } = req.params;
    const getOrder = await getAllDetails(orderId);
    if (getOrder) return res.status(200).json(getOrder);
    return res.status(200).json(getOrder);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getAllOrdersUser = async (_req, res) => {
  try {
    const orders = await getAllOrders();
    return res.status(200).json(orders);
  } catch (error) {
    return error;
  }
};

const getOrdersByIdUser = async (req, res) => {
  try {
    const { orderId } = req.params;
    const getOrder = await getOrderUser(orderId);
    if (getOrder) return res.status(200).json(getOrder);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { getByUserId, getByOrderId, getAllOrdersUser, getOrdersByIdUser };
