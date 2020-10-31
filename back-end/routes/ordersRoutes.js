const router = require('express').Router();
const adminCardDetail = require('../controllers/adminCardDetail');
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
  router.get('/orders/:orderId', adminCardDetail.getAdminDetailCart);
  router.put('/orders/:orderId', adminCardDetail.AdminUpdateStatus);
  return router;
})();
