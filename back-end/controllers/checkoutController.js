const checkoutService = require('../services/checkoutService');

const checkoutController = async (req, res) => {
  try {
    const userId = req.user.id;
    const { address, cart, total, status } = req.body;
    const checkoutObject = {
      user_id: userId,
      total_price: total,
      delivery_address: address.street,
      delivery_number: address.number,
      status,
      products: cart,
    };
    const addToSales = await checkoutService(checkoutObject);
    res.status(200).json(addToSales);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

module.exports = checkoutController;
