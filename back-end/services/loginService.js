const jwt = require('jsonwebtoken');
const { verifyIfExists, getInfo, verfiyPassword } = require('../models/users');

const loginService = async (userEmail, userPassword) => {
  const verifyEmail = await verifyIfExists(userEmail);
  const verify = await verfiyPassword(userPassword);
  if (verifyEmail && verify.length > 0) {
    const userData = await getInfo(userEmail);
    const [name, email, password, role] = userData[0];
    const userObject = { name, email, password, role };
    const token = jwt.sign(userObject, process.env.SECRET, { expiresIn: '10m', algorithm: 'HS256' });
    return token;
  }
  return false;
};

module.exports = loginService;