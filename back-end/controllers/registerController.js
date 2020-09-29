const registerService = require('../services/registerService');

const registerController = async (req, res) => {
  const regService = await registerService(req.body);
  if (!regService) {
    return res.status(400).json({ message: 'E-mail already in database.' });
  }
  return res.sendStatus(200);
};

module.exports = registerController;
