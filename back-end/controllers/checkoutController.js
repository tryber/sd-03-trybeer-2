const checkoutService = require('../services/checkoutService');

const checkoutController = async (req, res) => {
  const addToSales = await checkoutService(req.body);
  res.status(400).json(addToSales);
};

module.exports = checkoutController;
