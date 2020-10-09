const rescue = require('express-rescue');
const OrderModel = require('../models/AdminDetailModel');

const controllerDetailsOrder = rescue(async (_req, res) => {
  const callModel = await OrderModel.AdminDetail();
  return res.status(200).json(callModel);
  //Retorna como json//
});

module.exports = {
  controllerDetailsOrder,
};
