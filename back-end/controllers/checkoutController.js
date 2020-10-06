const checkoutService = require('../services/checkoutService');

const checkoutController = async (req, res) => {
  const userId = req.user.id;
  const { address, cart, total, status } = req.body;
  const checkoutObject = {
    id: cart.id,
    userId,
    total_price: total,
    delivery_address: address.street,
    delivery_number: address.number,
    status,
    products: cart,
  };
  const addToSales = await checkoutService(checkoutObject);
  res.status(200).json(addToSales);
};

module.exports = checkoutController;
