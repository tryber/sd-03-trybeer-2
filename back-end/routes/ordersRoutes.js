const router = require('express').Router();
const {
  getByUserId,
  getByOrderId,
  getAllOrdersUser,
  getOrdersByIdUser,
} = require('../controllers/ordersController');

module.exports = (() => {
  router.get('/:orderId', getOrdersByIdUser);
  router.get('/', getAllOrdersUser);
  router.post('/', getByUserId);
  router.post('/:orderId', getByOrderId);
  return router;
})();
