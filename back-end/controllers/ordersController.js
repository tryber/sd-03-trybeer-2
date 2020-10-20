const { getAll, getOne, getOrderUser } = require('../services/ordersService');
const { getAllOrders } = require('../models/getOrdersModels');

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

const getByOrderId = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { id: userId } = req.user;
    const getOrder = await getOne(orderId, userId);
    if (getOrder) return res.status(200).json(getOrder);
  } catch (error) {
    return res.status(200).json(error);
  }
  return res.status(400).json({ err: true });
};

const getAllOrdersUser = async (_req, res) => {
  try{
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
