const { verifyIfExists, registerUser } = require('../models/users');

const registerService = async ({ name, email, password, role }) => {
  const userObject = { name, email, password, role };
  const exists = await verifyIfExists(email);
  if (!exists) {
    await registerUser(userObject);
    return true;
  }
  return false;
};

module.exports = registerService;
