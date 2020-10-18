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
    products: cart,
    status,
  };
  const addToSales = await checkoutService(checkoutObject);
  console.log('ADDTOSALE', addToSales);
  res.status(200).json(addToSales);
};

module.exports = checkoutController;
