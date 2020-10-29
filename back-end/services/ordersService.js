const { getAllDetails } = require('../models/getOrdersModels');
const {
  getByOrderId,
} = require('../models/getOrdersModels');
const renameProperty = require('../utils/renameObject');

const getAll = async (_userId) => {
  try {
    const allDetails = await getAllDetails();
    return allDetails;
  } catch (error) {
    console.log(error);
  }
};

const getOne = async (orderId) => {
  try {
    const getOrders = await getByOrderId(orderId);
    const getOrdersObject = Object.assign({}, ...getOrders);
    const names = ['id', 'date', 'price'];
    const objetoParaArray = Object.entries(getOrdersObject);
    objetoParaArray.forEach((_item, i) => renameProperty(getOrdersObject, i, names[i]));
    if (getOrders.length > 0) return getOrdersObject;
    return false;
  } catch (error) {
    return error;
  }
};

module.exports = { getAll, getOne };
