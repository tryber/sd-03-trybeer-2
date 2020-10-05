const checkoutService = require('../services/checkoutService');

const checkoutController = async (req, res) => {
  const user_id = req.user.id;
  const addToSales = await checkoutService(user_id, req.body);
  res.status(400).json(addToSales);
};

module.exports = checkoutController;
