const { getAllById, getByOrderId } = require('../models/getOrdersModels');
const renameProperty = require('../utils/renameObject');

const getAll = async (userId) => {
  const getAllOrders = await getAllById(userId);
  if (getAllOrders.length < 1) return false;
  return getAllOrders;
};

const getOne = async (orderId, userId) => {
  try {
    const getOrders = await getByOrderId(orderId, userId);
    const getOrdersObject = Object.assign({}, ...getOrders);
    const names = ['id', 'date', 'price'];
    Object
      .entries(getOrdersObject)
      .forEach((_item, i) => renameProperty(getOrdersObject, i, names[i]));
    if (getOrders.length > 0) return getOrdersObject;
    return false;
  } catch (error) {
    return error;
  }
};

module.exports = { getAll, getOne };
