const loginService = require('../services/loginService');

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const verifyUser = await loginService(email, password);
  if (verifyUser) return res.status(200).json(verifyUser);
  return res.status(400).json({ message: 'Não autorizado' });
};

module.exports = loginController;
