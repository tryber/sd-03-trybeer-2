const router = require('express').Router();
const {
  getByUserId,
  getByOrderId,
  getAllOrdersUser,
  // getOrdersByIdUser,
} = require('../controllers/ordersController');

module.exports = (() => {
  router.get('/:orderId', getByOrderId);
  router.get('/', getAllOrdersUser);
  router.post('/:orderId', getByOrderId);
  router.post('/', getByUserId);
  return router;
})();
