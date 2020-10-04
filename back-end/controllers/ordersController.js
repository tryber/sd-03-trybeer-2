const ordersService = require('../services/ordersService');

const ordersController = async (req, res) => {
  const { user_id: userId } = req.body;
  try {
    const getOrders = await ordersService(userId);
    if (getOrders) return res.status(201).json(getOrders);
    return res.status(400).json({ err: true });
  } catch (error) {
    return error;
  }
};

module.exports = ordersController;
