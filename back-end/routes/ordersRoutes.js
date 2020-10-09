const router = require('express').Router();
const { getByUserId, getByOrderId } = require('../controllers/ordersController');

module.exports = (() => {
  router.get('/', getByUserId);
  router.post('/', getByUserId);
  router.post('/:orderId', getByOrderId);
  return router;
})();
